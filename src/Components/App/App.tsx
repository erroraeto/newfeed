import { categoryId } from '../../utils';
import { getDatabase, ref, get } from "firebase/database";
import { Navigation } from '../Navigation/Navigation';
import { MainArticle, SmallArticle } from '../Articles/Articles';
import React from 'react';
import './App.css';
import { NewsAPI } from '../../../types'
import app from "../../firebase-config";

export const App = () => {
    const [articleId, setArticleId] = React.useState<number | null>(null);
    const [category, setCategory] = React.useState("index");
    const [articles, setArticles] = React.useState<NewsAPI>({ items: [], categories: [], sources: [] });

    const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setArticleId(null);
        const category = e.currentTarget.dataset.href;

        if (category) {
            setCategory(category);
        }
    };

    const onArticleClick = (id: number) => {
        setArticleId(id);
    }

    React.useEffect( () => {
        const db = getDatabase(app);
        // @ts-ignore
        const dbRef = ref(db, `${categoryId[category]}`);
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setArticles(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }, [category]);

    return (
        <React.Fragment>
            <Navigation onNavClick={onNavClick} currentCategory={category} className="header__navigation"/>
            <main className="main">
                {articles.items.slice(0, 3).map((item) => {
                    const category = articles.categories.find(({id}) => item.category_id === id);
                    const source = articles.sources.find(({id}) => item.source_id === id);
                    return (
                        <MainArticle
                            key={item.title}
                            image={item.image}
                            category={category?.name || ''}
                            title={item.title}
                            description={item.description}
                            source={source?.name || ''}
                        />
                    )
                })}
            </main>
            <nav className="nav">
                {articles.items.slice(3, 12).map((item) => {
                    const source = articles.sources.find(({id}) => item.source_id === id);
                    return (
                        <SmallArticle
                            key={item.title}
                            title={item.title}
                            date={item.date}
                            source={source?.name || ''}
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