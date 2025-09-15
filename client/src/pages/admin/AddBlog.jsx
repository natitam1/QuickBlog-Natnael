import React, { useState } from "react";
import { assets } from "../../assets/assets";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState("false");
  return (
    <form className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll">
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={assets.upload_area}
            className="mt-2 h-1/6 rounded cursor-pointer"
            alt=""
          />
          <input type="file" id="image" hidden required />
        </label>
      </div>
    </form>
  );
};

export default AddBlog;
