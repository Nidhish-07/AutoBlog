import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import Layout from "../../components/Layout";

const NewPost = (props) => {
  console.log(props);
  return <div></div>;
};

export default NewPost;

NewPost.getLayout = function getLayout(page, pageProps) {
  return <Layout {...pageProps}>{page}</Layout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
