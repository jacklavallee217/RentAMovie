import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Header from './Header'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'

export default function RentMovie({currentMovie, setCurrentMovie, adminMode, setAdminMode, modalMode, setModalMode, username, setUsername}) {

  let navigate = useNavigate()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())  

  const oneDay = 1000 * 60 * 60 * 24
  const dayDifference = Math.round((endDate.getTime() - startDate.getTime()) / oneDay)

  return (
    <div className="App bg-papayawhip h-screen w-screen">
        <Header currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} adminMode={adminMode} setAdminMode={setAdminMode} modalMode={modalMode} setModalMode={setModalMode} username={username} setUsername={setUsername} />
        {console.log("currentMovie", currentMovie)}
        {console.log("startDate", startDate)}
        {console.log("endDate", endDate)}
        {console.log(startDate.valueOf() !== endDate.valueOf())}
        <div className="bg-prussianblue text-papayawhip w-1/2 mx-auto my-12 p-6 rounded-2xl flex">
            <h1 className="text-center text-2xl flex-1">{currentMovie.movieTitle}</h1>
            <div className="flex-1">
                <h1 className="text-center text-2xl">{currentMovie.movieGenre}</h1>
                {currentMovie.movieType === "Children's Movie" ? <h1 className="text-center text-lg">Max Age: {currentMovie.maxAge}</h1> : null}
                {currentMovie.movieType === "New Release" ? <h1 className="text-center text-lg">Year Released: {currentMovie.yearReleased}</h1> : null}
            </div>
        </div>
        <div className="flex w-1/2 mx-auto my-6">
            <div className="text-center flex-1 border-r-2 border-prussianblue">
                <label className="text-prussianblue text-xl">Start Date:</label>
                <DatePicker className="border-fluorescentblue border-2 p-3 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
            </div>
            <div className="text-center flex-1">
                <label className="text-prussianblue text-xl">End Date:</label>
                <DatePicker className="border-fluorescentblue border-2 p-3 rounded-md" selected={endDate} minDate={startDate} onChange={(date) => setEndDate(date)}></DatePicker>
            </div>
        </div>
        <p className="text-center text-xl text-prussianblue m-8">Days of Rental: {dayDifference}</p>
        <div className="text-center text-xl text-prussianblue m-8">
            {currentMovie.movieType === "Regular" && <p>Rental Price: ${dayDifference.toFixed(2)}</p>}
            {currentMovie.movieType === "Children's Movie" && <p>Rental Price: ${(dayDifference * .54 + (currentMovie.maxAge / 2)).toFixed(2)}</p>}
            {currentMovie.movieType === "New Release" && <p>Rental Price: ${(dayDifference * 1.5 + currentMovie.yearReleased).toFixed(2)}</p>}
        </div>
        <button disabled={startDate.valueOf() === endDate.valueOf()} className={`block w-1/4 text-papayawhip m-auto p-4 rounded-lg ${startDate.valueOf() === endDate.valueOf() ? "bg-rosemadder" : "bg-prussianblue hover:bg-fluorescentblue hover:text-prussianblue" }`} onClick={() => {
            setCurrentMovie()
            navigate("/")
        }}>Rent Movie</button>
    </div>
  )
}
