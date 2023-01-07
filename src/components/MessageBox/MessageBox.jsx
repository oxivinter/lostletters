import React from "react";
import { Link } from "react-router-dom";
import "./MessageBox.css";

const MessageBox = ({ message }) => {
  return (
    <div className="boxContainer">
      <div className="messageBox">
        <div className="metaInfoRow">
          <p className="msgInfoLeft">ID #<Link to="/">{message.id}</Link></p>
          <p className="msgInfoRight">Message by <Link to="/author/">{message.author}</Link></p>
        </div>
        <p className="primaryText">{message.content}</p>
      </div>
      <div className="buttonBox">
        <button className="btn actionText">Appraise</button>
        <button className="btn actionText">Reply</button>
      </div>
      <div className="moreRepliesBox">
        <button className="noBtn msgInfoRight"><Link to="/">See Other Replies</Link></button>
      </div>
    </div>
  );
};

export default MessageBox;
