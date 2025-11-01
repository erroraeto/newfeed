import React from "react";
import { categoryNames } from '../../utils.js';
import './Navigation.css';
import logo from '../../images/logo.svg';

export const Navigation = ({onNavClick, currentCategory, className = ""}) => {
    return (
        <nav className={`navigation ${className}`}>
            <img className="navigation__logo" src={logo} alt="Logo"/>
            <div className="navigation__tags">
                {["index", "fashion", "technologies", "sport", "karpov"].map(tag => {
                    return (
                        <a
                            onClick={onNavClick}
                            key={tag}
                            className={`navigation__tag ${ currentCategory === tag ? "active-link" : ""}`}
                            data-href={tag}
                            href="#">
                            {categoryNames[tag]}
                        </a>
                    )
                })
                }
            </div>
        </nav>
    )
};