import React, { Component } from 'react';
import Tweet from './Tweet.jsx';
import TweetForm from './TweetForm.jsx';


class Feed extends Component {
    render() {
        return (
            <div className="feed">
                <TweetForm />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        );
    }
}

export default Feed;