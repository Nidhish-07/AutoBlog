import Link from "next/link";
import React from "react";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const Home = () => {
  const { user } = useUser();

  console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <Image
            src={user.picture}
            alt={user.name}
            height={50}
            width={50}
          ></Image>
          <div>{user.email}</div>
          <Link href={"/api/auth/logout"}>Logout </Link>
        </div>
      ) : (
        <Link href={"/api/auth/login"}>Login </Link>
      )}
    </div>
  );
};

export default Home;
