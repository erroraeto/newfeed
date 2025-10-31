const categoryId = {
  index: 0,
  sport: 2,
  technologies: 1,
  karpov: 6,
  fashion: 3
};
const categoryNames = {
  index: 'Главная',
  fashion: 'Мода',
  technologies: 'Технологии',
  sport: 'Спорт',
  karpov: 'Карпов'
};
const Navigation = ({
  onNavClick,
  currentCategory,
  className = ""
}) => {
  return /*#__PURE__*/React.createElement("nav", {
    className: `navigation ${className}`
  }, /*#__PURE__*/React.createElement("img", {
    className: "navigation__logo",
    src: "images/logo.svg",
    alt: "Logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "navigation__tags"
  }, ["index", "fashion", "technologies", "sport", "karpov"].map(tag => {
    return /*#__PURE__*/React.createElement("a", {
      onClick: onNavClick,
      key: tag,
      className: `navigation__tag ${currentCategory === tag ? "active-link" : ""}`,
      "data-href": tag,
      href: "#"
    }, categoryNames[tag]);
  })));
};
const MainArticle = ({
  image,
  title,
  category,
  description,
  source
}) => {
  return /*#__PURE__*/React.createElement("article", {
    className: "main-article__item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "main-article__item-img",
    src: image
  }), /*#__PURE__*/React.createElement("div", {
    className: "main-article__item-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "main-article__item-tag"
  }, category), /*#__PURE__*/React.createElement("h2", {
    className: "main-article__item-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "main-article__item-text"
  }, description), /*#__PURE__*/React.createElement("a", {
    className: "main-article__item-source"
  }, source)));
};
const SmallArticle = ({
  title,
  date,
  source
}) => {
  return /*#__PURE__*/React.createElement("article", {
    className: "small-article__item"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "small-article__item-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "small-article__item-info"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "small-article__item-data"
  }, new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric'
  })), /*#__PURE__*/React.createElement("a", {
    className: "small-article__item-source",
    href: "#"
  }, source)));
};
const App = () => {
  const [category, setCategory] = React.useState("index");
  const [articles, setArticles] = React.useState({
    items: [],
    categories: [],
    sources: []
  });
  const onNavClick = e => {
    e.preventDefault();
    setCategory(e.currentTarget.dataset.href);
  };
  React.useEffect(() => {
    fetch("http://frontend.karpovcourses.net/api/v2/ru/news/" + categoryId[category] || "").then(response => response.json()).then(response => {
      setArticles(response);
    });
  }, [category]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navigation, {
    onNavClick: onNavClick,
    currentCategory: category,
    className: "header__navigation"
  }), /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, articles.items.slice(0, 3).map(item => {
    return /*#__PURE__*/React.createElement(MainArticle, {
      key: item.title,
      image: item.image,
      category: articles.categories.find(({
        id
      }) => item.category_id === id).name,
      title: item.title,
      description: item.description,
      source: articles.sources.find(({
        id
      }) => item.source_id === id).name
    });
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, articles.items.slice(3, 12).map(item => {
    return /*#__PURE__*/React.createElement(SmallArticle, {
      key: item.title,
      title: item.title,
      date: item.date,
      source: articles.sources.find(({
        id
      }) => item.source_id === id).name
    });
  })), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement(Navigation, {
    onNavClick: onNavClick,
    currentCategory: category,
    className: "footer__navigation"
  }), /*#__PURE__*/React.createElement("div", {
    className: "footer__other"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "footer__attention"
  }, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u043D\u0430 Frontend \u043A\u0443\u0440\u0441\u0435 \u0432 ", /*#__PURE__*/React.createElement("a", {
    className: "footer__link",
    href: "#"
  }, "Karpov.Courses")), /*#__PURE__*/React.createElement("h3", {
    className: "footer__license"
  }, "\xA9 2021"))));
};
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
