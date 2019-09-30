import * as React from "react";
import "./bildemedtittel.css";

interface IBildeMedTittel {
    bildeSrc: string;
    tittel: string;
    innhold: () => React.ReactNode;
}

const BildeMedTittel: React.StatelessComponent<IBildeMedTittel> = ({
    bildeSrc,
    innhold,
    tittel
}) => {
    return (
        <div className={"sidetittel"}>
            <div className={"sidetittel__bilde"} />
            <h2 className={"sidetittel__tittel"}>{tittel}</h2>
            <div className={"sidetittel__innhold"}>{innhold()}</div>
        </div>
    );
};

export default BildeMedTittel;
