import React from 'react'
import { Link } from 'react-router-dom';
import Error from './Error'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col gap-5 p-5 ">
      <Error />
      <Link to={"/"} replace={true}>
        <button className="rounded-lg flex items-center justify-center w-full p-2  bg-red-500 hover:bg-red-400 border-2 border-red-600 hover:border-red-500 text-white shadow-sm shadow-red-100 hover:shadow-none ">
          Return to Home Page ?
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage