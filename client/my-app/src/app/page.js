import Card from "@/app/component/card";
import Navbar from "@/app/component/navbar";

async function getHabit() {
  try {
    const response = await fetch("http://localhost:3001/habits", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
export default async function Home() {
  const data = await getHabit();

  return (
    <div>
      <Navbar></Navbar>
      <h1> masuk home</h1>
      <div className="flex flex-wrap gap-10 ">
        {data.map((el) => {
          return <Card data={el} key={el.id}></Card>;
        })}
      </div>
    </div>
  );
}
