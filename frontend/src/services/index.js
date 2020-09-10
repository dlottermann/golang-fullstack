import axios from "axios";

export const getPlans = async () =>
await axios
  .get(`${process.env.REACT_APP_API_URI}`)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });


// useEffect(() => {
//     fetch(API_URL)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         setMovies(jsonResponse.Search);
//         setLoading(false);
//       });
//   }, []);
