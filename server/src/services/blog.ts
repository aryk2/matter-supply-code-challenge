import { Request, Response } from 'express';
import { Octokit } from "octokit";

const getOctokit = () => new Octokit({ auth: process.env.GIST_ACCESS_TOKEN });

export const getAllBlogPosts = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const octokit = getOctokit()

      console.info('Fetching All Gists for user', req.body?.data?.username??'')

      const gistResult = await octokit.request('GET /users/{username}/gists', {
        username: req.body?.data?.username??''
      })
      res.status(200).send({
        success: true,
        result: gistResult
      });
    } catch (error) {
      console.error('failed to get blog posts', error);
      res.status(400).json({ error });
    }
};

export const storePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const octokit = getOctokit()

    const { title, body } = req.body.data

    console.info('Storying New Gist: ', title)

    await octokit.rest.gists.create({
      description: title,
      public: true,
      files: {
        "file.md": { content: body },
      },
    });

    res.status(200).send({
        success: true
    });
  } catch (error) {
    console.error('failed to create blog post', error);
    res.status(400).json({ error });
  }
};

export const getPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const octokit = getOctokit()

    const { id } = req.body.data

    console.info('Fetching Gist ID: ', id)

    const gistResult = await octokit.request('GET /gists/{gist_id}', {
      gist_id: id
    })

    res.status(200).send({
        success: true,
        result: gistResult
    });
  } catch (error) {
    console.error('failed to create blog post', error);
    res.status(400).json({ error });
  }
};