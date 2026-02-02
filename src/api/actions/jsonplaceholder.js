import { getApiResource } from "../utils";

export const getList = async () => {
  const data = await getApiResource(
    "https://jsonplaceholder.typicode.com/todos/2",
  );
  return data;
};
