import Sidebar from "@/Components/Sidebar";
import { db } from "@/db/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Image from 'next/image'
import dynamic from "next/dynamic";
import Head from "next/head";
import Question from "@/Components/Question";





export default function UploadPaper({selectedValue,activeCategoryName,categoryTitle}) {
  const [questions, setQuestions] = useState([
    {
      diseaseName: "",
      remedyIngredients: {},
      dosage: "",
      symptoms: "",
    },
  ]);
  
  const [diseaseCategory, setDiseaseCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateToQuestion = (index) => {
    setActiveIndex(index);
  };

 const addQuestion = () => {
  setQuestions([
    ...questions,
    {
      diseaseName: "",
      remedyIngredients: {},
      dosage: "",
      symptoms: "",
    },
  ]);
  console.log(questions)
};


  const handleTestNameChange = (e) => {
    setDiseaseCategory(e.target.value);
  };

  const handleUploadTest = async () => {

    if (diseaseCategory.trim() === "") {
      alert("Test name cannot be empty");
      return;
    }

    try {
      for (const question of questions) {
        const { diseaseName, ...data } = question;
  
        // Reference the `diseaseCategory` collection and create a document with `diseaseName`
        const categoryDocRef = doc(db, diseaseCategory, diseaseName);
  
        // Set the document data, excluding `diseaseName`
        await setDoc(categoryDocRef, data);
      }
  
      alert("Test uploaded successfully!");
      setDiseaseCategory("");
      setQuestions([]);
    } catch (error) {
      console.error("Error uploading test:", error);
      alert("An error occurred while uploading the test.");
    }
  };



  //   try {
  //     await setDoc(doc(db, diseaseCategory, ), {
  //       test: questions,
  //     });

  //     alert("Test uploaded successfully!");
  //     setDiseaseCategory("");
  //     setQuestions([]);
  //   } catch (error) {
  //     console.error("Error uploading test:", error);
  //     alert("An error occurred while uploading the test.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 p-8 grid grid-cols-[5fr,1fr] gap-4">
      {/* Left Column */}
      <Scrollbars style={{ height: "calc(100vh - 64px)" }}>
        <h1 className="text-2xl font-semibold mb-4">Questionnaire</h1>
        {questions.map((q, index) => (
          <Question key={index} q={q} index={index} setQuestions={setQuestions} questions={questions} />
        ))}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={addQuestion}
        >
          Add Question
        </button>

        <div className="my-4">
            
          <h2 className="text-xl font-semibold mb-2">Create Test</h2>
          {/* <p><span className="text-red-400">Warning:</span>the test will be uploaded in :</p>
          {"/ "}{selectedValue}{"/ "} */}
          
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Test Name"
            value={diseaseCategory}
            onChange={handleTestNameChange}
          />
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
            onClick={handleUploadTest}
          >
            Upload Test
          </button>
        </div>
      </Scrollbars>
      {/* Sidebar Navigation */}
      <Sidebar
        questions={questions}
        activeIndex={activeIndex}
        onNavigate={navigateToQuestion}
      />
    </div>
  );
}
