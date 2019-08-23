import React from "react";
import "./Meny.css";

interface IProps {
    menyValg: any;
    settValgtSide: (index: string) => void;
    valgtSide: string;
}

const Meny: React.FunctionComponent<IProps> = ({
    menyValg,
    settValgtSide,
    valgtSide
}) => {
    return (
        <div className={"meny"}>
            <h2 className={"meny__header"}>Autobilde</h2>
            <div className={"meny__valg"}>
                {Object.values(menyValg).map((valg: any) => {
                    return (
                        <h5
                            className={"meny__valg-item"}
                            key={valg.id}
                            onClick={() => settValgtSide(valg.id)}
                        >
                            {valg.label}
                        </h5>
                    );
                })}
            </div>
        </div>
    );
};

export default Meny;
