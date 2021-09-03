import { useState, useEffect, ChangeEvent } from 'react'
import { request } from '../util/request';
import { Post } from '../interfaces/Post.interface'
import { useGlobalState } from '../util/useGlobalState';

const apiHost = process.env.API_HOST || 'http://localhost:8080'
const fetchSearchTermFromLocalstorage = () => window.sessionStorage.getItem('searchString')??''

export const useListPosts = () => {
    const [ posts, setPosts ] = useState<Post[]>([])
    const { loading, snackbar } = useGlobalState()
    const [ searchTerm, setSearchTerm ] = useState<string>(fetchSearchTermFromLocalstorage())
    const [ searchBoxExpanded, setSearchBoxExanded ] = useState<boolean>(true)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target
        window.sessionStorage.setItem('searchString', value)
        setSearchTerm(value)
    }

    const handleSubmit = () => {
        if (searchTerm?.length === 0) return 

        setSearchBoxExanded(false)
        getPosts()
    }

    const formatPostData = (item: any): Post => {
        return {
            title: item?.description,
            date: item?.created_at,
            id: item?.id
        }
    }

    const getPosts = async () => {

        loading.set(true)
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                'data': {username: searchTerm}
            }),
            redirect: 'follow',
        };
        const data = await doRequest(
            `${apiHost}/api/get-posts/`,
            requestOptions as any
        ).catch((error) => {
            console.error(error);
            snackbar.merge({
                open: true,
                message: 'Failed to load posts',
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

        const formattedData = ((data as any)?.result.data as any[])?.map((item: any) => formatPostData(item))

        setPosts(formattedData)
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
        const searchTerm = fetchSearchTermFromLocalstorage()
        if (searchTerm !== '') {
            setSearchBoxExanded(false)
            getPosts()
        }
    }, [])

    return {
        posts,
        searchTerm,
        searchBoxExpanded,
        handleChange,
        handleSubmit
    }
}