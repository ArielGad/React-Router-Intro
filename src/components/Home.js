import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    displayPosts = (posts) => {
        return posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                    {post.data}
                </div>
            )
        })
    };

    displayNoPosts = () => {
        return (
            <div className="container">
                No data
            </div>
        )
    };

    render() {
        const {posts} = this.state;
        const postList = posts.length ? (this.displayPosts(posts)) : (this.displayNoPosts());
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;
