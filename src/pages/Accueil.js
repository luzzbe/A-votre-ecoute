import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSpeechRecognition } from "../useSpeechRecognition";
import { FaMicrophone, FaPlayCircle } from "react-icons/fa";

import "./Accueil.scss";

const Accueil = () => {
  const speech = useSpeechRecognition();
  let history = useHistory();

  useEffect(() => {
    // if (speech.transcript.includes("chiffres clés")) {
    //   history.push("/chiffres-cles");
    // }

    if (speech.transcript.includes("principaux usages") || speech.transcript.includes("principaux usage")) {
      history.push("/principaux-usages");
    }

    if (
      speech.transcript.includes("différents assistants") ||
      speech.transcript.includes("différents assistant") ||
      speech.transcript.includes("différent assistants") ||
      speech.transcript.includes("différences assistant") ||
      speech.transcript.includes("différence assistant") ||
      speech.transcript.includes("principes aux assistants") ||
      speech.transcript.includes("principaux assistants")
    ) {
      history.push("/differents-assistants");
    }

    if (speech.transcript.includes("risques") || speech.transcript.includes("risque")) {
      history.push("/risques");
    }
  });

  const startReco = () => {
    if (!speech.browserSupportsSpeechRecognition) {
      alert("Votre navigateur n'est pas compatible. Merci d'utliser Google Chrome...");
      return;
    }
    if (speech.listening === false) {
      speech.startListening();
    }
  };

  return (
    <div className="Accueil">
      <div className="help">
        <ul>
          {/* <li>
            <span>
              Donnes-moi les <strong>chiffres clés</strong> sur les assistants
              vocaux
            </span>
            <Link to="/chiffres-cles">
              <FaPlayCircle />
            </Link>
          </li> */}
          <li>
            <span>
              Dis-mois les <strong>principaux usages</strong> des assistants vocaux
            </span>
            <Link to="/principaux-usages">
              <FaPlayCircle />
            </Link>
          </li>
          <li>
            <span>
              Présentes-moi les <strong>différents assistants</strong> vocaux
            </span>
            <Link to="/differents-assistants">
              <FaPlayCircle />
            </Link>
          </li>
          <li>
            <span>
              Quels sont les <strong>risques</strong> liés à l'utilisation des assistants vocaux ?
            </span>
            <Link to="/risques">
              <FaPlayCircle />
            </Link>
          </li>
        </ul>
      </div>
      <div className="center">
        <div className={"mic " + (speech.listening ? "listen" : "")} onClick={startReco}>
          <FaMicrophone />
        </div>
        <h1>
          <span>{speech.transcript}</span>
        </h1>
      </div>
    </div>
  );
};

export default Accueil;
