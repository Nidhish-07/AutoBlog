import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const Post = (props) => {
  return <div>Post</div>;
};

export default Post;

export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {
      },
    };
  });
  