import Link from 'next/link'
import Image from 'next/image'
import { BsBook, BsSearch, BsPencilFill } from 'react-icons/bs'
import { RiAdminLine, RiMicroscopeFill } from 'react-icons/ri'
import { TbRibbonHealth } from 'react-icons/tb'
import { GridContainer } from '../../components'
import styles from './menuOptions.module.css'
import { doctors } from './consts'

export const MenuOptions = ()=>{
    return (
       <GridContainer>
        {
            doctors.map((doctor, index)=>(
            <Link
                href={`${doctor.link}`}
                className={`${styles.menuOption}`}
                key={index}
            >
                <figure className={styles.photo}>
                    <Image src ={doctor.image}/>
                </figure>
                <span className={styles.menuOptionTitle}>
                    {doctor.name}
                </span>
                <span>{doctor.description}</span>
                <figure>
                    <Image src ={doctor.icon}
                    className={styles.menuOptionIcon}
                    />
                </figure>
            </Link>
            ))
        }
       </GridContainer>
    )
}