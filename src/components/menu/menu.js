import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import styles from './menu.module.css'

function Menu() {
  const [links, setLinks] = useState(null)
  const getLinks = async()=>{
    try {
      const links = await axios.get(`${process.env.BASE_URL_API}api/directions/all-directions`)
      setLinks(links.data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getLinks()
  },[])
  return (
    <div className={styles.menu}>
      {/*general*/}
      <MenuItem
        title="Dirección General"
        href='/general'
      />
      {/*médica*/}
      <MenuItemWithSubMenu
        title="Dirección Médica"
        href='/direccion/medica'
      >
        <SubMenu>
          {/*Subdirección de pediatría ambulatoria*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Pediatría Ambulatoria'
            href='/medica'
          >
            <SubMenu>
            <SubMenuItem
              title="Departamento de Genética"
              href='/medica'
            />
            <SubMenuItem
              title="Departamento de Psiquiatría y Medicina del Adolescente"
              href='/medica'
            />
            <SubMenuItem
              title="Departamento de Rehabilitación"
              href='/medica'
            />
            <SubMenuItem
              title="Departamento de Audiología y Foniatría"
              href='/medica'
            />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de asistencia medica*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Asistencia Médica'
            href='/medica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Urgencias"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Infectología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Terapia Intensiva"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Cardiología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Nefrología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Neonatología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Hemato-Oncología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Gastroenterología y Nutrición"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Neurología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Medicina Interna"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Endocrinología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Epidemiología Hospitalaria"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Cuidados Paliativos y Calidad de Vida"
                href='/medica'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de asistencia quirúrgica*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Asistencia Quirúrgica'
            href='/medica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Trasplantes"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Ortopedia"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Neurocirugía"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Urología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Cirugía Cardiovascular, Tórax y Endoscopía"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Anestesia y Algología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Estomatología"
                href='/medica'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de servicios auxiliares y diagnostico*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Servicios Auxiliares de Diagnóstico'
            href='/medica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Imagenología"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Laboratorio Clínico"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Patología Clínica y Experimental"
                href='/medica'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de atención integral al paciente*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Atención Integral al Paciente'
            href='/medica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Enfermería"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Trabajo Social"
                href='/medica'
              />
              <SubMenuItem
                title="Departamento de Relaciones Públicas"
                href='/medica'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Enseñanza*/}
      <MenuItemWithSubMenu
        title="Dirección de Enseñanza y Desarrollo Académico"
        href='/direccion/ensenanza'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Enseñanza"
            href='/ensenanza'
          >
          <SubMenu>
          <SubMenuItem
            title="Departmamento de Educación de Pre y Posgrado"
            href='/ensenanza'
          />
          <SubMenuItem
            title="Departamento de Educación Médica Contínua"
            href='/ensenanza/offer'
          />
          <SubMenuItem
            title="Departamento de Comunicación Social y CEMESATEL"
            href='/ensenanza'
          />
          <SubMenuItem
            title="Departamento de Hemerobiblioteca"
            href='/ensenanza'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Investigación*/}
      <MenuItemWithSubMenu
        title="Dirección de Investigación"
        href='/direccion/investigacion'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Gestión de la Investigación"
            href='/investigacion'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Administración de Control y Gestión a la Investigación"
            href='/investigacion'
          />
          <SubMenuItem
            title="Departamento Auxiliar Administrativo de Proyectos de Investigación"
            href='/investigacion'
          />
          <SubMenuItem
            title="Departamento de Ediciones Médicas"
            href='/investigacion'
          />
          <SubMenuItem
            title="Departamento de Evaluación de Medicamentos y Farmacovigilancia"
            href='/investigacion'
          />
          {/*Departamento de Investigación Clínica*/}
          <SubMenuItemWithSubMenu
            title="Departamento de Investigación Clínica"
            href='/investigacion'
          >
            <SubMenu>
              <SubMenuItem
              title="Departamento de Investigación Epidemiológica en Endocrinología y Nutrición"
              href='/investigacion'
              />
              <SubMenuItem
              title="Unidad de Investigación en Enfermedades Neurológicas"
              href='/investigacion'
              />
              <SubMenuItem
              title="Unidad de Investigación en Medicina Basada en Evidencias"
              href='/investigacion'
              />
              <SubMenuItem
                title="Unidad de Investigación en Epidemiología Clínica"
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación y Diagnóstico en Nefrología y Metabolismo Mineral Óseo'
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Enfermedades Emergentes'
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Enfermedades Infecciosas'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Parasitología'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Bacteriología Intestinal'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Patogenicidad Bacteriana'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Cardiopatías Congénitas'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Ingeniería de Tejidos'
                href='/investigacion'
              />
              <SubMenuItem
                title=' Laboratorio de Investigación en Inmunoquímica'
                href='/investigacion'
              />
              <SubMenuItem
                title='Centro de Estudios Económicos y Sociales en Salud (CEESES)'
                href='/investigacion'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Departamento de Investigación Biomédica*/}
          <SubMenuItemWithSubMenu
            title="Departamento de Investigación Biomédica"
            href='/investigacion'
          >
            <SubMenu>
              <SubMenuItem
              title="Servicio de Investigación Biomédica"
              href='/investigacion'
              />
              <SubMenuItem
              title="Unidad Habilitada de Apoyo al Predictamen (UHAP)"
              href='/investigacion'
              />
              <SubMenuItem
              title="Unidad de Investigación en Enfermedades Oncológicas"
              href='/investigacion'
              />
              <SubMenuItem
                title="Unidad de Investigación en Virología y Cáncer"
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Inmunología y Proteómica'
                href='/investigacion'
              />
              <SubMenuItem
                title='Unidad de Investigación en Biología Computacional y Diseño de Fármacos'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Biología del Desarrollo y Teratogénesis Experimental'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Patología Experimental'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Genómica, Genética y Bioinformática'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Enfermedades Metabólicas: Obesidad y Diabetes'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Farmacología'
                href='/investigacion'
              />
              <SubMenuItem
                title='Laboratorio de Investigación en Neurociencias'
                href='/investigacion'
              />
              <SubMenuItem
                title='Biobanco de Investigación en Células Leucémicas'
                href='/investigacion'
              />
              <SubMenuItem
                title='Servicio de Bioterio'
                href='/investigacion'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Administración*/}
      <MenuItemWithSubMenu
        title="Dirección de Administración"
        href='/direccion/administracion'
      >
        <SubMenu>
          {/*Subdirección de recursos humanos*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Recursos Humanos"
            href='/direccion/subdireccion-recursos-humanos'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Selección, Contratación y Seguimiento de Capital Humano"
            href='/direccion/seleccion-capital-humano'
          />
          <SubMenuItem
            title="Departamento de Sueldos"
            href='/administracion'
          />
          <SubMenuItem
            title="Departamento de Atención y Desarrollo de Capital Humano"
            href='/administracion'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de recursos materiales*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Recursos Materiales"
            href='/direccion/subdireccion-recursos-materiales'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Compras Gubernamentales Generales"
            href='/administracion'
          />
          <SubMenuItem
            title="Departamento de Compras Gubernamentales Farmacéuticas"
            href='/direccion/compras-gubernamentales-farmaceuticas'
          />
          <SubMenuItem
            title="Departamento de Almacenes"
            href='/direccion/departamento-almacenes'
          />
          <SubMenuItem
            title="Departamento de Inventario y Activo Fijo"
            href='/direccion/inventario-y-activo-fijo'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de mantenimiento*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Mantenimiento"
            href='/administracion'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Servicios Generales"
            href='/administracion'
          />
          <SubMenuItem
            title="Departamento de Mantenimiento"
            href='/administracion'
          />
          <SubMenuItem
            title="Departamento de Ingeniería Biomédica"
            href='/administracion'
          />
          <SubMenuItem
            title="Departamento de Obra Pública"
            href='/administracion'
          />
          <SubMenuItem
            title="Departamento de Protección Civil"
            href='/administracion'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de recursos financieros*/}
          <SubMenuItemWithSubMenu
            title="Subdirección de Recursos Financieros"
            href='/administracion'
          >
          <SubMenu>
          <SubMenuItem
            title="Departamento de Tesorería"
            href='/direccion/departamento-tesoreria'
          />
          <SubMenuItem
            title="Departamento de Contabilidad"
            href='/direccion/departamento-contabilidad'
          />
          <SubMenuItem
            title="Departamento de Presupuesto"
            href='/direccion/departamento-presupuesto'
          />
          <SubMenuItem
            title="Departamento de Control y Análisis Económico"
            href='/direccion/departamento-control-analisis-economico'
          />
          </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Planeación*/}
      <MenuItemWithSubMenu
        title="Dirección de Planeación"
        href='/planeacion'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Seguimiento Programático y Diseño Organizacional"
            href='/ensenanza'
          >
          <SubMenuRight>
          <SubMenuItem
            title="Departmamento de Seguimiento Programático y Organización Institucional"
            href='/ensenanza'
          />
          <SubMenuItem
            title="Departamento de Tecnologías de la Información y Comunicaciones"
            href='/ensenanza/ofer'
          />
          <SubMenuItem
            title="Departamento de Comunicación Social y CEMESATEL"
            href='/ensenanza'
          />
          <SubMenuItem
            title="Departamento de Bioestadística y Archivo Clínico"
            href='/ensenanza'
          />
          </SubMenuRight>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
    </div>
  );
}

function MenuItem({ title, children, href }) {
  return (
    <Link
      className={styles.menu_item}
      href={`${href}`}
    >
      <span>{title}</span>
      {children}
    </Link>
  );
}

function MenuItemWithSubMenu({ title, children, href }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <Link
      className={styles.menu_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={`${href}`}
    >
      <span>{title}</span>
      {children}
      {isSubMenuOpen && children}
    </Link>
  );
}

function SubMenu({ children }) {
  return <div className={styles.submenu}>{children}</div>;
}

function SubMenuItem({ title, href }) {
  return (
    <>
      <Link
        className={styles.sub_menu_item}
        href={`${href}`}
      >
        {title}
      </Link>
    </>
  )
}

function SubMenuItemWithSubMenu({ title, children }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  

  return (
    <div
      className={styles.sub_menu_item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
      {isSubMenuOpen && children}
    </div>
  );
}

function SubMenuRight({ children }) {
  return <div className={styles.submenu_right}>{children}</div>;
}

export {Menu};
