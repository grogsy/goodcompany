import React from "react";

const PostItem = props => {
  const { author, title } = props.item;
  return (
    <div>
      <h3>{title}</h3>
      <small> Posted By: {author}</small>
    </div>
  );
};

export default PostItem;
