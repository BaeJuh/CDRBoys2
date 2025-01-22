const timer = setTimeout(() => {
    const day = new Date();

    const year = day.getFullYear();
    const month = day.getMonth();
    const date = day.getDate();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();
    const am_pm = hour >= 12 ? "PM" : "AM";

    hour %= 12;
    hour = hour || 12;

    minute = minute < 10 ? "0" + minute : minute;
    seconde = second < 10 ? "0" + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${am_pm}`;

    console.log(now);
}, 1000);