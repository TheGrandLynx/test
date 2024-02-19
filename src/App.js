import logo from "./logo.svg";
import "./App.css";
import Table from "./p14_table";
function App() {
  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
  ];
  const data = [
    {
      id: 1,
      firstName: "Amanda",
      lastName: "Linasta",
      dateOfBirth: "02/04/1980",
      street: "43 8th Adison",
      city: "Addison",
      state: "Alabama",
      stateAbbrev: "AL",
      zipCode: "35083",
      startDate: "02/05/2023",
      department: "Sales",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
