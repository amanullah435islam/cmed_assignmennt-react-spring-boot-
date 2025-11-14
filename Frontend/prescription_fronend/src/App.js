import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PrescriptionList from "./components/PrescriptionList";
import PrescriptionForm from "./components/PrescriptionForm";
import Navbar from "./components/Navbar";
import { isLoggedIn } from "./utils/auth";

function ProtectedRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/prescriptions" element={
          <ProtectedRoute><PrescriptionList /></ProtectedRoute>
        } />
        <Route path="/prescriptions/new" element={
          <ProtectedRoute><PrescriptionForm /></ProtectedRoute>
        } />
        <Route path="/prescriptions/edit/:id" element={
          <ProtectedRoute><PrescriptionForm /></ProtectedRoute>
        } />
        <Route path="*" element={<div style={{padding:20}}>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;