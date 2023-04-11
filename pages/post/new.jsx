import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const NewPost = (props) => {
  console.log(props);
  return <div></div>;
};

export default NewPost;

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
    },
  };
});
