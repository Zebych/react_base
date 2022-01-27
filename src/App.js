import React, {useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aadsf', body: 'sder'},
        {id: 2, title: 'JdhgfgfS2', body: 'aerr'},
        {id: 3, title: 'Sdgff3', body: 'fgdf'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

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
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(({id}) => id !== post.id))
    }

    return (
        <div className='App'>
            <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts}
                      title={'Список постов1'}/>
        </div>
    );
}

export default App;
