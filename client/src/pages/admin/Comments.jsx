import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const fetchcomments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchcomments();
  }, []);
  return <div className="flex-1 pt-5 px-5"></div>;
};

export default Comments;
