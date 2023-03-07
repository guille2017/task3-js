//javascript

// filter array

let filterarray = [];

let galleryarray = [
 
      
      {
        id: 2,
        "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "estimate":42756,
        "price":10
      },
      
      {
        id: 4,
        "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      
      {
        id: 6,
        "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        id: 7,
        "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      
     
      {
        id: 10,
        "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "estimate":2569800,
        "price":3
        },
      {
        id: 11,
        "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      
      
      {
        id: 14,
        "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]

    // create a funcion to show gallery
     showgallery(galleryarray);

    function showgallery(currarray){

        document.getElementById("card").innerHTML = "";

        for(var i=0;i<currarray.length;i++){
            document.getElementById("card").innerHTML += `
            <div class= "col-md-4 mt-3">
            <div class="card p-3 ps-5 pe-5">
                
                <img src="${currarray[i].image}" width="100%" height="320px"/>
                <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
                <h4 class="text-capitalize text-center">Category:${currarray[i].category}</h4>
                <p class="mt-2 ">${currarray[i].description}</p>
                
                <p class="mt-2 ">Precio $${currarray[i].price}</p>
                <a href="./Details.html" class="btn btn-primary w-100 mx-auto">ver mas...</a>
             
            </div>

            </div>
            
            `
        }
    }

    // live searching keyup input

    document.getElementById("myinput").addEventListener("keyup",function(){
        let text = document.getElementById("myinput").value;
    
         filterarray = galleryarray.filter(function(a){
            if(a.category.includes(text)){
                return a.category;
            }
         });
         if(this.value ==""){
            showgallery(galleryarray);
         }
         else{
            if(filterarray == ""){
                document.getElementById("para").style.display = 'block';
                document.getElementById("card").innerHTML = "";
            }
            else{
                showgallery(filterarray);
                document.getElementById("para").style.display = 'none';
            }
         }
    })