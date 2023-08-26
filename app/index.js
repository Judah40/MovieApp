import axios from "axios";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const getMovies = async ()=>{
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE3M2RjMmE4MTkzNjczN2QxYjEzMDBiMmE4NDgwYiIsInN1YiI6IjYzZGEzY2YxOTU1YzY1MDBhMGVjY2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SD_jcyNpHjJOz9XLnAWn0j-2yuIewFUlJm2juIjkKbI'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
}

useEffect(()=>{
getMovies()
},[])


  return (
   <View>

   </View>
  );
}


