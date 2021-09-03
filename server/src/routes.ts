import { Request, Response, Router } from 'express';
import { getAllBlogPosts, storePost, getPost } from './services/blog'

export const routes = (router: Router) => {

    router
        .route(`/get-posts`)
        .get(
        //   decodeToken,
        //   isAuthorized,
            getAllBlogPosts
        );

    router
        .route(`/create-post`)
        .post(
        //   decodeToken,
        //   isAuthorized,
            storePost
        );

    router
        .route(`/get-post`)
        .post(
        //   decodeToken,
        //   isAuthorized,
            getPost
        );
    
}