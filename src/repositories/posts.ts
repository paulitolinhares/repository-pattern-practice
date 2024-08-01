import { Post } from "../models/post";
import { PostRequest } from "../routes/posts";
import db from '../db'

interface PostsRepository {
  getPosts(): Promise<Post[]>;
  getPostById(id: number): Promise<Post>;
  createPost(post: PostRequest): Promise<Post>;
  updatePost(post: PostRequest): Promise<void>;
  deletePost(id: number): Promise<void>;
}

const postsRepository: PostsRepository = {
  async getPosts() {
    return await db.post.findMany();
  },
  async getPostById(id) {
    return await db.post.findUnique({ where: { id } });
  },
  async createPost(post) {
    return await db.post.create({ data: post });
  },
  async updatePost(post) {
    // This is a placeholder for a real implementation
  },
  async deletePost(id) {
    // This is a placeholder for a real implementation
  },
};

export default postsRepository;