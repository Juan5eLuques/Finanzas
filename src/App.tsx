import "./App.css";
import { Button } from "./Components/Button";

function App() {
  return (
    <div className="w-full h-screen">
      <header className="flex w-full h-28 p-2">
        <h1>Finanzas</h1>
      </header>
      <div className="flex h-full w-full bg-black">
        <Button />
      </div>
    </div>
  );
}

export default App;
