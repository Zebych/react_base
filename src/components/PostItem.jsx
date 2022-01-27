import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    let navigate = useNavigate();
    return (
        <div className={'post'}>
            <div className={'post_container'}>
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className={'post_btns'}>
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
            </div>
            <div className={'post_btns'}>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;