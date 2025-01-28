import React from 'react'

const OfflineCard = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-black text-white gap-2 mt-20">
            <div className="max-w-lg text-center shadow-lg p-8 bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
                <h1 className="text-7xl font-extrabold mb-4 text-white drop-shadow-md">
                    Oops!
                </h1>
                <p className="text-lg font-medium mb-6 text-white">
                    Look like you are offline please check your internet connection.
                </p>
                <a
                    href="/"
                    className="mt-8 inline-block bg-white text-red-500 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
                >
                    No internet
                </a>
            </div>
        </div>
    </div>
  )
}

export default OfflineCard;
