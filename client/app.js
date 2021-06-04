// Compliment Button
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (res) {
    const data = res.data;
    alert(data);
  });
};

// Fortune Button
document.getElementById("fortuneButton").onclick = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

// Color Button
document.getElementById("colorButton").onclick = (e) => {
  axios.get("http://localhost:4000/api/color/").then((res) => {
    const data = res.data;
    e.target.style.background = data;
  });
};

// Cat Button
document.getElementById("catButton").onclick = (e) => {
  axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
    const data = res.data[Math.floor(Math.random() * res.data.length)].text;

    const fact = document.getElementById("cat-fact");
    fact.innerHTML = "";
    fact.textContent = data;
  });
};

document.getElementById("activityButton").onclick = () => {
  axios.get("https://www.boredapi.com/api/activity").then((res) => {
    const { activity, participants, price } = res.data;
    const text = `[ activity ] - ${activity} \n[ # of people ] - ${participants}+ \n[ price ] - $${
      price * 10
    }`;
    alert(text);
  });
};
