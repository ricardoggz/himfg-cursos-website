import { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { BiUserCircle } from 'react-icons/bi'
import { UserContext } from '@/contexts'
import { Container, Title } from '@/components'
import {
    profileContainer,
    profileItems,
    profiileItem,
    editProfileForm,
    openEditProfile,
    closeEditProfile,
    editProfileButton
} from './profile.module.css'


const Profile = ()=>{
    const [editProfile, setEditProfile] = useState(false)
    const { user } = useContext(UserContext)
    console.log(user)
    return(
        <>
            {
                !user ? null:
                <Container>
                    <Title>Mis datos</Title>
                    <div className={`${profileContainer} boxShadow flexContainer`}>
                        {
                            !user ? null
                            :
                            <>
                                < BiUserCircle />
                                <div className={profileItems}>
                                        {
                                            !editProfile ?
                                            <>
                                                <span className={profiileItem}>                                            
                                                {user.student_name}
                                                </span>
                                                <span className={profiileItem}>                                        
                                                {user.student_grade}
                                                </span>
                                                <span>
                                                    <button
                                                    onClick={()=>setEditProfile(!editProfile)}
                                                    className={openEditProfile}
                                                    >
                                                    Actualizar mis datos
                                                    </button>
                                                </span>
                                            </>
                                             :
                                            null
                                        }
                                    {
                                        !editProfile ? null:
                                        <form className={editProfileForm}>
                                            <label>Nombre:</label>
                                            <input type='text' defaultValue={user.student_name}/>
                                            <label>Edad:</label>
                                            <input type='number' defaultValue={user.student_age}/>
                                            <label>Nacionalidad:</label>
                                            <input type='text' defaultValue={user.student_nationality}/>
                                            <label>Lugar de procedencia:</label>
                                            <select>
                                                <option>{user.student_state}</option>
                                            </select>
                                            <label>Perfil profesional:</label>
                                            <input type='text' defaultValue={user.student_grade}/>
                                            <label>Institución de procedencia donde trabaja actualmente</label>
                                            <input type='text' defaultValue={user.student_institution}/>                                
                                            <label>Teléfono</label>
                                            <input type='number' defaultValue={user.student_phone}/>
                                            <label>Correo electrónico:</label>
                                            <input type='text' defaultValue={user.student_email}/>
                                            <label>Contraseña:</label>
                                            <input type='password' defaultValue={user.student_password}/>    
                                            <div>
                                            <button
                                                className={editProfileButton}
                                            >
                                                Actualizar
                                            </button>
                                            <button
                                                onClick={()=>setEditProfile(!editProfile)}
                                                className={closeEditProfile}
                                            >
                                                Cancelar
                                            </button>
                                            </div>
                                        </form>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </Container>
            }
        </>
    )
}
export default Profile