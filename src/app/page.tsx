import classes from './page.module.scss';
import Image from 'next/image';
import mainPhoto from '@/assets/main-photo.webp';
import { playfair_display, lato } from './fonts';

export default function Home() {
  return (
    <main>
      <div>
        <div className={classes.bgWrap}>
          <Image
            alt="Ales Pushkin"
            src={mainPhoto}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            objectFit="cover"
          />
        </div>
        <div className={classes.textContainer}>
          <p className={playfair_display.className}>Алесь Пушкін (1965—2023)</p>
          <a href="mailto:alespushkin@proton.me" className={lato.className}>
            alespushkin@proton.me
          </a>
        </div>
      </div>
    </main>
  );
}
