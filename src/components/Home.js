import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';


class Home extends Component {

    displayPosts = (posts) => {
        return posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball"/>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
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
        console.log(this.props)
        const {posts} = this.props;
        const postList = posts.length ? (this.displayPosts(posts)) : (this.displayNoPosts());
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            posts: state.posts
        }
    };

export default connect(mapStateToProps)(Home);
