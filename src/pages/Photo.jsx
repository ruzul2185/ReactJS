import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Photo = () => {
  // state management for new data coming
  const [photo, setPhoto] = useState({});

  //   state management for loading state
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const { id } = useParams();
  console.log(useParams());

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const data = await response.json();
      //   throw new Error("This is trial error!");
      setPhoto(data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div key={photo.id}>
      {loading && <div>Loading...</div>}
      {error !== "" && <div>{error}</div>}
      {!loading && (
        <div>
          <h1>{photo.title}</h1>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
    </div>
  );
};

export default Photo;
