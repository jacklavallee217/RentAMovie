import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import RentMovie from "./Components/RentMovie";
import Movies from "./json/Movies";

export default function App() {
  const [adminMode, setAdminMode] = useState();
  const [modalMode, setModalMode] = useState();
  const [username, setUsername] = useState();
  const [movieList, setMovieList] = useState(Movies);
  const [currentMovie, setCurrentMovie] = useState();
  const [edittedMovie, setEdittedMovie] = useState();
  const [edittedIndex, setEdittedIndex] = useState();
  const [editCounter, setEditCounter] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              adminMode={adminMode}
              setAdminMode={setAdminMode}
              modalMode={modalMode}
              setModalMode={setModalMode}
              username={username}
              setUsername={setUsername}
              movieList={movieList}
              setMovieList={setMovieList}
              currentMovie={currentMovie}
              setCurrentMovie={setCurrentMovie}
              edittedMovie={edittedMovie}
              setEdittedMovie={setEdittedMovie}
              edittedIndex={edittedIndex}
              setEdittedIndex={setEdittedIndex}
              editCounter={editCounter}
              setEditCounter={setEditCounter}
            />
          }
        />
        <Route
          path="/rent/:id"
          element={
            <RentMovie
              adminMode={adminMode}
              setAdminMode={setAdminMode}
              modalMode={modalMode}
              setModalMode={setModalMode}
              username={username}
              setUsername={setUsername}
              movieList={movieList}
              setMovieList={setMovieList}
              currentMovie={currentMovie}
              setCurrentMovie={setCurrentMovie}
              edittedMovie={edittedMovie}
              setEdittedMovie={setEdittedMovie}
              edittedIndex={edittedIndex}
              setEdittedIndex={setEdittedIndex}
              editCounter={editCounter}
              setEditCounter={setEditCounter}
            />
          }
        />
      </Routes>
    </Router>
  );
}
