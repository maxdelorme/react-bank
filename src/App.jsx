import "./App.css";
import Accounts from "./assets/components/Accounts";
import Header from "./assets/components/Header";
import dataAccounts from "./assets/json/data.json";

function App() {
  return (
    <>
      <Header userName="Etienne"></Header>
      <div className="main">
        <div className="container">
          <Accounts accounts={dataAccounts}></Accounts>
        </div>
      </div>
    </>
  );
}

export default App;
