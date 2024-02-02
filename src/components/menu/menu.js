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
        title="Dicrección General"
        href='/general'
      />
      {/*médica*/}
      <MenuItemWithSubMenu
        title="Dirección Medica"
        href='/direccion/medica'
      >
        <SubMenu>
          {/*Subdirección de pediatría ambulatoria*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de pediatría ambulatoria'
          >
            <SubMenu>
            <SubMenuItem
              title="Departamento de genética"
              href='/ensenanza'
            />
            <SubMenuItem
              title="Departamento de psiquiatríay medicina del adolescente"
              href='/ensenanza'
            />
            <SubMenuItem
              title="Departamento de rehabilitación"
              href='/ensenanza'
            />
            <SubMenuItem
              title="Departamento de audiología y foniatría"
              href='/ensenanza'
            />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de asistencia medica*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Asistencia Médica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Urgencias"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Infectología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Terapia Intensiva"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Cardiología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Nefrología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Neonatología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Hemato-Oncología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Gastroenterología y Nutrición"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Neurología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Medicina Interna"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Endocrinología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Epidemiología Hospitalaria"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Cuidados Paliativos y Calidad de Vida"
                href='/ensenanza'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
          {/*Subdirección de asistencia quirúrgica*/}
          <SubMenuItemWithSubMenu
            title='Subdirección de Asistencia Médica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de Trasplantes"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Ortopedia"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Neurocirugía"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Urología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Cirgugía Cardiovascular, Tórax y Endoscopía"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Anestesia y Algología"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de Estomatología"
                href='/ensenanza'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/*Enseñanza*/}
      <MenuItemWithSubMenu
        title="Dirección de Enseñanza y Desarrollo Académico"
        href='/ensenanza'
      >
        <SubMenu>
          <SubMenuItemWithSubMenu
            title="Subdirección de Enseñanza"
            href='/ensenanza'
          >
          <SubMenu>
          <SubMenuItem
            title="Departmamento de Educación de Pre y Posgrado"
            href='/ensenanza/offer'
          />
          <SubMenuItem
            title="Departamento de Educación Médica Contínua"
            href='/ensenanza'
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
      <MenuItem
      title="Dirección de Investigación"
      href='/direccion/investigacion'
      />
      {/*Administración*/}
      <MenuItem
        title="Dirección de Administración"
        href='/administracion'
      />
      {/*Planeación*/}
      <MenuItem
        title="Dirección de Planeación"
        href='/planeacion'
      />
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

export {Menu};
