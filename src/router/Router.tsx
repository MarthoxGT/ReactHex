import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Game, History, Home, LandingPage, Scoreboard } from "../app";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/history" element={<History />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
