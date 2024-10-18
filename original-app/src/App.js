import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
