import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <div>
      <SignedIn>
        <div className="text-center mt-4">
          <UserButton />
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-center items-center bg-slate-800 p-8 mb-32">
          <Link href="/sign-in">
            <button className="flex mr-10">
              <span className=" ">Sign In</span>
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="flex">
              <span className=""> Sign Up </span>
            </button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default Header;