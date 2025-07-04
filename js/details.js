import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    document.getElementById("closeButtonId").addEventListener("click", ()=>{
      document.querySelector(".header").classList.remove('d-none') 
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.getDetails(id);
  }

  getDetails(idGames) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1377706987mshd30fc8c62f3529dp1e87d1jsn46c84045602e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
         .catch((err) => console.error(err))
}
}
