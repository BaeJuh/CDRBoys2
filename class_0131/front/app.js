const getData = async () => {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();

    console.log(data);
}

// getData();

const setData = async () => {
    const res = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: "3",
            title: "Test",
            body: "I am testing!",
            userId: 1,
        }),
    });
    const data = await res.json();

    getData();
    console.log(data);
}

// setData();

const putData = async () => {
    const res = await fetch("http://localhost:3000/data/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: "96ed",
            title: "put",
            body: "I am put testing!",
            userId: null,
        }),
    });
    const data = await res.json();
    getData();
}

// putData();

const deleteData = async () => {
    await fetch("http://localhost:3000/data/1", {
        method: "PUT",});
    getData();
}
// deleteData();

const patchData = async () => {
    const res = await fetch("http://localhost:3000/data/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "JH",
            new: "able?"
        }),
    });
    const data = await res.json();
    getData();
}

patchData();
