import { Ui } from "./ui.js";
import { Details } from "./details.js"

export class Games{
    constructor(){
        this.getGames("mmorpg");
        document.querySelectorAll(".menu a").forEach((link)=>{
            link.addEventListener("click",(e)=>{
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });

        this.ui = new Ui();
    }

    async getGames(category){
        const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "1377706987mshd30fc8c62f3529dp1e87d1jsn46c84045602e",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();

      this.ui.display(response);
      this.startEvent();

    }

    startEvent(){
        document.querySelectorAll(".card").forEach((item)=>{
            item.addEventListener("click",()=>{
                const id = item.dataset.id;
                this.displayDetails(id);
            });
        });
    }

    displayDetails(idGames){
        const details = new Details(idGames);
        document.querySelector(".header").classList.add('d-none')
        document.querySelector(".games").classList.add('d-none');
        document.querySelector(".details").classList.remove('d-none');
    }
}
