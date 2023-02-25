import React, {useState, useMemo} from 'react'
import PostForm from "./Components/PostForm";
import PostsList from "./Components/PostsList";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import styles from './App.module.css'

function App() {

    // state
    const [posts, setPosts] = useState([
        {id: 1, title: 'A', body: 'C'},
        {id: 2, title: 'B', body: 'B'},
        {id: 3, title: 'C', body: 'A'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    // computed
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <div className="container">
                <MyButton onClick={() => setModal(!modal)}>Добавить пост</MyButton>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <PostsList posts={sortedAndSearchedPosts} remove={removePost}/>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
            </div>
        </div>
    );
}

export default App;