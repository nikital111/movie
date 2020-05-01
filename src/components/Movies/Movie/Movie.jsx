import React from 'react';
import "./Movie.css"
import { connect } from "react-redux";

const Movie = props => {

    const {data} = props;
    console.log(data)

    if(data===null)return null
   else if(data.Response==="False")return(<h1>{data.Error}</h1>)

    const DEFAULT_PLACEHOLDER_IMAGE = 
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

    const poster = data.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : data.Poster;

    
    return(
        <div className="mainFilm">
            <img src={poster} alt="film"/>
            <div className="description">
               <b>Title:{data.Title}</b>
               <b>Year: {data.Year}</b>
               <b>Rated: {data.Rated}</b>
               <b>Runtime: {data.Runtime}</b>
               <b>Genre: {data.Genre}</b>
               <b>Director: {data.Director}</b>
               <b>Writer: {data.Writer}</b>
               <b>Actors: {data.Actors}</b>
               <b>Plot: {data.Plot}</b>
               <b>Language: {data.Language}</b>
               <b>Country: {data.Country}</b>
               <b>Awards: {data.Awards}</b>
               <b>Type: {data.Type}</b>
            </div>
        </div>
    );
};



 const StateTo = state => {
     return{
         data: state.search.dataFilm
     }
 } 

export default connect(StateTo)(Movie);