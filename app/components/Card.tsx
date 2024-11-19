import Image from "next/image";
import Link from "next/link";
import type { CharacterObject } from "../types/character";

interface CardProps {
  characterData: CharacterObject;
}
const Card = ({ characterData }: CardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image
          src={characterData.image}
          height={500}
          width={300}
          alt="Image not rendered!"
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {characterData.name}
        </h5>

        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-1 justify-center ">
          <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
            {characterData.status}
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-purple-300">
            {characterData.species}
          </span>
          <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-purple-300">
            {characterData.gender}
          </span>
        </div>
        <Link
          href="#"
          className=" mt-3 inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-dark-700  hover:bg-[#ccc]-800focus:outline-none  dark:bg-gray-600 dark:hover:bg-[#ccc]-700 dark:focus:ring-blue-800 shadow-md"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
