import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import PDFViewer from "./components/PDFViewer.jsx";
import TextEditor from "./components/TextEditor.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/task2" element={<TextEditor />} />
        <Route path="/task3" element={<PDFViewer />} />
        <Route path="/*" element={<Navigate to="/mainpage" replace />} />
      </Routes>
    </div>
  );
}

export default App;
