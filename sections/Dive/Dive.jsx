import style from "../Poster/Poster.module.css";
import Image from "next/image";
import { STORY_IMAGES } from "../Poster";

export const Dive = () => {
  return (
    <div className={style.wrapper_next}>
      <div className={style.foto_handmaid}>
        <div className={style.handmaid_top}>
          <Image
            src={STORY_IMAGES[1].src}
            width={240}
            height={240}
            objectFit="cover"
            alt={STORY_IMAGES[1].caption}
            onClick={() => openLightbox(1)}
          />
        </div>
        <div className={style.handmaid_bottom}>
          <Image
            src={STORY_IMAGES[2].src}
            width={240}
            height={240}
            objectFit="cover"
            alt={STORY_IMAGES[2].caption}
            onClick={() => openLightbox(2)}
          />
        </div>
      </div>
      <div className={style.next_text}>
        <strong>
          <i>dive into the underground . . . </i>
        </strong>
        <p>
          Our camera followed Papa Srapa at every step and turn. We sneaked into
          numerous dim rooms and spacious halls he was performing at, chased him
          to the eerie underworld of an abandoned factory. We listened to his
          liquored up revelations on the Soviet underground - and tasted of his
          doomsday DIY synth shrieking.
        </p>
        <p>
          This film shows that Noise music was not born in Europe or Japan, but
          came to be as a bright child of a century-old tradition of Russian
          avant-garde.
        </p>
      </div>
      <div className={style.foto_papa}>
        <Image
          src={STORY_IMAGES[3].src}
          width={400}
          height={500}
          objectFit="cover"
          alt={STORY_IMAGES[3].caption}
          onClick={() => openLightbox(3)}
        />
      </div>
    </div>
  );
};
