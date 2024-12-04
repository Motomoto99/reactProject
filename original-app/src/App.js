import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Box } from "@mui/material";
import Lifespan from "./components/Lifespan";
import PostFun from "./components/PostFun/PostFun";
import Cook from "./components/Cooks/Cook";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Box sx={{width:'100vw',minHeight:'100vh',border: '30px solid #EEEEEE',padding: 2,display:'flex'}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lifespan" element={<Lifespan />}/>
            <Route path="/posts" element={<PostFun />}/>
            <Route path="/cook" element={<Cook />}/>
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
