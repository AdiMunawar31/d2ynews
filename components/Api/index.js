import React, { useState } from "react";
import axios from "axios";
import { Banner } from "..";

const Api = () => {
  const [data, setData] = useState([]);
  const apikey = "eef61386182e47b7a9bb74c1440bae58";
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apikey}`)
      .then((response) => setData(response.data.articles));
  }, []);
  return <Banner data={data} />;
};

export default Api;
