import "./Detail.css";
import data from "../../../public/data.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import BackBtn from "../../components/BackBtn/BackBtn.jsx";

const Detail = () => {
  const { title } = useParams();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const find = data.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );
    setFilterData(find);
  }, [title]);

  console.log(filterData);

  return (
    <section className="detail">
      <BackBtn />
      <h1>{filterData.title}</h1>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          value={Number(filterData.rate)}
          precision={0.1}
          readOnly
          max={10}
        />
      </Stack>
      <h3>{filterData.director}</h3>
      <p>{filterData.year}</p>
      <h3>Genre:</h3>
      {filterData.genre?.map((genre, index) => (
        <div className="detail-genre" key={index}>
          <p>{genre}</p>
        </div>
      ))}
    </section>
  );
};

export default Detail;
