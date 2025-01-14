import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
            <li><a href="/hello">Hello Page</a></li>
          </ul>
        </nav>

        {/* Define Routes here */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<h2>Welcome to the Home Page!</h2>} />
          
          {/* Hello Route */}
          <Route path="/hello" element={<div>Welcome to hello page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
