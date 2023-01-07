import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultDB } from "../../assets/functions";
import MessageBox from "../MessageBox/MessageBox";

const ViewMessage = () => {
  const [message, setMessage] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    consultDB("/json/messages.json").then((messages) => {
      const msg = messages.find((message) => message.id === id);
      setMessage(msg);
    });
  }, [id]);

  return (
    <div>
      <MessageBox message={message}/>
    </div>
  );
};

export default ViewMessage;
