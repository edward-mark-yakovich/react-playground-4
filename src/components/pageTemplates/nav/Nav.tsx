import navCSS from "./navCSS";
import React, {memo, MouseEvent} from 'react';
import {Link, useLocation} from "react-router-dom";

type NavProps = {
  nameId: string;
  handleClick: (ev: MouseEvent) => void;
};

interface INavItems {
  label: string;
  link: string;
}

const navItems: INavItems[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Posts',
    link: '/posts',
  },
  {
    label: 'Single Post',
    link: '#',
  },
  {
    label: 'Login',
    link: '/login',
  }
];

const Nav = ({
  nameId = '',
  handleClick
}: NavProps) => {
  const onClick = (item: MouseEvent) => {
    handleClick(item);
    
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  };

  // console.log('*** Nav Fn updated ***');

  const location = useLocation();
  // console.log(location);

  return (
    <nav data-component="Nav" className={navCSS.nav}>
      <ul className={navCSS.nav_grid}>

        {navItems.map((item, index) => {
          const isActive = nameId.toUpperCase() === item.label.toUpperCase();

          if (item.label === 'Single Post' && nameId !== 'single post') return null;

          return (
            <li key={item.label} className={navCSS.nav_item}>
              <Link className={navCSS.nav_btn(isActive)} to={item.link} onClick={onClick}>{item.label}</Link>
            </li>
          );
        })}

      </ul>
    </nav>
  );
};

export default memo(Nav);
// Nav props passed in could be big, or maybe hundreds of items. To prevent useless list re-renderings, you wrap it in React.memo()
