import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { StudentDetailABI, StudentDetails_ADDRESS } from "../constants";

type Props = {};

const SetStudentName = (props: Props) => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const { config: setStudentNameConfig } = usePrepareContractWrite({
    address: StudentDetails_ADDRESS,
    abi: StudentDetailABI,
    functionName: "studentName",
    args: [firstname, lastName],
  });

  const {
    data: sendStudentNameData,
    isError: isSettingStudentNameError,
    write: setStudentNameWrite,
  } = useContractWrite(setStudentNameConfig);

  const { isLoading: isSettingStudentName, isSuccess: isStudentNameSent } =
    useWaitForTransaction({
      hash: sendStudentNameData?.hash,
    });

  const handleSetName = async (e: any) => {
    e.preventDefault();
    console.log("Setting Name...");
    setStudentNameWrite?.();
  };

  return (
    <>
      <form action="" onSubmit={handleSetName}>
        <div className="flex flex-col gap-2">
          <label htmlFor="Company_name">First Name</label>
          <input
            value={firstname}
            onChange={(e: any) => setFirstName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="your first name"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 font-normal"
          />

          <label htmlFor="Company_name">Last Name</label>
          <input
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="your last name"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 font-normal"
          />
        </div>

        <button className="mt-4 bg-[#7F56D9] px-6 py-2 text-white rounded-lg">
          FullName
        </button>

        <article className="mt-4 text-sm">
          {isSettingStudentName && <p>Sending Student Name...</p>}

          {isSettingStudentNameError && (
            <p>There is an Error in Sending Student Name</p>
          )}

          {isStudentNameSent && (
            <p>Student Name Signed and Sent Successfully... </p>
          )}
        </article>
      </form>
    </>
  );
};

export default SetStudentName;
