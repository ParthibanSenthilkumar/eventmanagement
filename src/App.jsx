import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Upcoming from "./components/Upcoming";
import Events from "./components/Events";
import EventForm from "./components/EventForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/create_event" element={<EventForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
