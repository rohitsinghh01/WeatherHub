const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navbar = document.querySelector(".navbar");
const submitBtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city-name");
const tempstatus = document.getElementById("tempStatus");
const tempRealVal = document.getElementById("temp_real_val");
const dataHide = document.querySelector(".data_hide");
const day=document.getElementById('day')
const date=document.getElementById('date')

burger.addEventListener("click", () => {
  navbar.classList.toggle("h-nav-resp");
  nav.classList.toggle("v-nav-resp");
});

const getinfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Please write the name before you search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bbfb0fbb91567661acbf8468e9bb41d9`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      tempRealVal.innerText = arrData[0].main.temp;
      const tempMod = arrData[0].weather[0].main;

      if (tempMod == "Clear") {
        tempstatus.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMod == "Clouds") {
        tempstatus.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMod == "Rain") {
        tempstatus.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        tempstatus.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerText = `Please Enter Correct City Name`;
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getinfo);



const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentDate = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    return `${date} ${month}`
}

const getCurrentTime=()=>{
    var now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";

    if (hours > 11) {
      periods = "PM";
      if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    return `${hours}:${mins} ${periods}`
}

day.innerText=getCurrentDay() + " , "+  getCurrentDate()
date.innerText=getCurrentTime()