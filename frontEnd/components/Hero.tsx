import React from "react";
import SetName from "./SetSchool";
import GetName from "./GetSchool";
import SetNumber from "./SetCountry";
import GetNumber from "./GetCountry";
import SendMessage from "./SetStudentName";
import GetMessage from "./GetStudentName";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      {/* <h2 className="flex items-center justify-center text-4xl font-bold mt-6">
        StudentDetail Dapp
      </h2> */}

      <div className="flex flex-row mt-20 items-center justify-center gap-20 font-bold">
        <div className="flex-col space-y-10">
          <SendMessage />

          <GetMessage />
        </div>

        <div className="flex-col space-y-10">
          <SetName />

          <GetName />
        </div>

        <div className="flex-col space-y-10">
          <SetNumber />
          <GetNumber />
        </div>
      </div>
    </>
  );
};

export default Hero;
