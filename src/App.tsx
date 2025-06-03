import "primereact/resources/themes/lara-light-cyan/theme.css";
import * as React from "react";
import "../css/Override.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from "../pages/DashboardPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App
