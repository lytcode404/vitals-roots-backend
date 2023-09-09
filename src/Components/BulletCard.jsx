import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BulletCard = ({ title, image }) => {
    return (
      <>
        <Head>
          <style>
            {`
        #card:hover svg {
          transform: translateX(5px);
          transition: transform 0.3s ease-in-out;
        }
      `}
          </style>
        </Head>
        <Link
          href={`#`}
          id="card"
          className="card rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out flex justify-between items-center cursor-pointer hover:scale-110 p-4 w-[30%]"
        >
          <div className="flex justify-between">
            <Image src={image} alt={title} height={44} width={44} className="rounded-full w-16 h-16" />
            <div className="py-4">
              <h2 className="text-md">{title}</h2>
            </div>
          </div>
          <div className="flex items-center justify-end p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </>
    );
  };

  export default BulletCard