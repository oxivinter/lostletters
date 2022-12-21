import React from "react";
import { Link } from "react-router-dom";
import "./MessageBox.css";

const MessageBox = () => {
  //PLACEHOLDER MESSAGE FOR GROUNDWORK PAGE LAYOUT
  //there is placeholder data on the links in the component, too.
  //erase this comment once the placeholder data is properly replaced.
  let msg = {
    id: "014281314",
    isReply: false,
    replyingTo: "",
    author: "Boggart",
    content: "Seek grass",
  };

  //TO DO: ANIMATION/TRANSITION MESSAGE FADE-IN
  return (
    <div className="boxContainer">
      <div className="messageBox">
        <div className="metaInfoRow">
          <p className="msgInfoLeft">ID #<Link to="/message/014281314">{msg.id}</Link></p>
          <p className="msgInfoRight">Message by <Link to="/author/Sieglinde">{msg.author}</Link></p>
        </div>
        <p className="primaryText">{msg.content}</p>
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
