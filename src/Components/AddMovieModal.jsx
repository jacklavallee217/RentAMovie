import React, { useState } from "react";
const uuid = require("uuid")

export default function AddMovieModal({
    modalMode,
    setModalMode,
    username,
    setUsername,
    errorMessage,
    setErrorMessage,
    movieList, 
    setMovieList
  }) {
  const [movieTitle, setMovieTitle] = useState();
  const [movieType, setMovieType] = useState();
  const [movieGenre, setMovieGenre] = useState();
  const [maxAge, setMaxAge] = useState();
  const [yearReleased, setYearReleased] = useState();

  return (
    <div className="absolute h-1/2 w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-prussianblue z-40 rounded-3xl text-center">
      {/* {console.log("movieTitle", movieTitle)}
      {console.log("movieType", movieType)}
      {console.log("movieGenre", movieGenre)}
      {console.log("maxAge", maxAge)}
      {console.log("yearReleased", yearReleased)} */}
      <h1 className="text-papayawhip text-center text-4xl underline m-3">
        Add Movie
      </h1>
      {errorMessage ? (
        <h1 className="relative text-papayawhip bg-rosemadder p-2 w-1/2 m-auto rounded-2xl">
          {errorMessage}
        </h1>
      ) : null}
      <input
        className="p-3 my-3 mx-auto rounded-md border-prussianblue border-2 block"
        value={movieTitle}
        type="text"
        placeholder="Movie Title"
        onChange={(evt) => {
          setMovieTitle(evt.target.value);
        }}
      />
      <select
        className="p-3 my-3 mx-auto rounded-md border-prussianblue border-2 block"
        value={movieType}
        onChange={(evt) => {
          setMovieType(evt.target.value);
        }}
      >
        <option selected={true} disabled={true}>Type</option>
        <option>Regular</option>
        <option>Children's Movie</option>
        <option>New Release</option>
      </select>
      <select
        className="p-3 my-3 mx-auto rounded-md border-prussianblue border-2 block"
        value={movieGenre}
        onChange={(evt) => {
          setMovieGenre(evt.target.value);
        }}
      >
        <option selected={true} disabled={true}>Genre</option>
        <option>Action</option>
        <option>Drama</option>
        <option>Romance</option>
        <option>Comedy</option>
        <option>Horror</option>
      </select>
      {movieType === "Children's Movie" ? <input className="p-3 my-3 mx-auto rounded-md border-prussianblue border-2 block" type="number" placeholder="Enter Max Age" value={maxAge} onChange={(evt) => {
          setMaxAge(evt.target.value);
        }}/> : null}
      {movieType === "New Release" ? <input className="p-3 my-3 mx-auto rounded-md border-prussianblue border-2 block" type="text" placeholder="Enter Year Released" value={yearReleased} onChange={(evt) => {
          setYearReleased(evt.target.value);
        }}/> : null}
      <button className="p-4 text-papayawhip rounded-md" style={{backgroundColor: "mediumseagreen"}} onClick={() => {
          if (movieTitle && movieType && movieGenre) {
              if (movieType === "Children's Movie" && maxAge === undefined) {
                setErrorMessage("You must enter a max age")
              }
              else if (movieType === "New Release" && yearReleased === undefined) {
                setErrorMessage("You must enter the year released")
              }
              else {
                  setModalMode()
                  setErrorMessage()
                  if (movieType === "Children's Movie") {
                      setMovieList((movieList) => [...movieList, {
                        "id": uuid.v4(),
                        "movieTitle": movieTitle,
                        "movieType": movieType,
                        "movieGenre": movieGenre,
                        "popularity": Math.floor(Math.random() * 100),
                        "maxAge": maxAge
                    }])
                  }
                  else if (movieType === "New Release") {
                    setMovieList((movieList) => [...movieList, {
                      "id": uuid.v4(),
                      "movieTitle": movieTitle,
                      "movieType": movieType,
                      "movieGenre": movieGenre,
                      "popularity": Math.floor(Math.random() * 100),
                      "yearReleased": yearReleased
                  }])
                }
                  else {
                    setMovieList((movieList) => [...movieList, {
                      "id": uuid.v4(),
                      "movieTitle": movieTitle,
                      "movieType": movieType,
                      "movieGenre": movieGenre,
                      "popularity": Math.floor(Math.random() * 100),
                  }])
                }
              }
          }
          else {
              setErrorMessage("You must enter all required fields")
          }
      }}>
          Add Movie
      </button>
    </div>
  );
}
