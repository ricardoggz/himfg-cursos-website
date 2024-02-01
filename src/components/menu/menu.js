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
        title="General"
        href='/general'
      />
      {/*médica*/}
      <MenuItemWithSubMenu
        title="Medica"
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
            title='Subdirección de asistencia medica'
          >
            <SubMenu>
              <SubMenuItem
                title="Departamento de urgencias"
                href='/ensenanza'
              />
              <SubMenuItem
                title="Departamento de infectología"
                href='/ensenanza'
              />
            </SubMenu>
          </SubMenuItemWithSubMenu>
        </SubMenu>
      </MenuItemWithSubMenu>
      {/**/}
      <MenuItemWithSubMenu
        title="Enseñanza"
        href='/ensenanza'
      >
        <SubMenu>
          <SubMenuItem
            title="Pre y posgrado"
            href='/ensenanza'
          />
          <SubMenuItem
            title="Educación médica continua"
            href='/ensenanza/offer'
          />
          <SubMenuItem
            title="Comunicación social y CEMESATEL"
            href='/ensenanza'
          />
          <SubMenuItem
            title="Hemerobiblioteca"
            href='/ensenanza'
          />
        </SubMenu>
      </MenuItemWithSubMenu>
      {/**/}
      <MenuItem
        title="Administración"
        href='/administracion'
      />
      {/**/}
      <MenuItem
        title="Planeación"
        href='/planeacion'
      />
      {/**/}
      <MenuItem
      title="Investigación"
      href='/direccion/investigacion'
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
