import React, { useState, useRef } from 'react'

export default function AdminModal({adminMode, setAdminMode, modalMode, setModalMode, username, setUsername, errorMessage, setErrorMessage}) {

    const [password, setPassword] = useState();
    const passwordRef = useRef();
  return (
    <div className="absolute h-1/3 w-1/2 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-prussianblue z-40 rounded-3xl text-center">
        <h1 className="text-papayawhip text-center text-4xl underline m-3">
          Admin Mode
        </h1>
        {errorMessage ? <h1 className="relative text-papayawhip bg-rosemadder p-2 w-1/2 m-auto rounded-2xl">{errorMessage}</h1> : null}
          <input
            className="block p-3 my-6 rounded-md border-prussianblue border-2 mx-auto"
            type="password"
            placeholder="Type password here..."
            value={password}
            ref={passwordRef}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
          <button
            className="block bg-rosemadder hover:bg-fluorescentblue text-papayawhip hover:text-prussianblue p-3 rounded-md border-prussianblue border-2 mx-auto"
            onClick={() => {
              if (password === "abcde12345") {
                setAdminMode(true)
                setModalMode()
                passwordRef.current.value = "";
                setPassword();
                setErrorMessage()
              }
              else {
                setErrorMessage('The password is "abcde12345"')
              }
            }}
          >
            Login
          </button>
        
      </div>
  )
}
