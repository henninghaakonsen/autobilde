import React, { useState } from "react";
import Lightbox from "react-images";
import "./Portfolio.css";
import Gallery from "react-photo-gallery";

const number = (n: number) => {
    return n > 9 ? "" + n : "0" + n;
};

interface IPhoto {
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
                src: `/Tesla_Model_S_${number(index + 1)}.jpg`,
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
        src: `/Testbilde_01.jpg`,
        width: 1920
    },
    {
        height: 2,
        index: 1,
        src: `/Testbilde_02.jpg`,
        width: 3
    }
];

const photos = [...testPhotos, ...teslaPhotos];

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
        <div className="Portfolio">
            <Gallery
                photos={photos}
                onClick={(event, photos) => openLightbox(photos.index)}
            />
            {viewerIsOpen && (
                <Lightbox
                    currentImage={currentImage}
                    backdropClosesModal={true}
                    onClickNext={() =>
                        setCurrentImage((currentImage + 1) % photos.length)
                    }
                    onClickPrev={() =>
                        setCurrentImage(
                            (currentImage + photos.length - 1) % photos.length
                        )
                    }
                    images={photos}
                    isOpen={viewerIsOpen}
                    onClose={closeLightbox}
                />
            )}
        </div>
    );
};

export default Portfolio;
