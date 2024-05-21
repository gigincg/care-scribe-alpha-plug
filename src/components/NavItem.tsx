import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <a href={href} className='text-blue-500 hover:text-blue-700'>
      {label}
    </a>
  );
};

export default NavItem;
