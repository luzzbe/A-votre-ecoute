import React, { Component } from "react";

import "./Risques.scss";

class Risques extends Component {

  state = {
    activeTab: "vie-privee"
  };

  changeTab = (event, activeTab) => {
    event.preventDefault();
    this.setState({activeTab});
  };

  render() {
    return (
      <div className="Risques">
        <div className="contenu">
            <div className="left">
                <h1>Risques</h1>
                <ul>
                    <li className={this.state.activeTab === "vie-privee" ? "active" : ""}>
                        <a href="#vie-privee" onClick={(e) => this.changeTab(e,"vie-privee")}>Vie privée</a>
                    </li>
                    <li className={this.state.activeTab === "securite" ? "active" : ""}>
                        <a href="#securite" onClick={(e) => this.changeTab(e,"securite")}>Sécurité</a>
                    </li>
                    <li className={this.state.activeTab === "ecologie" ? "active" : ""}>
                        <a href="#ecologie" onClick={(e) => this.changeTab(e,"ecologie")}>Ecologie</a>
                    </li>
                </ul>
            </div>
            <div className="right">
                {/*<button className="listenBtn"><FaVolumeUp/></button>*/}
                {this.state.activeTab === "vie-privee" &&
                  <div>
                    <h2>Vie privée</h2>
                    <p>Placer sciemment un microphone dans sa maison peut paraître étrange. En théorie ces assistants ne sont censés débuter l’enregistrement si et seulement si, ils sont interpellés avec certains mots clés (“Dis Siri ...”, "Alexa ...“, etc.). Malheureusement, lors du lancement du Google Home Mini en octobre 2017, certains journalistes disposant d’un prototype se sont rendu compte que l’enceinte avait tendance s’activer d’elle-même. En se rendant sur le portail référençant tous les enregistrements, ils se sont rendu compte du nombre effarant de fichiers audio ayant été capté par l’appareil. Google a rapidement corrigé le problème et présenté ses excuses, mais cela n’a pas manqué d’alimenter un peu plus le débat sur les enceintes connectées et votre vie privée.Dans l’Oregon, près de Portland, l’assistant d’Amazon a également joué un mauvais tour à ses propriétaires. Lors d’une discussion, l’enceinte s’est déclenchée à cause d’un mot ressemblant à Alexa et a enregistré la conversation à l’insu du couple. L’histoire ne s’arrête pas là, lors de la conversation, l’assistant à capter un nom et à envoyer l’enregistrement à un collègue du couple, heureusement pour eux, la conversation était anodine.</p>
                  </div>
                }

                {this.state.activeTab === "securite" &&
                <div>
                  <h2>Sécurité</h2>
                  <p>La question de la sécurité reste un frein important à l’adoption de ces assistants connectés pour de nombreuses personnes. Certaines failles de sécurité récemment découverte font douter les utilisateurs. La faille “Blueborne” a touché plus de 20 millions d’assistants connectés et a en théorie permis de récolter un nombre incalculable de données sur les utilisateurs des appareils touchées.Les entreprises doivent désormais assurer une protection optimale des données à chaque instant et être en mesure de la démontrer en documentant leur conformité. Google en a récemment fait les frais avec son système d’exploitation “Android”. La firme va devoir débourser 50 millions d'euros pour ne pas avoir respecté les nouvelles règles européennes. D'autres géants (Apple, Facebook, Amazon) sont aussi visés par des plaintes et seront possiblement sanctionnés jusqu'à 4 % de leur chiffre d'affaires.</p>
                </div>
                }

                {this.state.activeTab === "ecologie" &&
                <div>
                  <h2>Ecologie</h2>
                  <p>Comme tout appareil branché en permanence, les enceintes connectées consomment de l’électricité. Ces appareils disposent d’un mode veille comme sur les téléviseurs ou les box internet. Malheureusement, ces appareils ne sont pas les principaux consommateurs. Les infrastructures (data center) nécessaires pour traiter les requêtes des utilisateurs nécessitent une alimentation beaucoup plus importante.Ordinateurs, data centers, réseaux... engloutissent près de 10 % de la consommation mondiale d’électricité. Et ce chiffre ne cesse d’augmenter. S’il n’est évidemment pas question de se passer des progrès apportés par le numérique, les scientifiques pointent un mode de fonctionnement peu optimisé et très énergivore.Contenu</p>
                </div>
                }
              </div>
        </div>
      </div>
    );
  }
}

export default Risques;
