import axios from "axios";

export const GetMoviesList = async (count) => {
  let res = await axios.get(
    `https://test.create.diagnal.com/data/page${count}.json`
  );
  return res;
};
