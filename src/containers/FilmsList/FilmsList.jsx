import { useState, useEffect } from "react";
import { get } from "../../api/actions/films";

const FilmsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await get(258687);
      console.log(response);
      setData(response);
    })();
  }, []);

  return <h1>FilmsList</h1>;
};

export default FilmsList;
