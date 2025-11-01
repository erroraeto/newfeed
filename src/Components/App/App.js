import { categoryId } from '../../utils.js';
import { Navigation } from '../Navigation/Navigation.js';
import { MainArticle, SmallArticle } from '../Articles/Articles.js';
import React from 'react';
import './App.css';

export const App = () => {
    const [category, setCategory] = React.useState("index");
    const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] });

    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    };

    React.useEffect(() => {
        fetch("http://frontend.karpovcourses.net/api/v2/ru/news/" + categoryId[category] || "")
            .then(response => response.json())
            .then(response => {
                setArticles(response);
            })
    }, [category]);

    return (
        <React.Fragment>
            <Navigation onNavClick={onNavClick} currentCategory={category} className="header__navigation"/>
            <main className="main">
                {articles.items.slice(0, 3).map((item) => {
                    return (
                        <MainArticle
                            key={item.title}
                            image={item.image}
                            category={articles.categories.find(({id}) => item.category_id === id).name}
                            title={item.title}
                            description={item.description}
                            source={articles.sources.find(({id}) => item.source_id === id).name}
                        />
                    )
                })}
            </main>
            <nav className="nav">
                {articles.items.slice(3, 12).map((item) => {
                    return (
                        <SmallArticle
                            key={item.title}
                            title={item.title}
                            date={item.date}
                            source={articles.sources.find(({id}) => item.source_id === id).name}
                        />
                    )
                })}
            </nav>
            <footer className="footer">
                <Navigation onNavClick={onNavClick} currentCategory={category} className="footer__navigation"/>
                <div className="footer__other">
                    <h3 className="footer__attention">Сделано на Frontend курсе в <a className="footer__link" href="#">Karpov.Courses</a></h3>
                    <h3 className="footer__license">© 2021</h3>
                </div>
            </footer>
        </React.Fragment>
    )
};