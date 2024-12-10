import React from "react";
import { useContractRead } from "wagmi";
import { StudentDetailABI, StudentDetails_ADDRESS } from "../constants";

type Props = {};

const GetCountry = (props: Props) => {
  const {
    data: getCountryData,
    isError: isGettingCountryError,
    isLoading: isGettingCountry,
  } = useContractRead({
    address: StudentDetails_ADDRESS,
    abi: StudentDetailABI,
    functionName: "getCountry",
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
      <p>Country: {String(getCountryData)} </p>
      {isGettingCountryError && (
        <p className="text-sm font-normal">
          Error getting Country, <br />
          Please Check if wallet is connected
        </p>
      )}
      {isGettingCountry && <p>Getting Country....</p>}
    </div>
  );
};

export default GetCountry;
