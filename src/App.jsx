import "./App.css";
import Accounts from "./assets/components/Accounts";
import Header from "./assets/components/Header";
import dataAccounts from "./assets/json/data.json";

function App() {
  return (
    <>
      <Header userName="Etienne"></Header>
      <div className="m-auto max-w-4xl flex flex-col p-4 items-stretch">
        <Accounts accounts={dataAccounts}></Accounts>
      </div>
    </>
  );
}

export default App;
