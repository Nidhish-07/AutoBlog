import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className=" flex flex-col overflow-hidden text-white">
        <div className="bg-indigo-600">
          <div>asd</div>
          <div>asd</div>
          <div>sad</div>
        </div>
        <div className="flex-1 overflow-auto bg-gradient-to-b from-indigo-600 to-blue-400 "></div>
        <div className="bg-blue-400 flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
          {user ? (
            <React.Fragment>
              <div className="min-w-[50px]">
                <Image
                  src={user.picture}
                  alt={user.name}
                  height={50}
                  width={50}
                  className="rounded-ful"
                ></Image>
              </div>
              <div className="flex-1">
                <div className="font-bold">{user.email}</div>
                <Link className="text-sm" href={"/api/auth/logout"}>
                  Logout
                </Link>
              </div>
            </React.Fragment>
          ) : (
            <Link href={"/api/auth/login"}>Login</Link>
          )}
        </div>
      </div>
      <div className="">{children}asdas </div>
    </div>
  );
};

export default Layout;
