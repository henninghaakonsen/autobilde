import React from "react";
import classNames from "classnames";
import { IMeny } from "../App";
import "./Meny.css";

interface IProps {
    menyValg: IMeny;
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
            <div className={"meny__content"}>
                <h2 className={"meny__header"}>Autobilde</h2>
                <div className={"meny__valg"}>
                    {Object.values(menyValg).map((valg: any) => {
                        return (
                            <h5
                                className={classNames(
                                    "meny__valg-item",
                                    valg.id === valgtSide && "valgtside"
                                )}
                                key={valg.id}
                                onClick={() => settValgtSide(valg.id)}
                            >
                                {valg.label}
                            </h5>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Meny;
