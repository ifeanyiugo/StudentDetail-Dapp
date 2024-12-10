import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { StudentDetailABI, StudentDetails_ADDRESS } from "../constants";

type Props = {};

const GetStudentName = (props: Props) => {
  const {
    data: getStudentNameData,
    isError: isGettingStudentNameError,
    isLoading: isGettingStudentName,
  } = useContractRead({
    address: StudentDetails_ADDRESS,
    abi: StudentDetailABI,
    functionName: "getStudentName",
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
      <p>FullName: {String(getStudentNameData)} </p>
      {isGettingStudentNameError && (
        <p className="text-sm font-normal">
          Error getting FullName, <br /> Please Check if wallet is connected...
        </p>
      )}
      {isGettingStudentName && <p>Getting FullName....</p>}
    </div>
  );
};

export default GetStudentName;
