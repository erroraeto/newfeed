import React, { FC } from 'react';
import { categoryNames } from '../../utils';
import './Navigation.css';
// @ts-ignore
import logo from '../../images/logo.svg';

interface Props {
  onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
  currentCategory: string;
  className?: string;
}

export const Navigation: FC<Props> = ({ onNavClick, currentCategory, className = '' }) => {
  return (
    <nav className={`navigation ${className}`}>
      <img className="navigation__logo" src={logo} alt="Logo" />
      <div className="navigation__tags">
        {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((tag) => {
          return (
            <a
              onClick={onNavClick}
              key={tag}
              className={`navigation__tag ${currentCategory === tag ? 'active-link' : ''}`}
              data-href={tag}
              href="#"
            >
              {/* @ts-ignore */}
              {categoryNames[tag]}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
