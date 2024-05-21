import './App.css';
import { StopWatch } from './Page/stopwatch';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StopWatch />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
