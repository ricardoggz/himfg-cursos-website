import Link from 'next/link'
import Image from 'next/image'
import { BsBook, BsSearch, BsPencilFill } from 'react-icons/bs'
import { RiAdminLine, RiMicroscopeFill } from 'react-icons/ri'
import { TbRibbonHealth } from 'react-icons/tb'
import { GridContainer } from '../../components'
import styles from './menuOptions.module.css'
import { doctors, principal } from './consts'

export const MenuOptions = ()=>{
    return (
       <>
       <div className={styles.menuOptions}>
        <div className={styles.principalContainer}>
        <div></div>
        <Link
            href={`${principal.link}`}
            className={`${styles.menuOption}`}
            >
            <figure className={styles.photo}>
                <Image src ={principal.image}/>
            </figure>
            <span className={styles.menuOptionTitle}>
                {principal.name}
            </span>
            <span>{principal.description}</span>
            <figure>
                <Image src ={principal.icon}
                className={styles.menuOptionIcon}
                />
            </figure>
        </Link>
        <div></div>
        </div>
        <div className={`${styles.doctors}`}>
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
        </div>
       </div>
       </>
    )
}