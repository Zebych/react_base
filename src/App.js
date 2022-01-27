import React, {useEffect, useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostsLoading(true)
        const posts = await PostService.getAll()
        setPosts(posts)
        setIsPostsLoading(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(({id}) => id !== post.id))
    }

    return (
        <div className='App'>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>

            {isPostsLoading
                ?
                <h1>Идёт загрузка....</h1>
                :
                <PostList remove={removePost} posts={sortedAndSearchedPosts}
                          title={'Список постов1'}/>
            }

        </div>
    );
}

export default App;
