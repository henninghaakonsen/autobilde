import * as React from "react";

interface IBildeMedTittel {
    tittel: string;
    innhold: () => React.ReactNode;
}

const BildeMedTittel: React.StatelessComponent<IBildeMedTittel> = ({
    innhold,
    tittel
}) => {
    return (
        <div className={"sideoppsett"}>
            <div className={"sideoppsett__header"}>
                <h2 className={"sideoppsett__header__tittel"}>{tittel}</h2>
            </div>

            <div className={"sideoppsett__innhold"}>{innhold()}</div>
        </div>
    );
};

export default BildeMedTittel;
