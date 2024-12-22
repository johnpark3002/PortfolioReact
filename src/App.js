import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./components/layout";
import ResumeViewer from "./components/resume-viewer";

function App() {
  useEffect(() => {
    document.title = "John Park | Software Engineer";
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path="/resume" element={<ResumeViewer />}/>
    </Routes>
  );
}

export default App;
