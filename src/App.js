import "./App.css";

import React, { useState } from "react";
import Nav from "./components/Nav";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  const [progress, setprogress] = useState(0);

  const setProgress = (value) => {
    setprogress(value);
  };

  let apikey = process.env.REACT_APP_API_KEY;
  let newscounter = 20;

  return (
    <div>
      <Router>
        <Nav />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="General"
                newscounter={newscounter}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="Business"
                newscounter={newscounter}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="Entertainment"
                newscounter={newscounter}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="General"
                newscounter={newscounter}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="Health"
                newscounter={newscounter}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="Science"
                newscounter={newscounter}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="Sports"
                newscounter={newscounter}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="Technology"
                newscounter={newscounter}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
