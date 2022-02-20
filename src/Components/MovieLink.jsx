import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieLink({ movie, index, adminMode, setAdminMode, modalMode, setModalMode, movieList, setMovieList, currentMovie, setCurrentMovie, editCounter, setEditCounter, edittedMovie, setEdittedMovie, edittedIndex, setEdittedIndex }) {

  let navigate = useNavigate();
  const [editButtons, setEditButtons] = useState(false)

  function deleteMovie(arrayIndex) {
    const movieArray = movieList;
    movieArray.splice(arrayIndex, 1);

    setMovieList(movieArray);
    setEditCounter(editCounter + 1)
  }

  return (
    <>
    <div className={`relative m-2 p-4 text-center bg-prussianblue text-papayawhip cursor-pointer w-fit rounded-lg ${!adminMode ? "hover:bg-fluorescentblue hover:text-prussianblue" : ""}`}
        onClick={() => {
            if (!adminMode) {
                setCurrentMovie(movie)
                navigate(`/rent/${movie.id}`)
            }
        }}
        
        onMouseOver={() => {
            setEditButtons(true)
        }}
        onMouseLeave={() => {
            setEditButtons(false)
        }}
    > 
      <h1>{movie.movieTitle}</h1>
      <h1>{movie.movieType}</h1>
      <h1>{movie.movieGenre}</h1>
      <h1>Popularity: {movie.popularity}%</h1>
      {movie.maxAge ? <h1>Max Age: {movie.maxAge}</h1> : null}
      {movie.yearReleased ? <h1>Year Released: {movie.yearReleased}</h1> : null}
      { adminMode ? <div hidden={!editButtons} className="flex absolute w-full h-full z-20 top-0 left-0 rounded-lg opacity-90">
            <button hidden={!editButtons} className="flex-1 rounded-l-lg" style={{backgroundColor: "mediumseagreen"}} onClick={() => {
                setEdittedMovie(movie)
                setEdittedIndex(index)
                setModalMode("editmovie")
            }}>Edit</button>
            <button hidden={!editButtons} className="flex-1 rounded-r-lg bg-rosemadder" onClick={() => {
                deleteMovie(index)
            }}>Delete</button>
      </div> : null}
    </div>
    </>
  );
}
