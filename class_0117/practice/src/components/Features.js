const Features = (props) => {
    const { setIsFeatures, selectedId, setContentTitle, data, setData } = props;

    const onCreate = () => {
        setContentTitle("Create");
        setIsFeatures(true);

        
    }
    const onUpdate = () => {
        setContentTitle("Update");
        setIsFeatures(true);
    }
    const onDelete = () => {
        setContentTitle("Delete");
    }
    return (
        <>
            <p><button onClick={(e) => { onCreate() }}>Create</button></p>
            {
                selectedId ?
                    <>
                        <p><button onClick={(e) => { onUpdate() }}>Update</button></p>
                        <p><button onClick={(e) => { onDelete() }}>Delete</button></p>
                    </> : null
            }
        </>
    );
}

export default Features;