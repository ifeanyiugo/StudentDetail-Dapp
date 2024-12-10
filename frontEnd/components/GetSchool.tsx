import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { StudentDetailABI, StudentDetails_ADDRESS } from "../constants";

type Props = {};

const GetSchool = (props: Props) => {
  const {
    data: getSchoolData,
    isError: isGettingSchoolError,
    isLoading: isGettingSchool,
  } = useContractRead({
    address: StudentDetails_ADDRESS,
    abi: StudentDetailABI,
    functionName: "getSchool",
    watch: true,
    onSuccess(data) {
      console.log("Success", data);
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  return (
    <div>
      <p> School: {String(getSchoolData)} </p>
      {isGettingSchoolError && (
        <p className="text-sm font-normal">
          Error getting School, <br />
          Please Check if wallet is connected
        </p>
      )}
      {isGettingSchool && <p>Getting School....</p>}
    </div>
  );
};

export default GetSchool;
