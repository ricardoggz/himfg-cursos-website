import React, { useState } from 'react'
import Link from 'next/link';
import styles from './menu.module.css'

function Menu() {
  return (
    <div className={styles.menu}>
      <MenuItem
        title="General"
        href='/general'
      />
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
      <MenuItem
        title="Administración"
        href='/administracion'
      />
      <MenuItem
        title="Planeación"
        href='/planeacion'
      />
      <MenuItem
      title="Investigación"
      href='/investigacion'
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

export {Menu};
