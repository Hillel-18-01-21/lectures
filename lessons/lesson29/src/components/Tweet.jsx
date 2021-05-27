import React from "react";
import dayjs from "dayjs";

const Tweet = ({
  user = {},
  createdAt,
  content,
  id,
  statistic = {},
  onLikeClick,
  onCommentClick,
  onReplyClick,
}) => {
  return (
    <div className="tweet nes-container is-rounded">
      <div className="avatar">
        <img
          className="nes-avatar is-rounded is-large"
          alt="User's avatar"
          src={user.avatarUrl}
        />
      </div>
      <div>
        <div>
          <div className="tweet-title">
            <h5 className="tweet-name">
              {user.firstName} {user.lastName}
            </h5>
            <h5 className="tweet-nickname">@{user._nickname}</h5>
            <h6 className="tweet-date nes-text">
              {dayjs(createdAt).fromNow()}
            </h6>
          </div>
          <p className="tweet-content">{content}</p>
        </div>
        <div className="tweet-actions-container">
          <div className="tweet-action" onClick={() => onLikeClick(id)}>
            <img
              className="action-icon"
              src="https://cdn.jsdelivr.net/npm/pixelarticons@latest/svg/heart.svg"
            />
            <span className="counter">{statistic.likes}</span>
          </div>

          <div className="tweet-action" onClick={() => onReplyClick(id)}>
            <img
              className="action-icon"
              src="https://cdn.jsdelivr.net/npm/pixelarticons@latest/svg/forward.svg"
            />
            <span className="counter">{statistic.replies}</span>
          </div>

          <div className="tweet-action" onClick={() => onCommentClick(id)}>
            <img
              className="action-icon"
              src="https://cdn.jsdelivr.net/npm/pixelarticons@latest/svg/message-reply.svg"
            />
            <span className="counter">{statistic.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
