import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Post = ({ post }) => {
    const { author, votes, url, title } = post
    return (
        <li>
            {author} | {votes} | <a target="_blank" href={url}>{title}</a>
        </li>
    )
}
function Reddit() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://www.reddit.com/r/reactjs/new.json?sort=new`, { method: 'GET' })
            .then(response => {
                const newPosts = response.data.data.children
                    .map(obj => obj.data)
                    .map(obj => {
                        return {
                            created: obj.created,
                            author: obj.author_fullname,
                            title: obj.title,
                            url: obj.url,
                            votes: obj.ups
                        }
                    });
                console.log(newPosts);
                setPosts(newPosts);
            })
    }, [])

    return (
        <div>
            <h1>/r/reactjs</h1>
            <div>
                {posts.map(post => (
                    <Post key={post.created} post={post} />
                ))}
            </div>
        </div>
    )
}

ReactDOM.render(<Reddit />, document.getElementById('root'))