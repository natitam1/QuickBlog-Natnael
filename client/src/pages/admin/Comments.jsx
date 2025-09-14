import React, { useState } from "react";
import { comments_data } from "../../assets/assets";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const fetchcomments = async () => {
    setComments(comments_data);
  };
  return <div>Comments</div>;
};

export default Comments;
