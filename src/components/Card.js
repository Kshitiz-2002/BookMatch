import React from "react";

const Card = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64 w-50 mx-4 my-4">
      <div className="h-3/4 w-full ">
        <img src={book[2]} alt={book[0]} className="h-full w-full" />
      </div>
      <div className="bg-white h-1/4 w-40 mx-2 flex flex-col justify-center">
        <div className="text-lg font-bold mb-1 truncate">{book[0]}</div>
        <div className="text-sm text-gray-600">{book[1]}</div>
      </div>
    </div>
  );
};

export default Card;
