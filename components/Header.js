import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex flex-row gap-6 items-center justify-center p-5">
      <div className="flex flex-row gap-6 items-center justify-center py-10">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h2 className="text-md font-bold">
          Symptom Based Disease Prediction & Basic Precaution Recommendation
          System Using Machine Learning
        </h2>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
