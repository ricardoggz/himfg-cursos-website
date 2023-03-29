import Image from 'next/image'
import { GridContainer } from '../../components'
import styles from './directory.module.css'
import { doctors } from './consts'

export const Directory = ()=>{
    return (
        <GridContainer>
            {
                doctors.map((doctor, i)=>(
                    <div className={`${styles.card}`} key={i}>
                        <figure>
                            <Image src={doctor.image} alt={doctor.name}/>
                        </figure>
                        <div className={styles.cardTitles}>
                            <span>{doctor.description}</span>
                            <span>{doctor.name}</span>
                        </div>
                    </div>
                ))
            }
        </GridContainer>
    )
}