import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BildeMedTittel from "./BildeMedTittel/BildeMedTittel";
import Meny from "./Meny/Meny";
import Kontakt from "./Sider/Kontakt/Kontakt";
import Om from "./Sider/Om/Om";
import Portfolio from "./Sider/Portfolio/Portfolio";
import Annonsefoto from "./Sider/Tjenester/Annonsefoto/Annonsefoto";
import Tjenester from "./Sider/Tjenester/Tjenester";

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Meny />

                <div className="content">
                    <Switch>
                        <Route exact={true} path="/bilder">
                            <Portfolio />
                        </Route>
                        <Route exact={true} path="/tjenester">
                            <BildeMedTittel
                                tittel={"Tjenester"}
                                innhold={() => <Tjenester />}
                            />
                        </Route>
                        <Route exact={true} path="/tjenester/annonsefoto">
                            <BildeMedTittel
                                tittel={"Annonsefoto"}
                                innhold={() => <Annonsefoto />}
                            />
                        </Route>
                        <Route exact={true} path="/tjenester/privatfoto">
                            <BildeMedTittel
                                tittel={"Privatfoto"}
                                innhold={() => <Annonsefoto />}
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
