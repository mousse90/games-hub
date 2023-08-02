import plateforms from "../data/plateforms";
// useData is in comment because not used here to avoid fetching data that could be static
// import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlastforms = () => useData<Platform>("/platforms/lists/parents");

const usePlastforms = () => ({
  data: plateforms,
  error: null,
  isLoading: false,
});
export default usePlastforms;
