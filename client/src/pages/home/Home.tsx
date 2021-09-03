import { PostsList } from '../../components/posts-list/PostsList'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { useListPosts } from '../../hooks/useListPosts'

export const Home = () => {
    const {
        posts,
        searchTerm,
        searchBoxExpanded,
        handleChange,
        handleSubmit
    } = useListPosts()


    return (
        <SearchBar 
            searchTerm={searchTerm}
            searchBoxExpanded={searchBoxExpanded}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        >
            {!!posts?.length &&
                <PostsList posts={posts} searchTerm={searchTerm}/>
            }

        </SearchBar>
    )
}