import Image from "next/image";
import React from "react";
import { Button } from "/components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6 p-6 md:gap-8 md:p-10 lg:gap-10">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>

      {/* Hero Text */}
      <h2 className="text-xl font-bold text-center text-gray-700 sm:text-3xl md:text-2xl lg:text-2xl max-w-4xl">
        Symptom Based Disease Prediction & Basic Precaution Recommendation
        System Using Machine Learning
      </h2>

      {/* Button */}
      <Link href="/dashboard">
        <Button className="px-6 py-3 text-sm sm:text-base md:px-8 md:py-4">
          Get Started
        </Button>
      </Link>
    </div>
  );
}

export default HeroSection;
