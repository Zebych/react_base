import React, {useMemo, useState} from "react";
import "./styles/app.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aadsf', body: 'sder'},
        {id: 2, title: 'JdhgfgfS2', body: 'aerr'},
        {id: 3, title: 'Sdgff3', body: 'fgdf'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})

    //useMemo- используется когда в callback производятся какие-то вычисления
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            // метод sort мутирует объект по этому создаем копию
            //localeCompare-сравнивает значения
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(({title}) => title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(({id}) => id !== post.id))
    }

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length !== 0
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts}
                          title={'Список постов1'}/>
                :
                <h1 style={{textAlign: 'center', color: 'red'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
