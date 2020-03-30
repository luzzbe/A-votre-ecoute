import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import FullScreen from "react-full-screen";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Video from "./pages/Video";
import DifferentsAssistants from "./pages/DifferentsAssistants";

const App = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <FullScreen enabled={isFullscreen} onChange={isFullscreen => setIsFullscreen(isFullscreen)}>
            <div className="App">
              <Navbar setIsFullscreen={setIsFullscreen} isFullscreen={isFullscreen} isMuted={isMuted} setIsMuted={setIsMuted} />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="page"
                  timeout={{
                    enter: 300,
                    exit: 300
                  }}
                >
                  <main className="main">
                    <Switch>
                      {/* <Route path="/chiffres-cles" component={ChiffresCles} /> */}
                      <Route path="/differents-assistants" component={DifferentsAssistants} />
                      <Route path="/accueil" component={Accueil} />
                      <Route path="/" component={Video} />
                    </Switch>
                  </main>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </FullScreen>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
