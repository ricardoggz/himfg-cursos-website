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
        width: 'auto',
    })
}
const Curriculum = () => {
    return (
        <section className={styles.curriculumWrapper}>
            <Title>Síntesis curricular</Title>
            <div className={`${styles.sintesisWrapper} flexContainer`}>
                <div className={styles.sintesisTextos}>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem vel quae at corporis nemo laudantium, ea in alias, tempore laborum voluptatibus commodi nihil incidunt quam quas? Repellendus numquam veritatis consectetur.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vel dolor id esse reprehenderit voluptatibus odit, alias laudantium nisi in asperiores natus repellendus. Nostrum minima dicta delectus deleniti quod reiciendis!</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href='#'>Publicación 1</a>
                        </li>
                        <li>
                            <a href='#'>Publicación 1</a>
                        </li>
                        <li>
                            <a href='#'>Publicación 1</a>
                        </li>
                        <li>
                            <a href='#'>Publicación 1</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}