import { useState, useEffect } from "react";
import { getList } from "../../api/actions/jsonplaceholder";

const ApiComponent = () => {
  useEffect(() => {
    (async () => {
      const data = await getList();
      console.log(data);
    })();
  }, []);
};

export default ApiComponent;
