import "./App.css";
import BodyContent from "./Components/BodyContent";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <BodyContent/>
      </div>
    </div>
  );
}

export default App;
