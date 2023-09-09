import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";


const Question = ({
  q,
  index,
  setQuestions,
  questions
}) => {

  


  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const duplicateQuestion = (index) => {
    const duplicatedQuestion = { ...questions[index] };
    setQuestions([...questions, duplicatedQuestion]);
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const addRemedyIngredient = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].remedyIngredients[`ingredient${Object.keys(updatedQuestions[index].remedyIngredients).length + 1}`] = "";
    setQuestions(updatedQuestions);
  };

  const deleteRemedyIngredient = (questionIndex, ingredientKey) => {
    const updatedQuestions = [...questions];
    delete updatedQuestions[questionIndex].remedyIngredients[ingredientKey];
    setQuestions(updatedQuestions);
  };

  return (
    <div key={index} id={index} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Question {index + 1}</h2>
      <button
        className="bg-red-500 text-white py-1 px-2 rounded mb-2"
        onClick={() => deleteQuestion(index)}
      >
        Delete
      </button>
      <button
        className="bg-green-500 text-white py-1 px-2 rounded mb-2 ml-2"
        onClick={() => duplicateQuestion(index)}
      >
        Duplicate
      </button>

      <input
        type="text"
        className="border rounded w-full px-2 py-1 mb-2"
        placeholder="Disease Name"
        value={q.diseaseName}
        onChange={(e) => updateQuestion(index, "diseaseName", e.target.value)}
      />

      {Object.keys(q.remedyIngredients).map((ingredientKey) => (
        <div key={ingredientKey} className="flex items-center mb-2">
          <input
            type="text"
            className="border rounded w-full px-2 py-1 mr-2"
            placeholder={`Ingredient ${ingredientKey}`}
            value={q.remedyIngredients[ingredientKey]}
            onChange={(e) =>
              updateQuestion(index, "remedyIngredients", {
                ...q.remedyIngredients,
                [ingredientKey]: e.target.value,
              })
            }
          />
          <button
            className="bg-red-500 text-white py-1 px-2 rounded"
            onClick={() => deleteRemedyIngredient(index, ingredientKey)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        className="bg-blue-500 text-white py-1 px-2 rounded mb-2"
        onClick={() => addRemedyIngredient(index)}
      >
        Add Ingredient
      </button>

      <textarea
        type="text"
        className="border rounded w-full px-2 py-1 mb-2"
        placeholder="Dosage"
        value={q.dosage}
        onChange={(e) => updateQuestion(index, "dosage", e.target.value)}
      ></textarea>
      
      

      <textarea
        type="text"
        className="border rounded w-full px-2 py-1 mb-2"
        placeholder="Symptoms"
        value={q.symptoms}
        onChange={(e) => updateQuestion(index, "symptoms", e.target.value)}
      ></textarea>
    </div>
  );
};

export default Question;
