import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlastforms = () => useData<Platform>("/platforms/lists/parents");
export default usePlastforms;
