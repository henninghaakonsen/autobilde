import React from "react";
import Meny from "./Meny/Meny";
import Annonsefoto from "./Sider/Tjenester/Annonsefoto/Annonsefoto";
import Tjenester from "./Sider/Tjenester/Tjenester";
import Portfolio from "./Sider/Portfolio/Portfolio";
import Kontakt from "./Sider/Kontakt/Kontakt";
import BildeMedTittel from "./BildeMedTittel/BildeMedTittel";
import Om from "./Sider/Om/Om";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Meny />

                <div className="content">
                    <Switch>
                        <Route exact path="/bilder">
                            <Portfolio />
                        </Route>
                        <Route exact path="/tjenester">
                            <BildeMedTittel
                                tittel={"Tjenester"}
                                innhold={() => <Tjenester />}
                            />
                        </Route>
                        <Route exact path="/tjenester/annonsefoto">
                            <BildeMedTittel
                                tittel={"Annonsefoto"}
                                innhold={() => <Annonsefoto />}
                            />
                        </Route>
                        <Route exact path="/tjenester/privatfoto">
                            <BildeMedTittel
                                tittel={"Privatfoto"}
                                innhold={() => <Kontakt />}
                            />
                        </Route>
                        <Route path="/om">
                            <BildeMedTittel
                                tittel={"Om"}
                                innhold={() => <Om />}
                            />
                        </Route>
                        <Route>
                            <BildeMedTittel
                                tittel={"Kontakt"}
                                innhold={() => <Kontakt />}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
