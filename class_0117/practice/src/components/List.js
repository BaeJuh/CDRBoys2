const List = (props) => {
    const {dataSet, setSelectedId} = props;
    return (
        <ol>
            {dataSet.map((data) => {
                return <li key={data["id"]} onClick={() => setSelectedId(data["id"])}>
                    {data["title"]}
                </li>;
            })}
        </ol>
    )
}

export default List;