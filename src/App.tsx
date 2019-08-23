import React from "react";
import Meny from "./Meny/Meny";
import "./App.css";
import Tjenester from "./Sider/Tjenester/Tjenester";
import Portfolio from "./Sider/Portfolio/Portfolio";

interface IMenyValg {
    [key: string]: any;
}

const menyValg: IMenyValg = {
    "1": {
        id: "1",
        label: "Tjenester",
        side: () => <Tjenester />
    },
    "2": {
        id: "2",
        label: "Portfolio",
        side: () => <Portfolio />
    },
    "3": {
        id: "3",
        label: "Om",
        side: () => <div />
    },
    "4": {
        id: "4",
        label: "Kontakt",
        side: () => <div />
    }
};

const App: React.FC = () => {
    const [valgtSide, settValgtSide] = React.useState(menyValg["1"].id);

    return (
        <div className="App">
            <Meny
                menyValg={menyValg}
                settValgtSide={settValgtSide}
                valgtSide={valgtSide}
            />
            <div className="Content">{menyValg[valgtSide].side()}</div>
        </div>
    );
};

export default App;
