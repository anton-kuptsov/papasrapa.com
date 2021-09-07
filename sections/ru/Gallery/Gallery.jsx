import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import style from "./Gallery.module.css";
import { images } from "./data";
import Carousel, { Modal, ModalGateway } from "react-images";

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openLightbox = useCallback(index => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Image
          src={images[0].src}
          width={650}
          height={650}
          objectFit="cover"
          objectPosition="center"
          quality={100}
          unoptimized={isLoaded}
          alt={images[0].caption}
          onClick={() => openLightbox(0)}
        />
        <div className={style.grid_4}>
          <Image
            src={images[1].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(1)}
          />
          <Image
            src={images[2].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(2)}
          />
          <Image
            src={images[3].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(3)}
          />
          <Image
            src={images[4].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(4)}
          />
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.grid_4}>
          <Image
            src={images[5].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(5)}
          />
          <Image
            src={images[6].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(6)}
          />
          <Image
            src={images[7].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(7)}
          />
          <Image
            src={images[8].src}
            width={650}
            height={650}
            objectFit="cover"
            objectPosition="center"
            alt={images[0].caption}
            onClick={() => openLightbox(8)}
          />
        </div>
        <Image
          src={images[9].src}
          width={650}
          height={650}
          objectFit="cover"
          objectPosition="center"
          alt={images[0].caption}
          onClick={() => openLightbox(9)}
        />
      </div>

      <div className={style.grid_3}>
        <Image
          src={images[10].src}
          width={650}
          height={650}
          objectFit="cover"
          objectPosition="center"
          alt={images[0].caption}
          onClick={() => openLightbox(10)}
        />
        <Image
          src={images[11].src}
          width={650}
          height={650}
          objectFit="cover"
          objectPosition="center"
          unoptimized={isLoaded}
          alt={images[0].caption}
          onClick={() => openLightbox(11)}
        />
        <Image
          src={images[12].src}
          width={650}
          height={650}
          objectFit="cover"
          objectPosition="center"
          alt={images[0].caption}
          onClick={() => openLightbox(12)}
        />
      </div>

      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(item => ({
                ...item,
                source: item.src
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
