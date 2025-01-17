const Article = (props) => {
    const { title, body } = props;
    return (
        <article>
            <h2>{title}</h2>
            {body}
        </article>
    );
}

export default Article;