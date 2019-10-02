import React from "react";
import classNames from "classnames";
import "./Meny.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const menyValg = [
    {
        path: "/bilder",
        label: "Bilder"
    },
    {
        path: "/tjenester",
        label: "Tjenester",
        submeny: [
            {
                path: "/tjenester/annonsefoto",
                label: "Annonsefoto"
            },
            {
                path: "/tjenester/privatfoto",
                label: "Privatfoto"
            }
        ]
    },
    {
        path: "/om",
        label: "Om"
    },
    {
        path: "/kontakt",
        label: "Kontakt"
    }
];

const Meny: React.FunctionComponent = () => {
    let location = useLocation();

    return (
        <div className={"meny"}>
            <div className={"meny__content"}>
                <Link to={"/bilder"}>
                    <img
                        className={"meny__logo"}
                        src={"/logo.png"}
                        alt={"logo"}
                    />
                </Link>
                <div className={"meny__list"}>
                    <div className={"meny__valg"}>
                        {menyValg.map((valg: any) => {
                            return (
                                <div key={valg.path}>
                                    <Link className={"link"} to={valg.path}>
                                        <h5
                                            className={classNames(
                                                "meny__valg-item",
                                                valg.path ===
                                                    location.pathname &&
                                                    "valgtside"
                                            )}
                                        >
                                            {valg.label}
                                        </h5>
                                    </Link>
                                    {valg.submeny &&
                                        location.pathname.includes(
                                            "tjenester"
                                        ) &&
                                        valg.submeny.map((valg: any) => {
                                            return (
                                                <Link
                                                    className={"link"}
                                                    key={valg.path}
                                                    to={valg.path}
                                                >
                                                    <h5
                                                        className={classNames(
                                                            "meny__subvalg-item",
                                                            "meny__valg-item",
                                                            valg.path ===
                                                                location.pathname &&
                                                                "valgtside"
                                                        )}
                                                        key={valg.path}
                                                    >
                                                        - {valg.label}
                                                    </h5>
                                                </Link>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meny;
