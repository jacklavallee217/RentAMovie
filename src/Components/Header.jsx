import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({
  adminMode,
  setAdminMode,
  modalMode,
  setModalMode,
  username,
  setUsername,
  currentMovie,
  setCurrentMovie
}) {

  let navigate = useNavigate()

  return (
    <header className="flex content-between bg-prussianblue">  
      {
        currentMovie && <div className="rounded-lg flex-1"><button className="bg-rosemadder text-papayawhip p-4 rounded-lg m-4" onClick={() => {
          setCurrentMovie()
          navigate("/")
        }}>Home</button></div>
      }
      {adminMode && modalMode !== "admin" ? (
        <p className="flex-1 text-lg text-left text-papayawhip p-4">
          Admin Mode
        </p>
      ) : (
        <>
          {username ? (
            <p className={`flex-1 text-lg text-papayawhip p-4 self-center ${currentMovie ? "order-last text-right" : "text-left"}`}>
              You are signed in as <i>{username}</i>
            </p>
          ) : (
            <p className="flex-1" />
          )}
        </>
      )}
      <h1 className="text-3xl text-center self-center text-papayawhip p-4 flex-1 relative">
        Rent-a-Video!
      </h1>
      { !currentMovie &&
      <div className="flex-1 text-right m-2">
        {!username ? (
          <button
            className="bg-rosemadder hover:bg-fluorescentblue target:bg-fluorescentblue text-papayawhip hover:text-prussianblue target:text-prussianblue min-h-full mx-2 px-3 rounded-l-lg"
            onClick={() => {
              setModalMode("login");
              setAdminMode(false);
              setUsername();
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-rosemadder hover:bg-fluorescentblue target:bg-fluorescentblue text-papayawhip hover:text-prussianblue target:text-prussianblue min-h-full mx-2 px-3 rounded-l-lg"
            onClick={() => {
              setUsername();
              setAdminMode(false);
            }}
          >
            Logout
          </button>
        )}
        {adminMode && modalMode !== "admin" ? (
          <button
            className="bg-rosemadder hover:bg-fluorescentblue focus:bg-fluorescentblue  text-papayawhip hover:text-prussianblue min-h-full mx-2 px-3 rounded-l-lg"
            onClick={() => {
              setAdminMode(false);
              setModalMode();
            }}
          >
            Exit
          </button>
        ) : (
          <button
            className="bg-rosemadder hover:bg-fluorescentblue focus:bg-fluorescentblue  text-papayawhip hover:text-prussianblue min-h-full mx-2 px-3 rounded-l-lg"
            onClick={() => {
              setModalMode("admin");
            }}
          >
            Admin Mode
          </button>
        )}
      </div>
    }
    </header>
  );
}
