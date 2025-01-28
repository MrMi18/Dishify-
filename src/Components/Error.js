import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // console.log(err);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-black text-white gap-2 mt-20">
            <div className="max-w-lg text-center shadow-lg p-8 bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
                <h1 className="text-7xl font-extrabold mb-4 text-white drop-shadow-md">
                    Oops!
                </h1>
                <p className="text-lg font-medium mb-6 text-white">
                    We can't find the page you're looking for.
                </p>
                {err?.status && (
                    <p className="text-2xl font-semibold text-white">
                        Error Code: <span className="text-red-300">{err.status}</span>
                    </p>
                )}
                {err?.statusText && (
                    <p className="text-lg mt-2 text-white">
                        <span className="font-medium text-white">Message:</span>{" "}
                        {err.statusText}
                    </p>
                )}
                <a
                    href="/"
                    className="mt-8 inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default Error;
