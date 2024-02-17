import { useState } from "react";
import "./App.css";
import { Container } from "./Container";
import { Header } from "./Header";

function App() {
  const [name, SetName] = useState();

  const autoName = () => {
    const promtedName = prompt("Enter your name");
    if (name && !promtedName) {
      return;
    }

    if (promtedName) {
      SetName(promtedName);
    } else {
      autoName();
    }
  };

  return (
    <div className="App">
      <Header />
      <Container headerName={name} />
      <button onClick={() => autoName()}>Change Name</button>
    </div>
  );
}

export default App;
