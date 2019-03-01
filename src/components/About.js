import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid commodi cum earum esse et fugiat in laboriosam minus modi molestiae mollitia, nam omnis recusandae rem sed tempora vero voluptatem.</p>
        </div>
    )
};
export default Rainbow(About);