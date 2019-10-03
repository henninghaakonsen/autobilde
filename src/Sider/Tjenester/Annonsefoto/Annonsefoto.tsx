import * as React from "react";
import Slider, { Settings } from "react-slick";
import { hentIndex } from "../../Portfolio/Portfolio";

const annonsefotos: any[] = Array.from(Array(28).keys()).reduce(
    (acc: any[], index: number) => {
        acc = [
            ...acc,
            {
                height: 2,
                index: index + 1,
                src: `/api/bilder/Tesla_Model_S_${hentIndex(index + 1)}.jpg`,
                width: 3
            }
        ];
        return acc;
    },
    []
);

const settings: Settings = {
    dots: false,
    infinite: false,
    initialSlide: 1,
    lazyLoad: "progressive",
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 250
};

const Annonsefoto: React.StatelessComponent = () => {
    return (
        <div className={"annonsefoto"}>
            <div className={"annonsefoto__innhold"}>
                <Slider
                    className={"annonsefoto__innhold--carousel"}
                    {...settings}
                >
                    {annonsefotos.map(bilde => {
                        return (
                            <div key={bilde.index}>
                                <img
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%"
                                    }}
                                    src={bilde.src}
                                />
                            </div>
                        );
                    })}
                </Slider>

                <div>
                    Lorem ipsum dolor sit amet, probatus maiestatis vis et,
                    cetero perfecto sapientem mei an, cu sed aperiri elaboraret.
                    Eum cu facer dictas integre, mea ea aliquip vulputate,
                    oratio ridens eleifend ex vel. Qui in luptatum recusabo, ut
                    sit iusto suscipiantur, homero voluptatum inciderint ut has.
                    Et eros fabellas percipitur eam, mea an tempor numquam, duo
                    quis copiosae salutandi ad. Eos integre sensibus ea, qui eu
                    ponderum definitionem. Ea exerci mandamus quo, dicit denique
                    evertitur ex his, has ad adhuc invidunt repudiare. Summo
                    oporteat eum id. Eos et vidisse aliquando efficiantur. Diam
                    disputando pro ut, in habeo aliquando cum, tota reprimique
                    duo te. Vix ea error iudicabit, vim mundi aliquam
                    necessitatibus et, laudem adolescens sea ut.
                </div>
            </div>
        </div>
    );
};

export default Annonsefoto;
