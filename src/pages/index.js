import BulletCard from '@/Components/BulletCard';
import Link from 'next/link';
import React, { useState } from 'react'
const data = {
  categories: [
    { id: 1, name: "SSC Exams" },
    { id: 2, name: "Banking Exams" },
    { id: 3, name: "Teaching Exams" },
    { id: 4, name: "Civil Exams" },
    { id: 5, name: "Railway Exams" },
    { id: 6, name: "Engineering Recruitment Exams" },
    { id: 7, name: "Defence Exams" },
  ],
  cards: {
    1: [
      {id: 1, title: "SSC CGL" },
      {id: 2, title: "SSC MTS" },
      {id: 3, title: "SSSC CPO" },
      {id: 4, title: "SSC CHSL" },
      {id: 5, title: "DELHI POLICE CONSTABLE" },
      {id: 6, title: "SSC GD CONSTABLE" },
      {id: 7, title: "SSC STENOGRAPHER" },
      {id: 8, title: "SSC JE CE" },
      {id: 9, title: "SSC JE ME" },
      {id: 10, title: "SSC JE EE" },
      {id: 11, title: "SSC SELECTION POST" },
      { id: 12,title: "EXPLORE ALL EXAMS" },
    ],
    2: [
      {id: 1, title: "IBPS CLERK" },
      {id: 2, title: "IBPS PO" },
      {id: 3, title: "RRP OFFICER SCAL - 1" },
      { id: 4,title: "SBI CLERK" },
      {id: 5, title: "RRB OFFICE ASSISTANT" },
      { id: 6,title: "SBI PO" },
      {id: 7, title: "CENTRAL BANK OF INDIA MANAGER" },
      {id: 8, title: "BANK OF INDIA PO" },
      {id: 9, title: "JAIIB EXAM" },
      {id: 10, title: "BOB ACQUSITION OFFICER" },
      {id: 11, title: "EPFO STENOGRAPHER" },
      {id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    3: [
      {id: 1, title: "UGC NET" },
      {id: 2, title: "BIHAR STET" },
      {id: 3, title: "EMRS HOSTEL WARDEN" },
      {id: 4, title: "JSSC PRIMARY TEACHER" },
      {id: 5, title: "DSSSB TGT" },
      {id: 6, title: "EMRS LIBRARIAN" },
      {id: 7, title: "EMRS ACCOUNTANT" },
      {id: 8, title: "CTET" },
      {id: 9, title: "BIHAR PRIMARY TECHER" },
      {id: 10, title: "EMRS TGT" },
      {id: 11, title: "EMRS PGT" },
      {id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    4: [
      {id: 1, title: "UGC NET" },
      {id: 2, title: "BIHAR STET" },
      {id: 3, title: "EMRS HOSTEL WARDEN" },
      {id: 4, title: "JSSC PRIMARY TEACHER" },
      {id: 5, title: "DSSSB TGT" },
      {id: 6, title: "EMRS LIBRARIAN" },
      {id: 7, title: "EMRS ACCOUNTANT" },
      {id: 8, title: "CTET" },
      {id: 9, title: "BIHAR PRIMARY TECHER" },
      {id: 10, title: "EMRS TGT" },
      {id: 11, title: "EMRS PGT" },
      {id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    5: [
      {id: 1, title: "UGC NET" },
      {id: 2, title: "BIHAR STET" },
      {id: 3, title: "EMRS HOSTEL WARDEN" },
      {id: 4, title: "JSSC PRIMARY TEACHER" },
      {id: 5, title: "DSSSB TGT" },
      {id: 6, title: "EMRS LIBRARIAN" },
      {id: 7, title: "EMRS ACCOUNTANT" },
      {id: 8, title: "CTET" },
      {id: 9, title: "BIHAR PRIMARY TECHER" },
      {id: 10, title: "EMRS TGT" },
      {id: 11, title: "EMRS PGT" },
      {id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    6: [
      {id: 1, title: "UGC NET" },
      {id: 2, title: "BIHAR STET" },
      {id: 3, title: "EMRS HOSTEL WARDEN" },
      {id: 4, title: "JSSC PRIMARY TEACHER" },
      {id: 5, title: "DSSSB TGT" },
      {id: 6, title: "EMRS LIBRARIAN" },
      {id: 7, title: "EMRS ACCOUNTANT" },
      {id: 8, title: "CTET" },
      {id: 9, title: "BIHAR PRIMARY TECHER" },
      {id: 10, title: "EMRS TGT" },
      {id: 11, title: "EMRS PGT" },
      {id: 12, title: "EXPLORE ALL EXAMS" },
    ],
    7: [
      {id: 1, title: "UGC NET" },
      {id: 2, title: "BIHAR STET" },
      {id: 3, title: "EMRS HOSTEL WARDEN" },
      {id: 4, title: "JSSC PRIMARY TEACHER" },
      {id: 5, title: "DSSSB TGT" },
      {id: 6, title: "EMRS LIBRARIAN" },
      {id: 7, title: "EMRS ACCOUNTANT" },
      {id: 8, title: "CTET" },
      {id: 9, title: "BIHAR PRIMARY TECHER" },
      {id: 10, title: "EMRS TGT" },
      {id: 11, title: "EMRS PGT" },
      {id: 12, title: "EXPLORE ALL EXAMS" },
    ],
  },
};
const Home = () => {
  const [activeCategory, setActiveCategory] = useState(data.categories[0].id);

  const activeCards = data.cards[activeCategory] || [];

  return (
    <div className="container mx-auto py-4">
      <div className="w-full h-[100px]">
        
      </div>
      <ul
        className="mb-5 flex w-full justify-between list-none flex-row flex-wrap border-b-2 pl-0"
        role="tablist"
      >
        {data.categories.map((category) => (
          <li
            role="presentation"
            key={category.id}
            className={` my-2 block border-b-2  px-2 pb-3.5 pt-4 font-medium uppercase leading-tight text-sm hover:bg-gray-100  focus:bg-gray-100 ${
              activeCategory === category.id
                ? "border-blue-400  bg-slate-100"
                : "border-none"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <Link href="#tabs-home" className="">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 w-full flex flex-wrap gap-3 justify-between  items-center ">
        {activeCards &&
          activeCards.map((activeCard, index) => (
            <BulletCard
              key={index}
              title={activeCard.title}
              activeCategoryName={data.categories[activeCategory-1].name}
              image={`/hero.png`}
            />
          ))}
      </div>
    </div>
  );
};

export default Home