import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href={"/api/auth/login"}>Login </Link>
    </div>
  );
};

export default Home;
