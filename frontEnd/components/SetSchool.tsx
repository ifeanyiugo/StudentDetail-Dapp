import React, { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { StudentDetailABI, StudentDetails_ADDRESS } from "../constants";

type Props = {};

const SetSchool = (props: Props) => {
  const [school, setSchool] = useState<string>("");

  const { config: setSchoolConfig } = usePrepareContractWrite({
    address: StudentDetails_ADDRESS,
    abi: StudentDetailABI,
    functionName: "school",
    args: [school],
  });

  const {
    data: setSchoolData,
    isError: isSettingSchoolError,
    write: setSchoolWrite,
  } = useContractWrite(setSchoolConfig);

  const { isLoading: isSettingSchool, isSuccess: isSchoolSetted } =
    useWaitForTransaction({
      hash: setSchoolData?.hash,
    });

  const handleSetName = async (e: any) => {
    e.preventDefault();
    console.log("Setting School...");
    setSchoolWrite?.();
  };

  return (
    <>
      <form action="" onSubmit={handleSetName}>
        <div className="flex flex-col gap-2">
          <label htmlFor="School_name">School Name</label>
          <input
            value={school}
            onChange={(e: any) => setSchool(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="your school"
            className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 font-normal"
          />
        </div>

        <button className="mt-4 bg-[#7F56D9] px-6 py-2 text-white rounded-lg">
          School
        </button>

        <article className="mt-4 text-sm">
          {isSettingSchool && <p>Setting School...</p>}

          {isSettingSchoolError && (
            <p>There is an Error in Setting School Name</p>
          )}

          {isSchoolSetted && <p>Schol Name Signed and Sent Successfully... </p>}
        </article>
      </form>
    </>
  );
};

export default SetSchool;
