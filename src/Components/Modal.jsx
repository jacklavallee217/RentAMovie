import React, { useState } from "react";
import LoginModal from "./LoginModal";
import AdminModal from "./AdminModal";
import AddMovieModal from "./AddMovieModal";
import EditMovieModal from "./EditMovieModal";

export default function Modal({
  adminMode,
  setAdminMode,
  modalMode,
  setModalMode,
  username,
  setUsername,
  movieList,
  setMovieList,
  edittedMovie,
  setEdittedMovie,
  edittedIndex,
  setEdittedIndex,
  editCounter,
  setEditCounter
}) {
  const [errorMessage, setErrorMessage] = useState();

  return (
    <div className="absolute h-screen w-screen top-0" hidden={!modalMode}>
      {modalMode === "login" ? <LoginModal modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/> : null }
      {modalMode === "admin" ? <AdminModal adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/> : null }
      {modalMode === "addmovie" ? <AddMovieModal adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} errorMessage={errorMessage} setErrorMessage={setErrorMessage} movieList={movieList} setMovieList={setMovieList}/> : null}
      {modalMode === "editmovie" ? <EditMovieModal adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} errorMessage={errorMessage} setErrorMessage={setErrorMessage} movieList={movieList} setMovieList={setMovieList} edittedMovie={edittedMovie} setEdittedMovie={setEdittedMovie} edittedIndex={edittedIndex} setEdittedIndex={setEdittedIndex} editCounter={editCounter} setEditCounter={setEditCounter}/> : null}
      <div className="OpaqueBackgroundColor opacity-75 absolute h-screen w-screen top-0 bg-prussianblue z-30"></div>
    </div>
  );
}
