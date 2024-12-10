import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { StudentDetailABI, StudentDetails_ADDRESS } from "../constants";

type Props = {};

const SetCountry = (props: Props) => {
  const [country, SetCountry] = useState<string>();

  const { config: setCountryConfig } = usePrepareContractWrite({
    address: StudentDetails_ADDRESS,
    abi: StudentDetailABI,
    functionName: "country",
    args: [country],
  });

  const {
    data: setCountryData,
    isError: isSettingCountryError,
    write: setCountryWrite,
  } = useContractWrite(setCountryConfig);

  const { isLoading: isSettingCountry, isSuccess: isCountrySetted } =
    useWaitForTransaction({
      hash: setCountryData?.hash,
    });

  const handleSetCountry = async (e: any) => {
    e.preventDefault();
    console.log("Setting Country...");
    setCountryWrite?.();
  };

  return (
    <>
      <form action="" onSubmit={handleSetCountry}>
        <div className="flex flex-col gap-2">
          <label htmlFor="Country_name">Country</label>
          <input
            value={country}
            onChange={(e: any) => SetCountry(e.target.value)}
            type="text"
            name="text"
            id="text"
            placeholder="your country"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 font-normal"
          />
        </div>

        <button className="mt-4 bg-[#7F56D9] px-6 py-2 text-white rounded-lg">
          Country
        </button>

        <article className="mt-4 text-sm">
          {isSettingCountry && <p>Setting Contry...</p>}

          {isSettingCountryError && <p>There is an Error in Setting Country</p>}

          {isCountrySetted && (
            <p>Country Name Signed and Sent Successfully... </p>
          )}
        </article>
      </form>
    </>
  );
};

export default SetCountry;
