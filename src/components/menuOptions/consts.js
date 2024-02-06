import direccion_general from '../../assets/direccion-general.png'
import direccion_medica from '../../assets/direccion-medica.png'
import direccion_ensenanza from '../../assets/direccion-ensenanza.png'
import direccion_investigacion from '../../assets/direccion-investigacion.png'
import direccion_planeacion from '../../assets/direccion-planeacion.png'
import direccion_administracion from '../../assets/direccion-administracion.png'

import icon_1 from '../../assets/1.png'
import icon_2 from '../../assets/2.png'
import icon_3 from '../../assets/3.png'
import icon_4 from '../../assets/4.png'
import icon_5 from '../../assets/5.png'
import icon_6 from '../../assets/6.png'

export const principal = {
    image: direccion_general,
    name: 'Adrián Chávez López',
    description: 'Direccion General',
    icon:icon_6,
    link:'/general'
}
export const doctors = [
    {
        image: direccion_medica,
        name: 'Mónica Villa Guillén',
        description: 'Dirección Médica',
        icon:icon_5,
        link:'/direccion/medica'
    },
    {
        image: direccion_ensenanza,
        name: 'Sarbelio Moreno Espinosa',
        description: 'Dirección de Enseñanza y Desarrollo Académico',
        icon:icon_2,
        link:'/direccion/ensenanza'
    },
    {
        image: direccion_investigacion,
        name: 'Juan Garduño Espinosa',
        description: 'Dirección de Investigación',
        icon:icon_1,
        link:'/direccion/investigacion'
    },
    {
        image: direccion_administracion,
        name: 'Cipriano Solís Badillo',
        description: 'Dirección de Administración',
        icon:icon_3,
        link:'/direccion/administracion'
    },
    {
        image: direccion_planeacion,
        name: 'Miriam Guadalupe Herrera Segura',
        description: 'Dirección de Planeación',
        icon:icon_4,
        link:'/planeacion'
    },
]