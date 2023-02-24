import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = (props) => {
    const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        props.create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <div className='PostForm'>
            <form className='addPostForm' action="">
                <MyInput
                    type="text"
                    placeholder='Заголовок'
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />
                <MyInput
                    type="text"
                    placeholder='Описание'
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm;