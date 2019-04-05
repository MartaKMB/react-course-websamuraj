import React from 'react';

import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quod possimus quas aperiam earum laborum, tempora officiis quos distinctio nesciunt exercitationem dolores! Dicta quae ut sint, soluta cupiditate nam quis",
    },
    {
        id: 2,
        title: "Czym jest pies",
        author: "Joanna Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quod possimus quas aperiam earum laborum, tempora officiis quos distinctio nesciunt exercitationem dolores! Dicta quae ut sint, soluta cupiditate nam quis",
    },
    {
        id: 3,
        title: "Przepis na lasagne",
        author: "Magda Gessler",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quod possimus quas aperiam earum laborum, tempora officiis quos distinctio nesciunt exercitationem dolores! Dicta quae ut sint, soluta cupiditate nam quis",
    }
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;