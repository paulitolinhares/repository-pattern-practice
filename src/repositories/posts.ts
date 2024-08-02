import { Post } from "../models/post";
import { PostRequest } from "../routes/posts";
import db from '../db'
import { Repository } from "./types";

const postsRepository: Repository<Post> = {
  async getAll() {
    return await db.post.findMany();
  },
  async getById(id) {
    return await db.post.findUnique({ where: { id } });
  },
  async create(post) {
    return await db.post.create({ data: post });
  },
  async update(post) {
    const { id, ...data } = post;
    return await db.post.update({ where: { id: post.id }, data });
  },
  async delete(id) {
    await db.post.delete({ where: { id } });
  },
};

export default postsRepository;