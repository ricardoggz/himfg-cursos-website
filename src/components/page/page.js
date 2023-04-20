import { useState } from "react"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { Title } from '../../components'
import styles from "./page.module.css"

export const Page = ({children, title, listMenu}) => {
  const [isOpen, setIsOpen]= useState(false)
  const showMenu = ()=> setIsOpen(!isOpen)
  return (
    <>
      <div className="flexContainer">
        <button onClick={showMenu} className={styles.buttonOptions}>
          <span>Menú</span>
          <IoIosArrowDown />
        </button>
        <ul
          className={`${
            !isOpen ? styles.navigationOut : styles.pageNavigation
          }`}
        >
          <li>
            <Link href='/'>
              Inicio
            </Link>
          </li>
          {
            !listMenu ?
            <></>
            :
            listMenu.map((option, i)=>(
              <li key={i}>
                <Link href={option.path}>
                  {option.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <Title>{title}</Title>
      <div className={`${styles.pagePharagraphs} flexContainer`}>
        {children}
      </div>
    </>
  );
};
