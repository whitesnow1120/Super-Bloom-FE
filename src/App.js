import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home";
import Quizstep1 from "./views/steps/quiz1";
import Quizstep2 from "./views/steps/quiz2";
import Quizstep3 from "./views/steps/quiz3";
import Quizstep4 from "./views/steps/quiz4";
import Quizstep5 from "./views/steps/quiz5";
import Quizstep6 from "./views/steps/quiz6";
import Quizstep7 from "./views/steps/quiz7";
import Quizstep8 from "./views/steps/quiz8";
import Quizstep9 from "./views/steps/quiz9";
import Quizstep10 from "./views/steps/quiz10";
import Quizstep11 from "./views/steps/quiz11";
import Quizstep12 from "./views/steps/quiz12";
import Quizstep13 from "./views/steps/quiz13";
import Quizstep14 from "./views/steps/quiz14";
import Quizstep15 from "./views/steps/quiz15";
import Quizstep17 from "./views/steps/quiz17";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/start`} element={<Home />} />
        <Route path={`/screen-0348468e`} element={<Quizstep1 />} />
        <Route path={`/screen-fb8379a7`} element={<Quizstep2 />} />
        <Route path={`/screen-d375fd85`} element={<Quizstep3 />} />
        <Route path={`/screen-84e7c248`} element={<Quizstep4 />} />
        <Route path={`/screen-bd393b98`} element={<Quizstep5 />} />
        <Route path={`/screen-cea9542f`} element={<Quizstep6 />} />
        <Route path={`/screen-3a39b32d`} element={<Quizstep7 />} />
        <Route path={`/screen-3c87535a`} element={<Quizstep8 />} />
        <Route path={`/screen-1246ff11`} element={<Quizstep9 />} />
        <Route path={`/screen-8556a584`} element={<Quizstep10 />} />
        <Route path={`/screen-f5e829bb`} element={<Quizstep11 />} />
        <Route path={`/screen-f24b6764`} element={<Quizstep12 />} />
        <Route path={`/screen-57f5661b`} element={<Quizstep13 />} />
        <Route path={`/screen-f38e984f`} element={<Quizstep14 />} />
        <Route path={`/screen-296bb8d5`} element={<Quizstep15 />} />
        <Route path={`/screen-3f1b49da`} element={<Quizstep17 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
