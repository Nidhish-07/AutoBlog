import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import Layout from "../components/Layout";

const Coin = (props) => {
  return <div>index</div>;
};

export default Coin;

Coin.getLayout = function getLayout(page, pageProps) {
  return <Layout {...pageProps}>{page}</Layout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
