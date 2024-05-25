import NavLinks from '../nav-links/nav-links';
import styles from './sidenav.module.css'

// import { PowerIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  return (
    <div className={styles.sidenav_container}>
        <NavLinks />
    </div>
  );
}
