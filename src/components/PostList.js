import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,title,remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts && posts.map((post,index) =><PostItem remove={remove} number={index+1} post={post} key={post.id}/>)}
        </div>
    );
};
//number={index+1}- получаем порядковый номер в массиве +1 чтоб отсчет не с 0 шел
export default PostList;