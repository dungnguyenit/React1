import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("123123213");
  const [data, setData] = useState(dataT);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((e) => setData(e));
  // }, []);
  console.log(data);
  return (
    <div style={{ width: "100%", height: 800, alignItems: "center" }}>
      <div
        style={{
          width: 300,
          height: 800,
          padding: 20,
          backgroundColor: "pink",
        }}
      >
        {data.map((item, index) => (
          <div
            style={{ margin: 4, backgroundColor: "#ddd", padding: 5 }}
            key={index}
          >
            <p>{index}</p>
            <p>{item.title}</p>
            <Button color="primary" outline>
              Xoa
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
const dataT = [
  { userId: 1, id: 1, title: "delectus aut autem" },
  { userId: 1, id: 1, title: "delectus aut autem" },
  { userId: 1, id: 1, title: "delectus aut autem" },
];
