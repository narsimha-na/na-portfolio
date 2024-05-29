import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import GithubProfile from "./containers/GithubProfile";
import Feedbacks from "./containers/Feedbacks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          render={(props) => (
            <div>
              <Navigation />
              <Greetings />
              <Skills />
              {/* <Proficiency /> */}
              <Education />
              <Experience />
              {/* <Feedbacks /> */}
              <Projects />
              <GithubProfile />
            </div>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
