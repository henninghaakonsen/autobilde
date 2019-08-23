import React from "react";
import "./Tjenester.css";

const Tjenester: React.FunctionComponent = () => {
    return (
        <div className={"Tjenester"}>
            <h2>Tjenester</h2>
            <h4>Hva tilbyr Autobilde</h4>
            <p>
                Autobilde tilbyr bilder av brukt- og nybiler til private og
                forhandlere. I et marked med høy konkurranse er gode bilder
                viktig for å skape interesse for akkurat din bil og økt
                interesse gir mulighet for god pris. Å fotografere bilen kan
                både være tidkrevende og vanskelig. Autobilde kan ta seg av
                dette for deg, og levere bilder av høy kvalitet.
            </p>

            <h4>Produkter</h4>
            <p>
                Bildene vil være jevnt belyst, ha korrekte farger og få frem
                bilens former på en god måte. Bilder handler om å presentere
                bilen på en best mulig måte, slik at kjøper får et helhetlig og
                riktig inntrykk av bilen. Autobilde tar bilder til annonser,
                nettsider, sosiale medier og privat bruk. Ønsker kan tilpasses
                hver enkelt kunde. Ta kontakt for nærmere avtale.
            </p>
        </div>
    );
};

export default Tjenester;
