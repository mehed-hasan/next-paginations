export interface CharacterObject {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];  // Assuming episode is an array of URLs or episode names
  url: string;
  created: string;
}

export interface PaginationProps {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
