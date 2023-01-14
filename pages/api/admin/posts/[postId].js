import Post from "../../../../models/Post";
import User from "../../../../models/User";
import PostCategory from "../../../../models/PostCategory";
import dbConnect from "../../../../lib/db-connect";
import { isAdminAuthenticated } from "../../../../lib/auth";
import mongoose from "mongoose";

export default async function post(req, res) {
  try {
    await dbConnect();
    if (!(await isAdminAuthenticated(req, res))) {
      return res.status(401).end("Unauthorized");
    }
    const { postId } = req.query;
    if (!mongoose.isValidObjectId(postId)) {
      return res.status(400).end("Post id is not a valid MongoDB ObjectId");
    }
    const post = await Post.findById(postId)
      .populate({ path: "user_id", model: User })
      .populate({ path: "category_id", model: PostCategory });
    if (!post) {
      return res.status(400).end("Cannot find post with such id");
    }

    if (req.method === "GET") {
      return res.status(200).send(post);
    } else if (req.method === "DELETE") {
      await Post.deleteOne({ _id: post._id });
      // TODO: usuwanie kaskadowe komentarzy i reakcji dotyczących tego posta
      return res.status(200).end();
    } else {
      return res.status(400).end(`Method '${req.method}' not allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}
