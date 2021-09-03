import { useState, useEffect } from 'react'
import { Post } from '../interfaces/Post.interface';
import { request } from '../util/request';
import { useGlobalState } from '../util/useGlobalState';

const apiHost = process.env.API_HOST || 'http://localhost:8080'

export const useViewPost = (id: string) => {
    const [ post, setPost ] = useState<Post | undefined>(undefined)
    const { loading, snackbar } = useGlobalState()

    const formatIndividualPost = (post: any): Post => {
        return {
            title: post?.description??'',
            body: post?.files?.['file.md']?.content??'',
            date: post?.created_at
        }
    }

    const getPosts = async () => {
        loading.set(true)

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                'data': {id}
            }),
            redirect: 'follow',
        };
        const data = await doRequest(
            `${apiHost}/api/get-post/`,
            requestOptions as any
        ).catch((error) => {
            console.error(error);
            snackbar.merge({
                open: true,
                message: 'Failed to load post',
                severity: 'error',
            });
            throw error;
        });

        if (!(data as any)?.success === true ) {
            snackbar.merge({
                open: true,
                message: 'Failed to load posts',
                severity: 'error',
            });
        }

        setPost(formatIndividualPost((data as any)?.result.data))
        loading.set(false)
    }

    const doRequest = async (
        url: string,
        options?: any
    ) => {
        try {
            return await request(url, options);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getPosts()
    }, [])

    return {
        post
    }
}