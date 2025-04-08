const ROTATE_CYCLE = 2;
const API_KEY = "412e20d92030bf157d7b8e8e05c5d379";

const imageSetter = (index) => {
    const rotateImages = [
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/09/25/18/04/orange-flowers-6655548_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/10/28/17/22/dolomites-2897602_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/10/25/12/28/iceland-1768744_1280.jpg"
    ];

    const imageArea = document.getElementById("imageArea");
    imageArea.style.backgroundImage = `url(${rotateImages[index]})`;
}

const sentenceSetter = (index) => {
    const rotateSentence = ["Hello1", "Hello2", "Hello3", "Hello4"];
    const contentTitle = document.getElementById("contentTitle");
    contentTitle.innerText = rotateSentence[index];
}

const weatherSetter = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&lang=kr&appid=${API_KEY}`);
    const weatherData = await response.json();

    const { weather: [{main: weatherType}], main: {temp: weatherTemp} } = weatherData;
    // console.log(weatherType, weatherTemp);
    const weatherArea = document.getElementById("weatherArea");
    weatherArea.innerHTML = `<p>${weatherType}</p><p>${weatherTemp.toFixed(1)} 도</p>`;
}

const run = () => {
    let runtime = 0;

    weatherSetter();
    imageSetter(runtime);
    sentenceSetter(runtime);

    setInterval(() => {
        runtime ++;
        imageSetter(runtime%4);
        sentenceSetter(runtime%4);
    }, ROTATE_CYCLE * 1000);
}
run();