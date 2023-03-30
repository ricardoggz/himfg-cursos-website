import Link from 'next/link'
import { BsBook, BsSearch, BsPencilFill } from 'react-icons/bs'
import { RiAdminLine, RiMicroscopeFill } from 'react-icons/ri'
import { TbRibbonHealth } from 'react-icons/tb'
import { GridContainer } from '../../components'
import styles from './menuOptions.module.css'

export const MenuOptions = ()=>{
    return (
       <GridContainer>
        <Link href='/' className={`${styles.menuOption}`}>
            <BsBook />
            <span>Dirección general</span>
        </Link>
        <Link href='/' className={`${styles.menuOption}`}>
            <TbRibbonHealth />
            <span>Dirección médica</span>
        </Link>
        <Link href='/ensenanza' className={`${styles.menuOption}`}>
            <BsPencilFill />
            <span>Dirección de enseñanza</span>
        </Link>
        <Link href='/' className={`${styles.menuOption}`}>
            <RiMicroscopeFill />
            <span>Dirección de investigación</span>
        </Link>
        <Link href='/' className={`${styles.menuOption}`}>
            <RiAdminLine />
            <span>Dirección de administración</span>
        </Link>
        <Link href='/' className={`${styles.menuOption}`}>
            <BsSearch />
            <span>Dirección de planeación</span>
        </Link>
       </GridContainer>
    )
}