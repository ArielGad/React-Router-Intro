const initState = {
    //dummy data
    posts: [
        {id: '1', title: 'Hello-World', body: 'Hello world is the first what you learn in every programming language.'},
        {id: '2', title: 'Foo', body: 'Foo is a classic name for a function'},
        {id: '3', title: 'Bar', body: 'Bar is a classic name for a function too'},
    ]
}

const rootReducer = (state=initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;