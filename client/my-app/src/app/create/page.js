import React from "react";
import Navbar from "../component/navbar";

async function create(formData) {
  "use server";
  try {
    const response = await fetch("http://localhost:3001/habits", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        description: formData.get("description"),
        startDate: formData.get("startDate"),
        reward: formData.get("reward"),
        interval: formData.get("interval"),
      }),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Create() {
  return (
    <div>
      <Navbar></Navbar>
      <form action={create}>
        <div className="flex flex-col justify-center mt-5 mx-10  w-1/2">
          <h1>Create Task</h1>
          <input
            className="appearance-none block w-56 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="appearance-none block w-64 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            className="appearance-none block w-64 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="date"
            name="startDate"
          />
          <input
            className="appearance-none block w-64 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            name="reward"
            placeholder="Reward"
          />
          <select
            className="block appearance-none w-64 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="interval"
          >
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="daily">daily</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 w-56 text-white font-bold py-2 px-4 rounded mt-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
