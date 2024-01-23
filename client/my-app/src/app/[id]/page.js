import React from "react";
import Navbar from "../component/navbar";

export default function Detail({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <Navbar></Navbar>
      <h1>tes masuk detail {id}</h1>
    </div>
  );
}
