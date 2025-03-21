import Swal from "sweetalert2"
import { Title } from '@/components'
import styles from './styles.module.css'
import withReactContent from "sweetalert2-react-content"

const Alert = withReactContent(Swal)

export const showCurriculum = () => {
    return Alert.fire({
        html: <Curriculum />,
        customClass: {
            container: styles.curriculumWrapper
        },
        showConfirmButton: false,
        showCloseButton: true,
        width: '80%',
    })
}
const Curriculum = () => {
    return (
        <section className={styles.curriculumWrapper}>
            <Title>DR. ERNESTO CALDERÓN JAIMES</Title>
            <div className={`${styles.sintesisWrapper} flexContainer`}>
                <div className={styles.sintesisTextos}>
                    <div>
                        <iframe
                            src='https://drive.google.com/file/d/1Naft4XNtRRR5HCmQkyRa_cnfvedcd6Et/preview'
                            frameBorder='0'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}