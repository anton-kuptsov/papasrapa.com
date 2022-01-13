import Image from "next/image";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import style from "./Poster.module.css";

export const STORY_IMAGES = [
  {
    src: "/assets/new_poster.jpg",
    caption: "PapaSrapa movie poster",
  },
  {
    src: "/photos/handmade_1.jpg",
    caption: "Handmade transistor by PapaSrapa",
  },
  {
    src: "/photos/handmade_2.jpg",
    caption: "Handmade transistor by PapaSrapa",
  },
  {
    src: "/photos/papa_young.jpg",
    caption: "Eduard Srapionov aka PapaSrapa",
  },
];

export const Poster = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.poster}>
            <Image
              src="/assets/new_poster.png"
              width={450}
              height={634}
              alt={STORY_IMAGES[0].caption}
              onClick={() => openLightbox(0)}
              unoptimized
            />
          </div>
          <div className={style.text}>
            <div className={style.title}>A Story</div>
            <p>
              <strong>PAPA SRAPA</strong> is not a typical music documentary,
              but rather a condensed trip to the very heart of Noise. It is
              loaded with music that can hurt and heal, Russian weird
              avant-garde and savage vigor of its preeminent performer.
            </p>
            <p>
              The film takes us to bizarre noise festivals and performances with
              ravers, tripsters and freaks immersing into worlds of sonic
              violence and ecstatic states of mind. Together with Papa we trace
              Noise back to 1920-s, binding it to early Soviet avant-garde
              figures, such as Dziga Vertov, Arseniy Avraamov and Nikolai
              Kulbin.
            </p>
            <p>
              The craftsmаn should make his own tools - so Papa makes his of old
              Soviet radio components and cheap junk. We show it is not just
              about the way he plays them, using blood and saliva, but about the
              way he brings them to life. His weapons, known to the best part of
              Russian electronic musicians.
            </p>
          </div>
        </div>
      </div>
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={STORY_IMAGES.map((item) => ({
                ...item,
                source: item.src,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
