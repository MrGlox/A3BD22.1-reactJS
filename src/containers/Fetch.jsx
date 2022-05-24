import { useEffect, useState } from "react";

const Fetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await fetch(
      "https://baconipsum.com/api/?type=meat-and-filler"
    );
    const data = await response.json();

    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []); // componentDidMount

  //   useEffect(() => {}, [setData]); // componentDidMount et componentDidUpdate dee setData
  //   useEffect(() => {}); // componentDidMount et componentDidUpdate

  if (isLoading) return <div>Loading...</div>;

  return <div>{data}</div>;
};

export default Fetch;
