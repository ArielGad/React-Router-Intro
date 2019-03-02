import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from "../actions/PostActions";


class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        // redirect to home page after deletion
        this.props.history.push('/');
    }
    render() {
        const postToDisplay = this.props.post ?
            (
                <div className="post">
                    <h4 className="center">{this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={this.handleClick}>
                            Delete Post
                        </button>
                    </div>
                </div>
            )
            :
            (<div className="container">Loading post...</div>);
        return (
            <div className="container">
                <h4>{postToDisplay}</h4>
            </div>
        );
    }
}
// ownProps refers to the props that were passed down by the parent.
// take a look at the App.js
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);