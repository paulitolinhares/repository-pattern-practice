import { Router } from "express";
import postsRepository from "../repositories/posts";
import { Post } from "../models/post";

const router = Router();

export type PostRequest = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>;

router.get('/', async (req, res) => {
  const posts = await postsRepository.getAll();

  res.status(200).json(posts);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await postsRepository.getById(id);

  if(post) {
    res.status(200).json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

router.post('/', async (req, res) => {
  const request = req.body as PostRequest;

  try {
    const post = await postsRepository.create(request);
    res.status(201).json(post);
  } catch(e) {
    // TODO handle prisma constraints and validate properly
    res.status(500).send('error creating post');
  }
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const request = req.body as Post;

  try {
    const post = await postsRepository.update({ ...request, id });
    res.status(200).json(post);
  } catch(e) {
    // TODO handle prisma constraints and validate properly
    res.status(500).send('error updating post');
  }
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await postsRepository.delete(id);

  res.status(204).send();
});

export default router;