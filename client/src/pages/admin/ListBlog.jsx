import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return <div>ListBlog</div>;
};

export default ListBlog;
