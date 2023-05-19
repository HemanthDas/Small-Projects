let refresh = function () {
  let arr = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  let image1 = document.getElementById("image1");
  let image2 = document.getElementById("image2");
  let rand1 = Math.floor(Math.random() * arr.length);
  let rand2 = Math.floor(Math.random() * arr.length);
  image1.src = "../Components/" + arr[rand1];
  image2.src = "../Components/" + arr[rand2];
  let result = rand1 > rand2 ? "Player 1 Won" : "Player 2 Won";
  document.getElementById("result").innerHTML = `<em>${result}</em>`;
};
