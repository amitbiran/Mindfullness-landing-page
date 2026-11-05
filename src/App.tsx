import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import IntuitionWorkshop from "./components/IntuitionWorkshop";
import { workshops } from "./content/siteContent";

const workshop = workshops.find((item) => item.id === "intuition")!;
const App = () => <BrowserRouter><Routes>
  <Route path="/" element={<IntuitionWorkshop workshop={workshop} />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes></BrowserRouter>;
export default App;
