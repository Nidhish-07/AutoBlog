import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const Token = (props) => {
  return <div>index</div>;
};

export default Token;

export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {
      },
    };
  });
  