
let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v)=>{
    return v.json();
}).then((contests)=>{
    console.log(contests);
    ihtml = "";
    for(item in contests){
        console.log(contests[item]);
        ihtml += `
            <div class="card mx-2 my-2" style="width: 22rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
                    <p class="card-text">In 24 Hours? ${contests[item].in_24_hours}</p>
                    <p>Starts at: ${contests[item].start_time}</p>
                    <p>Ends at: ${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Page</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml;
});

// Temporary solution
// function searchfunc(){
//     let word = document.getElementById("idSearch").value;
//     word = word.toLowerCase();
//     contests[item].site = contests[item].site.toLowerCase();
//     if(word == contests[item].site){
//         // working on search in the page for match keyword
//     }
// }
