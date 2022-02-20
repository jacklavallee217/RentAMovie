import React, { useState, useRef } from "react";

export default function LoginModal({
  modalMode,
  setModalMode,
  username,
  setUsername,
  errorMessage,
  setErrorMessage,
}) {
  const [typedName, setTypedName] = useState();
  const inputRef = useRef();
  return (
    <div className="absolute h-1/3 w-1/2 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-prussianblue z-40 rounded-3xl text-center">
      <h1 className="text-papayawhip text-center text-4xl underline m-3">
        Login
      </h1>
      {errorMessage ? (
        <h1 className="relative text-papayawhip bg-rosemadder p-2 w-1/2 m-auto rounded-2xl">
          {errorMessage}
        </h1>
      ) : null}
      <div className="relative p-1">
        <input
          className="p-3 my-3 min-h-full rounded-l-md border-prussianblue border-t-2 border-l-2 border-b-2"
          type="text"
          placeholder="Type username here..."
          value={typedName}
          ref={inputRef}
          onChange={(evt) => {
            setTypedName(evt.target.value);
          }}
        />
        <button
          className="bg-rosemadder hover:bg-fluorescentblue text-papayawhip hover:text-prussianblue p-3 min-h-full rounded-r-md border-prussianblue border-t-2 border-r-2 border-b-2"
          onClick={() => {
            if (typedName.match("^[a-zA-Z0-9]*$")) {
              if (typedName.length < 4) {
                setErrorMessage("Username must be larger than 4 characters");
              } else {
                setUsername(typedName);
                setModalMode();
                inputRef.current.value = "";
                setTypedName();
                setErrorMessage();
              }
            } else {
              setErrorMessage("Username must be alphanumerical");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
