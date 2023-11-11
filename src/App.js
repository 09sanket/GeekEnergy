import logo from "./logo.svg";
import "./App.css";
import DataProvider from "./store/DataProvider";
import Base from "./Components/Base";

function App() {
  return (
    <DataProvider>
      <Base />
    </DataProvider>
  );
}

export default App;
