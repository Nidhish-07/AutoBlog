import Link from "next/link";
import React from "react";
import Image from "next/image";
import BackgroundImage from "../public/background.webp";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="w-screen overflow-hidden flex justify-center items-center h-screen relative ">
      <Image src={BackgroundImage} alt="bg" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm w-2/3">
        <Logo />
        <p className="text-lg mb-2">AI is the future.</p>
        <Link href={"/post/new"} className="btn">
          Start
        </Link>
      </div>
    </div>
  );
};

export default Home;
