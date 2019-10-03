import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const menyValg = [
    {
        label: "Bilder",
        path: "/bilder"
    },
    {
        label: "Tjenester",
        path: "/tjenester",
        submeny: [
            {
                label: "Annonsefoto",
                path: "/tjenester/annonsefoto"
            },
            {
                label: "Privatfoto",
                path: "/tjenester/privatfoto"
            }
        ]
    },
    {
        label: "Om",
        path: "/om"
    },
    {
        label: "Kontakt",
        path: "/kontakt"
    }
];

const Meny: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <div className={"meny"}>
            <div className={"meny__content"}>
                <Link to={"/bilder"}>
                    <img
                        className={"meny__logo"}
                        src={"/api/bilder/logo.png"}
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
                                        valg.submeny.map((subvalg: any) => {
                                            return (
                                                <Link
                                                    className={"link"}
                                                    key={subvalg.path}
                                                    to={subvalg.path}
                                                >
                                                    <h5
                                                        className={classNames(
                                                            "meny__subvalg-item",
                                                            "meny__valg-item",
                                                            subvalg.path ===
                                                                location.pathname &&
                                                                "valgtside"
                                                        )}
                                                        key={subvalg.path}
                                                    >
                                                        - {subvalg.label}
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
