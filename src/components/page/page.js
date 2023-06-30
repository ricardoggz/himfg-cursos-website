import { useState } from "react"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { Title } from '../../components'
import styles from "./page.module.css"

export const Page = ({children, title, listMenu, textMenu, route}) => {
  const [isOpen, setIsOpen]= useState(false)
  const showMenu = ()=> setIsOpen(!isOpen)
  return (
    <>
      <div className="flexContainer">
          <Link
            href={route}
            className={styles.anchor}
          >
            {textMenu}
          </Link>
      </div>
      <br/>
      <Title>{title}</Title>
      <div className={`${styles.pagePharagraphs} flexContainer`}>
        {children}
      </div>
    </>
  );
};
