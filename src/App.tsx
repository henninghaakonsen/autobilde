import React from "react";
import Meny from "./Meny/Meny";
import "./App.css";
import Tjenester from "./Sider/Tjenester/Tjenester";
import Portfolio from "./Sider/Portfolio/Portfolio";
import Kontakt from "./Sider/Kontakt/Kontakt";
import BildeMedTittel from "./BildeMedTittel/BildeMedTittel";
import Om from "./Sider/Om/Om";

export interface IMenyValg {
    id: string;
    label: string;
    side: () => React.ReactNode;
}

export interface IMeny {
    [key: string]: IMenyValg;
}

const menyValg: IMeny = {
    "1": {
        id: "1",
        label: "Bilder",
        side: () => <Portfolio />
    },
    "2": {
        id: "2",
        label: "Tjenester",
        side: () => (
            <BildeMedTittel
                bildeSrc={"/Tesla_Model_S_01.jpg"}
                tittel={"Tjenester"}
                innhold={() => <Tjenester />}
            />
        )
    },
    "3": {
        id: "3",
        label: "Om",
        side: () => (
            <BildeMedTittel
                bildeSrc={"/Tesla_Model_S_01.jpg"}
                tittel={"Om"}
                innhold={() => <Om />}
            />
        )
    },
    "4": {
        id: "4",
        label: "Kontakt",
        side: () => (
            <BildeMedTittel
                bildeSrc={"/Tesla_Model_S_01.jpg"}
                tittel={"Kontakt"}
                innhold={() => <Kontakt />}
            />
        )
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
