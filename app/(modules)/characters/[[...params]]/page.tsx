import Card from "@/app/components/Card";
import Pagination from "@/app/components/Pagination";
import { CharacterObject } from "@/app/types/character";
import { notFound } from "next/navigation";

// Fetch characters for the current page
const fetchCharacter = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  if (!response.ok) {
    // Throw error to trigger redirect
    notFound();
  }
  return await response.json();
};

const Page = async ({ params }: any) => {
  const allParams = await params;
  const paramsArray = allParams.params;
  let currentPage = 1;
  if (paramsArray) {
    currentPage = parseInt(paramsArray[0]);
  }

  const data = await fetchCharacter(currentPage);
  const characters: CharacterObject[] = data.results;
  const paginationData = data.info;
  return (
    <section className="text-center flex flex-col gap-10 items-center ">
      <div>
        <h1 className="text-4xl font-bold m-2">Character Lists</h1>
      </div>
      <div className="card-list flex gap-5 flex-wrap mx-auto justify-center mt-3">
        {characters.map((character) => (
          <Card key={character.id} characterData={character} />
        ))}
      </div>

      <Pagination currentPage ={currentPage} paginationData={paginationData} />
    </section>
  );
};

export default Page;
