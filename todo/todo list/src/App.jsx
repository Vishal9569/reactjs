import Head from "./comp";
import Main from "./ListTask/Main";
import Task1 from "./ListTask/Task1";
import Task2 from "./ListTask/Task2";
import "./App.css";

function App() {
  return <center>

    <Head ></Head>
    <div className="content">
      <Main></Main>
      <Task1></Task1>
      <Task2 />
    </div>



  </center >
}

export default App
