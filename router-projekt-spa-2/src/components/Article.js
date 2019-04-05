import React from 'react';

const Article = ({title, author, text}) => {
    const styles = {
        marginTop: '30px',
    }

    return (
        <article style={styles}>
            <h3
                style={{
                    marginBottom: '5px',
                    textTransform: 'uppercase'
            }}>
                {title}
            </h3>
            <span
                style={{
                    display: 'block',
                    fontSize: 12,
                    marginBottom: 10
            }}>
                {author}
            </span>
            <p
                style={{
                fontSize: 15,
            }}>
                {text}
            </p>
        </article>
    );
}

export default Article;