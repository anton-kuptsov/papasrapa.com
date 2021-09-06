import style from "./Hero.module.css";
import Script from "next/script";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.video_wrapper}>
        <iframe
          src="https://player.vimeo.com/video/535592308?autoplay=1&muted=1&loop=1&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          id="video"
          title="PapaSrapa documentary movie teaser"
        />
        <div className={style.muteButton} id="unmute">
          <div>Включить звук</div>
        </div>
        <Script src="https://player.vimeo.com/api/player.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        const btn = document.getElementById('unmute');
                        btn.addEventListener("click", () => {
                            var player = new Vimeo.Player("video");
                            player.setMuted(false);
                            btn.style.display='none';
                            }
                            );`
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
