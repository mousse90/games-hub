import genres from "../data/genres";
// useData is in comment because not used here to avoid fetching data that could be static
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
