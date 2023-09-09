
import BreadCrumb from "@/Components/BreadCrumb";
import OverviewBackend from "@/Components/OverviewBackend";
import UploadPaper from "@/Components/UploadPaper";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const CreateExam = () => {
  const [selectedValue, setSelectedValue] = useState("PYQs");
  

  return (
    <div className="w-full">
      {/* <BreadCrumb
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />

      <div className="h-[110px]"></div> */}

      {selectedValue == "Overview" && "Exam Info" ? (
        <OverviewBackend />
      ) : (
        <UploadPaper
          selectedValue={selectedValue}
        />
      )}
    </div>
  );
};

export default CreateExam;
