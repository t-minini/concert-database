import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { EnterPage } from "./pages/EnterPage/EnterPage";
import { AddNewPage } from "./pages/AddNewPage/AddNewPage";
import { EditCardPage } from "./pages/EditCardPage/EditCardPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/add-new" element={<AddNewPage />}></Route>
      <Route path="/" element={<EnterPage />}></Route>
      <Route path="/edit/:id" element={<EditCardPage />}></Route>
    </Routes>
  );
}

export default App;
