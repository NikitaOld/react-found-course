import React from 'react';
import PostItem from "./PostItem";

const PostsList = (props) => {
    if (!props.posts.length){
        return (
            <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
        )
    }

    return (
        <div className='PostsList'>
            {props.posts.map((post, index) =>
                <PostItem post={post} number={index + 1} key={post.id} remove={props.remove}/>)}
        </div>
    );
};

export default PostsList;