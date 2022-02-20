import React from 'react'
import MovieLink from './MovieLink'

export default function MovieList({username, setUsername, adminMode, setAdminMode, modalMode, setModalMode, movieList, setMovieList, currentMovie, setCurrentMovie, editCounter, setEditCounter, edittedMovie, setEdittedMovie, edittedIndex, setEdittedIndex}) {
  return (
    <div className="grid grid-cols-4 mx-auto my-12 text-center w-5/6">
      {
        username || adminMode ? (movieList.map((movie, index) => {
          return (
            <MovieLink movie={movie} index={index} adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} movieList={movieList} setMovieList={setMovieList} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} editCounter={editCounter} setEditCounter={setEditCounter} edittedMovie={edittedMovie} setEdittedMovie={setEdittedMovie} edittedIndex={edittedIndex} setEdittedIndex={setEdittedIndex}/>
          )
        })) : null
      }
      </div>
  )
}
