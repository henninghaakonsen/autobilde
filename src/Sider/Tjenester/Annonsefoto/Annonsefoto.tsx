import * as React from "react";
import { IPhoto, hentIndex } from "../../Portfolio/Portfolio";

const annonsefotos: any[] = Array.from(Array(28).keys()).reduce(
    (acc: any[], index: number) => {
        acc = [
            ...acc,
            {
                height: 2,
                index: index + 1,
                original: `/Tesla_Model_S_${hentIndex(index + 1)}.jpg`,
                width: 3
            }
        ];
        return acc;
    },
    []
);

const Annonsefoto: React.StatelessComponent = () => {
    return (
        <div className={"tjenester"}>
            <h4>Hva tilbyr Autobilde</h4>
            <p>
                Lorem ipsum dolor sit amet, probatus maiestatis vis et, cetero
                perfecto sapientem mei an, cu sed aperiri elaboraret. Eum cu
                facer dictas integre, mea ea aliquip vulputate, oratio ridens
                eleifend ex vel. Qui in luptatum recusabo, ut sit iusto
                suscipiantur, homero voluptatum inciderint ut has. Et eros
                fabellas percipitur eam, mea an tempor numquam, duo quis
                copiosae salutandi ad. Eos integre sensibus ea, qui eu ponderum
                definitionem. Ea exerci mandamus quo, dicit denique evertitur ex
                his, has ad adhuc invidunt repudiare. Summo oporteat eum id. Eos
                et vidisse aliquando efficiantur. Diam disputando pro ut, in
                habeo aliquando cum, tota reprimique duo te. Vix ea error
                iudicabit, vim mundi aliquam necessitatibus et, laudem
                adolescens sea ut.
            </p>
        </div>
    );
};

export default Annonsefoto;
