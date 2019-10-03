import React, { useState } from "react";
import Lightbox from "react-images";
import Gallery from "react-photo-gallery";

export const hentIndex = (n: number) => {
    return n > 9 ? "" + n : "0" + n;
};

export interface IPhoto {
    height: number;
    index: number;
    src: string;
    width: number;
}

const teslaPhotos: IPhoto[] = Array.from(Array(28).keys()).reduce(
    (acc: IPhoto[], index: number) => {
        acc = [
            ...acc,
            {
                height: 2,
                index: index + 1,
                src: `/api/bilder//Tesla_Model_S_${hentIndex(index + 1)}.jpg`,
                width: 3
            }
        ];
        return acc;
    },
    []
);

const testPhotos: IPhoto[] = [
    {
        height: 620,
        index: 1,
        src: `/api/bilder//Testbilde_01.jpg`,
        width: 1920
    },
    {
        height: 2,
        index: 1,
        src: `/api/bilder//Testbilde_02.jpg`,
        width: 3
    }
];

const bilder = [...testPhotos, ...teslaPhotos];

const Portfolio: React.FunctionComponent = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = (index: number) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="portfolio">
            <Gallery
                photos={bilder}
                onClick={(event, onClickPhoto) =>
                    openLightbox(onClickPhoto.index)
                }
                margin={5}
            />
            {viewerIsOpen && (
                <Lightbox
                    currentImage={currentImage}
                    backdropClosesModal={true}
                    onClickNext={() =>
                        setCurrentImage((currentImage + 1) % bilder.length)
                    }
                    onClickPrev={() =>
                        setCurrentImage(
                            (currentImage + bilder.length - 1) % bilder.length
                        )
                    }
                    images={bilder}
                    isOpen={viewerIsOpen}
                    onClose={closeLightbox}
                />
            )}
        </div>
    );
};

export default Portfolio;
