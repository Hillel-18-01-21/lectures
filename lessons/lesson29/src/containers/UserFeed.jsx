import React, { Component } from "react";

import { tweets } from "../mocks";
import { Feed } from "../components";

class UserFeed extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    this.setState({
      tweets,
    });
  }

  onTweetLike = (id) => {
    const tweet = this.state.tweets.find(e => e._id === id);
    tweet.statistic.likes++;

    const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
    this.setState({ tweets });
  };

  onTweetReply = (id) => {
    const tweet = this.state.tweets.find(e => e._id === id);
    tweet.statistic.replies++;

    const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
    this.setState({ tweets });
  };

  onTweetComment = (id) => {
    const tweet = this.state.tweets.find(e => e._id === id);
    tweet.statistic.comments++;

    const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
    this.setState({ tweets });
  };

  render() {
    return (
      <Feed
        tweets={this.state.tweets}
        onLike={this.onTweetLike}
        onComment={this.onTweetComment}
        onReply={this.onTweetReply}
      />
    );
  }
}

export default UserFeed;
