import styles from './staff.module.css'

export const Staff = ({list})=>{
    return (
        <ul className={`flexContainer ${styles.staffWrapper}`}>
            {
                list.map((colaborator, i)=>(
                    <li key={i}>
                            <span>{colaborator}</span>
                    </li>
                ))
            }
        </ul>
    )
}