import React from 'react'
import { AppBar } from '../../components/app-bar/AppBar'
import { CreatePost } from '../../components/create-post/CreatePost'

export const PostCreate = () => {

    return (
        <AppBar>
            <CreatePost />
        </AppBar>
    )
}