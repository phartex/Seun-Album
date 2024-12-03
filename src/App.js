
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateReview from './Components/CreateReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/create-review" element={<CreateReview />} />
        {/* <Route path="/flights" element={<Flights />} /> */}
        {/* <Route path="/create-flight" element={<CreateFlight />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
