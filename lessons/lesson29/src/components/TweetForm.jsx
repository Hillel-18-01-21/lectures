import React, { Component } from "react";

class TweetForm extends Component {
  render() {
    return (
      <div className="nes-container is-rounded tweet-form">
        <form method="dialog">
          <label for="textarea_field">What's happening?</label>
          <textarea id="textarea_field" className="nes-textarea"></textarea>
          <menu className="dialog-menu tweet-form-actions">
            <button className="nes-btn is-primary">Tweet</button>
          </menu>
        </form>
      </div>
    );
  }
}

export default TweetForm;
