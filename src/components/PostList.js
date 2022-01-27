import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center', color: 'red'}}>Посты не найдены</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>

            <TransitionGroup>
                {posts && posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={500} classNames={'post'}>
                        <PostItem remove={remove}
                                  number={index + 1}
                                  post={post}
                        />
                    </CSSTransition>
                )}

            </TransitionGroup>
        </div>
    );
};
//number={index+1}- получаем порядковый номер в массиве +1 чтоб отсчет не с 0 шел
export default PostList;