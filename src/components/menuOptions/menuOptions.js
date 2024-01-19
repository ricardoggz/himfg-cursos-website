import Link from 'next/link'
import { BsBook, BsSearch, BsPencilFill } from 'react-icons/bs'
import { RiAdminLine, RiMicroscopeFill } from 'react-icons/ri'
import { TbRibbonHealth } from 'react-icons/tb'
import { GridContainer } from '../../components'
import styles from './menuOptions.module.css'

export const MenuOptions = ()=>{
    return (
       <GridContainer>
        <Link href='/general' className={`${styles.menuOption}`}>
            <BsBook />
            <span>Dirección General</span>
        </Link>
        <Link href='/medica' className={`${styles.menuOption}`}>
            <TbRibbonHealth />
            <span>Dirección Médica</span>
        </Link>
        <Link href='/ensenanza' className={`${styles.menuOption}`}>
            <BsPencilFill />
            <span>Dirección de Enseñanza</span>
        </Link>
        <Link href='/investigacion' className={`${styles.menuOption}`}>
            <RiMicroscopeFill />
            <span>Dirección de Investigación</span>
        </Link>
        <Link href='/administracion' className={`${styles.menuOption}`}>
            <RiAdminLine />
            <span>Dirección de Administración</span>
        </Link>
        <Link href='/planeacion' className={`${styles.menuOption}`}>
            <BsSearch />
            <span>Dirección de Planeación</span>
        </Link>
       </GridContainer>
    )
}