import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MindfulnessWorkshop from "./components/MindfulnessWorkshop";
import { workshops } from "./content/siteContent";

const App = () => <BrowserRouter><Routes>
  <Route path="/" element={<HomePage />} />
  {workshops.map((workshop) => <Route key={workshop.id} path={`/workshops/${workshop.id}`} element={<MindfulnessWorkshop workshop={workshop} />} />)}
  <Route path="/workshop" element={<Navigate to="/workshops/intuition" replace />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes></BrowserRouter>;
export default App;
