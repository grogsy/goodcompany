import React from "react";

import PostHeaderCard from "./postitem";

const Posts = props => {
  const { posts } = props;
  return (
    <div>
      {posts.map((item, index) => {
        return <PostHeaderCard item={item} key={index} />;
      })}
    </div>
  );
};

export default Posts;
