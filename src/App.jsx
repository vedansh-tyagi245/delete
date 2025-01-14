import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Define the Hello component that will display when navigating to /hello
function Hello() {
  return <h2>Hello, Welcome to the Hello Page!</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My App</h1>
        <nav>
          <ul>
            {/* Use Link instead of <a> for React Router compatibility */}
            <li><Link to="/hello">Hello Page</Link></li>
          </ul>
        </nav>

        {/* Define Routes here */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<h2>Welcome to the Home Page!</h2>} />
          
          {/* Hello Route */}
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
