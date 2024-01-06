import { useState } from "react";
import Admin from "./Pages/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Admin />
    </>
  );
}

export default App;
