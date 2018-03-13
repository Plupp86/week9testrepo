function movieFunc() {

    let title = document.getElementById("MovieTitle");
    title.innerHTML = "Inception";
    
    let poster = document.getElementById("MoviePoster")
    poster.setAttribute("src","http://dizw242ufxqut.cloudfront.net/images/product/movie/dvd/image0/inception-7528624-frntl.jpg")
    
    let infotext = document.getElementById("MoviePlot");
    infotext.innerHTML = "A very meta movie aout dreams within dreams. And then there was a whole bunch of shooting, not really sure how that fit into the picture.";
    
    let listOfActors = document.getElementById("ListOfActors")
    
    let leo = document.createElement("li");
    leo.innerHTML = "Leonardo DiCaprio";
    listOfActors.appendChild(leo);

    let ellen = document.createElement("li");
    ellen.innerHTML = "Ellen Page";
    listOfActors.appendChild(ellen);

    let ken = document.createElement("li");
    ken.innerHTML = "Ken Watanabe";
    listOfActors.appendChild(ken);
}

var savedRating = 0;

$(document).on('click','.star',function(){
    savedRating = this.getAttribute("value");
    changeRating(this.getAttribute("value"));
    });

    $(document).on('mouseover','.star',function(){
        changeRating(this.getAttribute("value"));
        });
    
    $(document).on('mouseout','.star',function(){
        changeRating(savedRating);
        });
        







function changeRating(rating){
    rating = Number(rating);

    for (i = 1 ; i < 6 ; i++) //Set all stars to empty
    {
        $("#star"+i).removeClass("filled");
    }

    for (i = 1 ; i < rating +1 ; i++) //Fill selected stars
    {
        $("#star"+i).addClass("filled");
    }
}