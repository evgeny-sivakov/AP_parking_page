import classes from './page.module.scss';
import Image from 'next/image';
import mainPhoto from '@/assets/main-photo.webp';
import { playfair_display, lato } from './fonts';

export default function Home() {
  return (
    <main>
      <div className={classes.background}>
        <div className={classes.textContainer}>
          <p className={playfair_display.className}>Алесь Пушкін</p>
          <p>(1965—2023)</p>
          <a href="mailto:alespushkin@proton.me" className={lato.className}>
            alespushkin@proton.me
          </a>
        </div>
      </div>
    </main>
  );
}
