import { Grid } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div className="pt-16">
      <div className="px-4 sm:px-6 md:px-10 lg:px-24">
        <div className="flex flex-col sm:flex-row flex-wrap justify-around space-y-8 sm:space-y-0">
          {/* First Item */}
          <div className="w-full sm:w-1/2 flex flex-col md:flex-row md:pl-8 lg:pl-24 items-center">
            <img
              src="/images/landing/coin.svg"
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]"
              alt="Coin"
            />
            <div className="text-[11px] sm:text-sm md:text-base leading-6 md:leading-8 text-black bg-[url('/images/landing/coinTextBG.svg')] bg-cover bg-center bg-no-repeat w-[90%] sm:w-[300px] md:w-[350px] lg:w-[500px] h-auto p-8 md:p-6 mt-4 md:mt-0">
              THROUGH OUR PLATFORM, YOU CAN BUY AND SELL TRAITS WITH ONE
              ANOTHER.
            </div>
          </div>

          {/* Second Item */}
          <div className="w-full sm:w-1/2 flex flex-col md:flex-row md:px-4 pt-8 md:pt-0 items-center">
            <img
              src="/images/landing/star.svg"
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]"
              alt="Star"
            />
            <div className="text-[11px] sm:text-sm md:text-base leading-4 text-black bg-[url('/images/landing/starTextBG.svg')] bg-cover bg-center bg-no-repeat w-[80%] sm:w-[300px] md:w-[350px] lg:w-[520px] h-auto p-12 md:p-6 mt-4 md:mt-0">
              STAKE YOUR HOODYGANG NFT TO GAIN POINTS THAT CAN BE USED TO
              ACQUIRE COMIC BOOKS, AND POSTERS FEATURING YOU AS THE MAIN
              CHARACTER! <br />
              <br />
              JUST SEND US A PICTURE OF YOURSELF AND WE’LL HANDLE THE REST.
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex justify-center py-8">
          <div className="w-full sm:w-2/3">
            <div className="flex flex-col md:flex-row sm:px-6 lg:px-24 items-center">
              <img
                src="/images/landing/key.svg"
                className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]"
                alt="Key"
              />
              <div className="text-[11px] sm:text-sm md:text-base leading-4 text-black bg-[url('/images/landing/keyTextBG.svg')] bg-cover bg-center bg-no-repeat w-[80%] sm:w-[300px] md:w-[350px] lg:w-[500px] h-auto p-12 md:p-6 mt-4 md:mt-0">
                OUR PLATFORM WILL UPDATE ALL METADATA, ENSURING THE TRAITS YOU
                SELECT ARE STORED ON THE BLOCKCHAIN, SO YOU CAN BE SURE OF THE
                AUTHENTICITY AND OWNERSHIP OF YOUR HOODYGANG NFT.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="my-16 sm:my-32 w-full">
        <img src="/images/landing/rip.png" className="w-full" alt="Rip" />
      </div>
    </div>
  );
}
