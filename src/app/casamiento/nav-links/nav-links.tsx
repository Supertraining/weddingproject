"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import styles from './navLinks.module.css'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'getPictures', href: '/casamiento/pictures', icon: UserGroupIcon },
  { name: 'uploadPictures', href: '/casamiento/uploadPictures', icon: DocumentDuplicateIcon },
]


export default function NavLinks() {

  const pathName = usePathname()

  return (
    <>
      {links.map((link) => {

        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${styles.link} ${pathName === link.href ? styles.link_on : styles.link_off}`}
          >
            <LinkIcon className={styles.link_icon} />
            <p >{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
