import React, {FC} from 'react';
import './Articles.css';
import { beautifyDate } from "../../utils";

interface PropsMain {
    image: string;
    title: string;
    category: string;
    description: string;
    source: string;
};
export const MainArticle: FC<PropsMain> = ({image, title, category, description, source}) => {
    return (
        <article className="main-article__item">
            <img className="main-article__item-img" src={image}/>
            <div className="main-article__item-content">
                <h3 className="main-article__item-tag">{category}</h3>
                <h2 className="main-article__item-title">{title}</h2>
                <p className="main-article__item-text">{description}</p>
                <a className="main-article__item-source">{source}</a>
            </div>
        </article>
    )
};

interface PropsSmall {
    title: string;
    source: string;
    date: string;
};
export const SmallArticle: FC<PropsSmall> = ({title, date, source}) => {
    return (
        <article className="small-article__item">
            <h3 className="small-article__item-title">{title}</h3>
            <div className="small-article__item-info">
                <h3 className="small-article__item-data">{beautifyDate(date)}</h3>
                <a className="small-article__item-source" href="#">{source}</a>
            </div>
        </article>
    )
};