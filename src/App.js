import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatHome from "./Screens/ChatHome";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat-home/:receiverId" element={<ChatHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
