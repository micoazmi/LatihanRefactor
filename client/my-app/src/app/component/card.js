"use client";
import React from "react";

export default function Card({ data }) {
  console.log(data, "<------ data id");
  async function Delete() {
    try {
      const response = await fetch(`http://localhost:3001/habits/${data.id}`, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <p className="text-gray-700 text-base"></p>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Name: {data.name} </div>
          <p className="text-gray-700 text-base">
            Description: {data.description}{" "}
          </p>
          <p className="text-gray-700 text-base">Interval: {data.interval} </p>
          <p className="text-gray-700 text-base">Reward: {data.reward}</p>
          <p className="text-gray-700 text-base">
            StartDate: {data.startDate}{" "}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Detail
          </button>
          <button
            onClick={Delete}
            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ml-5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
