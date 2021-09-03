import { useState } from 'react'
import { Post, CreatePostErrors } from '../interfaces/Post.interface'
import { useHistory } from "react-router-dom";
import { homePage } from '../pages/pages';
import { request } from '../util/request';
import { useGlobalState } from '../util/useGlobalState';

const apiHost = process.env.API_HOST || 'http://localhost:8080'

const defaultState: Partial<Post> = {
    title: '',
    body: ''
}

const defaultErrors: CreatePostErrors = {
    title: undefined,
    body: undefined
}

export const useCreatePost = () => {
    const [ newPostState, setNewPostState ] = useState(defaultState)
    const [ newPostErrors, setNewPostErrors ] = useState(defaultErrors)
    const history = useHistory();
    const { loading, snackbar } = useGlobalState()

    const handleChange = (key: keyof Post, value: string) => {
        const updatedState = {...newPostState, [key]: value}
        setNewPostState(updatedState)
    }

    const validateSubmit = (): boolean => {
        const newErrors = {...defaultErrors}
        if (newPostState.title?.length === 0) {
            newErrors.title = 'Required Field'
        }
        if (newPostState.body?.length === 0) {
            newErrors.body = 'Required Field'
        }

        setNewPostErrors(newErrors)

        for (const [key, value] of Object.entries(newErrors)) {
            if (typeof value === 'string') return false
        }
        return true
    }

    const handleSubmit = async () => {
        loading.set(true)

        console.log(validateSubmit())

        if (validateSubmit()) {
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                    'data': {...newPostState}
                }),
                redirect: 'follow',
            };
            const data = await doRequest(
                `${apiHost}/api/create-post/`,
                requestOptions as any
            ).catch((error) => {
                console.error(error);
                snackbar.merge({
                    open: true,
                    message: 'Failed to submit post',
                    severity: 'error',
                });
                throw error;
            });
    
            if ((data as any)?.success === true ) {
                snackbar.merge({
                    open: true,
                    message: 'Post submitted',
                    severity: 'success',
                });
                history.push(homePage);
            }
            else {
                snackbar.merge({
                    open: true,
                    message: 'Failed to submit post',
                    severity: 'error',
                });
            }
        }
        loading.set(false)
    }

    const handleDiscard = () => {
        history.push(homePage);
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

    return {
        newPostState,
        newPostErrors,
        handleChange,
        handleSubmit,
        handleDiscard
    }
}