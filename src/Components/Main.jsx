import "../App.scss";
import React, { useEffect } from "react";
import Header from "./Header";
import Modal from "./Modal";
import MovieList from "./MovieList";


export default function Main({adminMode, setAdminMode, modalMode, setModalMode, username, setUsername, movieList, setMovieList, currentMovie, setCurrentMovie, edittedMovie, setEdittedMovie, edittedIndex, setEdittedIndex, editCounter, setEditCounter}) {

  useEffect(() => {
    console.log("movieList", movieList)
  }, [editCounter])

  return (
    <div className="App bg-papayawhip h-screen w-screen text-center">
      <Header adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie}/>
      {modalMode ? <Modal adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} movieList={movieList} setMovieList={setMovieList} edittedMovie={edittedMovie} setEdittedMovie={setEdittedMovie} edittedIndex={edittedIndex} setEdittedIndex={setEdittedIndex} editCounter={editCounter} setEditCounter={setEditCounter}/> : null }
      {adminMode ? <button className=" text-papayawhip p-4 rounded-lg my-4 mx-2" style={{backgroundColor: "mediumseagreen"}} onClick={() => { 
        setModalMode("addmovie")
      }}>Add Movie</button> : null}
      {adminMode ? <div><input className="p-4 rounded-l-lg" type="number" placeholder="Max # of Rentals" /><button className="bg-rosemadder text-papayawhip p-4 rounded-r-lg">Enter</button></div> : null}
      {!username && !adminMode ? <h1 className="text-center text-2xl m-8">You must be logged in to view movie list</h1> : null}
      <MovieList username={username} setUsername={setUsername} adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} movieList={movieList} setMovieList={setMovieList} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} edittedMovie={edittedMovie} setEdittedMovie={setEdittedMovie} edittedIndex={edittedIndex}setEdittedIndex={setEdittedIndex} editCounter={editCounter} setEditCounter={setEditCounter}/>
    </div>
  );
}