// display data
// details

export class Ui {
  display(data) {
    let box = "";
    for (let i = 0; i < data.length; i++) {
      box += `<div class="col-md-3 col-sm-6">
            <div class="card p-2 bg-transparent">
              <div class="card-img">
                <img src=${data[i].thumbnail} alt="" class="w-100">
              </div>
              <div class="card-body">
                <div class="d-flex text-white justify-content-between mb-3">
                  <h5>${data[i].title}</h5>
                  <button>Free</button>
                </div>
                <p class="text-center text-white-50">${data[i].short_description.split(" ",8)}</p>
              </div>
              <footer class="card-footer d-flex justify-content-between">
               <span class="badge badge-color">${data[i].genre}</span>
               <span class="badge badge-color">${data[i].platform}</span>
              </footer>
            </div>
          </div>`;
    }
    document.getElementById("demo").innerHTML = box;
  }

  displayDetails(data){
    const content=`<div class="col-12">
            <div class=" header d-flex justify-content-between my-3">
              <h3>Details Game</h3>
              <button
                type="button"
                id="closeButtonId"
                class="btn-close btn-close-white"
                disabled
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <img src="${data.thumbnail}" alt="" class="w-100" />
          </div>
          <div class="details-body col-md-9 col-sm-6">
            <h2>Title: ${data.title}</h2>
            <span>Category: </span>
            <span class="special p-1">${data.genre}</span>
            <br><br>
            <span>Platform: </span>
            <span class="special p-1">${data.platform} </span>
            <br><br>
            <span>status: </span>
            <span class="special p-1">${data.status} </span>
            <br><br>
            <p>${data.description}</p>
            <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}>Show Game</a>
          </div>`;

          document.getElementById("details-section").innerHTML=content;
  }
}


