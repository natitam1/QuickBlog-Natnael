import React from "react";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);
  return <div className="order-y border-gray-300"></div>;
};

export default CommentTableItem;
