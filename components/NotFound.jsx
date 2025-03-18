import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src="/NotFound.svg" alt="404 Not Found" className="w-80 h-80" />
      <h1 className="text-4xl font-bold">🗿 404 - Page Not Found 🗿</h1>
      <div className="pt-4">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
