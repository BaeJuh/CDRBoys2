const Nav = (props) => {
    const { topics, onChangeMode } = props;
    const li = topics.map((topic) => {
        return <li key={topic.id}><a href={`/read/${topic.id}`} onClick={(e) => {
            e.preventDefault();
            // onChangeMode(e.target.id);
            onChangeMode(topic.id);
        }}>{topic.title}</a></li>
    });

    return (
        <nav>
            <ol>
                {li}
            </ol>
        </nav>
    );
}

export default Nav;