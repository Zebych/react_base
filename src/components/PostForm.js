import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()//отключает дефолтное поведение кнопки(отправка на сервер)
        /*      const newPost = {
                  id: Date.now(),// получить текущую дату-в милисекундах по этому получим уникальность
                  title,
                  body
              }*/
        const newPost = {...post, id: Date.now()}
        create(newPost)

        setPost({title: '', body: ''})

    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.currentTarget.value})}
                type="text"
                placeholder={'Название поста'}/>
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.currentTarget.value})}
                type="text"
                placeholder={'Описание поста'}/>
            <MyButton onClick={addNewPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;