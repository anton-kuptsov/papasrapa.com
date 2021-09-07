import Image from 'next/image';
import style from './Poster.module.css';

export const Poster = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <Image src="/assets/poster.jpg" width={350} height={495} />
                <div className={style.text}>Автор официального постера фильма:
                    <p>
                        <a href="https://www.behance.net/AlekseyRico" title="Alex Ricochet" className={style.link}>
                            Алекс Рикошет / Alex Ricochet</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
