// const categoryId = {
//     index: 0,
//     sport: 2,
//     technologies: 1,
//     karpov: 6,
//     fashion: 3,
// };
//
// const categoryNames = {
//     index: 'Главная',
//     fashion: 'Мода',
//     technologies: 'Технологии',
//     sport: 'Спорт',
//     karpov: 'Карпов',
// };
//
// const Navigation = ({onNavClick, currentCategory, className = ""}) => {
//     return (
//         <nav className={`navigation ${className}`}>
//             <img className="navigation__logo" src="images/logo.svg" alt="Logo"/>
//             <div className="navigation__tags">
//                 {["index", "fashion", "technologies", "sport", "karpov"].map(tag => {
//                     return (
//                         <a
//                         onClick={onNavClick}
//                         key={tag}
//                         className={`navigation__tag ${ currentCategory === tag ? "active-link" : ""}`}
//                         data-href={tag}
//                         href="#">
//                             {categoryNames[tag]}
//                         </a>
//                     )
//                 })
//                 }
//             </div>
//         </nav>
//     )
// };
//
// const MainArticle = ({image, title, category, description, source}) => {
//     return (
//         <article className="main-article__item">
//             <img className="main-article__item-img" src={image}/>
//             <div className="main-article__item-content">
//                 <h3 className="main-article__item-tag">{category}</h3>
//                 <h2 className="main-article__item-title">{title}</h2>
//                 <p className="main-article__item-text">{description}</p>
//                 <a className="main-article__item-source">{source}</a>
//             </div>
//         </article>
//     )
// };
//
// const SmallArticle = ({title, date, source}) => {
//     return (
//         <article className="small-article__item">
//             <h3 className="small-article__item-title">{title}</h3>
//             <div className="small-article__item-info">
//                 <h3 className="small-article__item-data">
//                     {new Date(date).toLocaleDateString('ru-RU',{
//                         month: 'long',
//                         day: 'numeric',
//                     })}
//                 </h3>
//                 <a className="small-article__item-source" href="#">{source}</a>
//             </div>
//         </article>
//     )
// };
//
// const App = () => {
//     const [category, setCategory] = React.useState("index");
//     const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] });
//
//     const onNavClick = (e) => {
//         e.preventDefault();
//         setCategory(e.currentTarget.dataset.href);
//     };
//
//     React.useEffect(() => {
//         fetch("http://frontend.karpovcourses.net/api/v2/ru/news/" + categoryId[category] || "")
//             .then(response => response.json())
//             .then(response => {
//                 setArticles(response);
//             })
//     }, [category]);
//
//     return (
//         <React.Fragment>
//             <Navigation onNavClick={onNavClick} currentCategory={category} className="header__navigation"/>
//             <main className="main">
//                 {articles.items.slice(0, 3).map((item) => {
//                     return (
//                         <MainArticle
//                             key={item.title}
//                             image={item.image}
//                             category={articles.categories.find(({id}) => item.category_id === id).name}
//                             title={item.title}
//                             description={item.description}
//                             source={articles.sources.find(({id}) => item.source_id === id).name}
//                         />
//                     )
//                 })}
//             </main>
//             <nav className="nav">
//                 {articles.items.slice(3, 12).map((item) => {
//                     return (
//                         <SmallArticle
//                             key={item.title}
//                             title={item.title}
//                             date={item.date}
//                             source={articles.sources.find(({id}) => item.source_id === id).name}
//                         />
//                     )
//                 })}
//             </nav>
//             <footer className="footer">
//                 <Navigation onNavClick={onNavClick} currentCategory={category} className="footer__navigation"/>
//                 <div className="footer__other">
//                     <h3 className="footer__attention">Сделано на Frontend курсе в <a className="footer__link" href="#">Karpov.Courses</a></h3>
//                     <h3 className="footer__license">© 2021</h3>
//                 </div>
//             </footer>
//         </React.Fragment>
//     )
// };
//
// ReactDOM.render(<App />, document.getElementById('root'));

const Users = () => {
    const [users, setUsers] = React.useState('');

    React.useEffect(() => {
        fetch("http://reqres.in/api/users")
            .then(response => response.json())
            .then(response => {
                setUsers(response);
            })
    });

    if (!users) {
        return (
            <section>
                <div>Loading</div>
            </section>
        );
    } else {
        return (
            <section>
                <ul>
                    {users.map((user) => (
                        <li>`${user.first_name} ${user.last_name}`</li>
                    ))}
                </ul>
            </section>
        )
    }
};

ReactDOM.render(<Users />, document.getElementById('root'));