const gallery = document.getElementById("gallery");

const photos = [];

for(let i=1;i<=20;i++){

photos.push({
number:i,
image:"images/"+i+".jpg"
});

}

let selected=[];

photos.forEach(photo=>{

gallery.innerHTML+=`

<div class="photo-card">

<img src="${photo.image}" alt="${photo.number}">

<div class="photo-info">

<div class="photo-number">

Photo #${photo.number}

</div>

<button class="select-btn"

onclick="toggleSelect(${photo.number},this)">

Select

</button>

</div>

</div>

`;

});

function toggleSelect(no,btn){

if(selected.includes(no)){

selected=selected.filter(x=>x!=no);

btn.innerHTML="Select";

btn.classList.remove("selected");

}else{

selected.push(no);

btn.innerHTML="Selected";

btn.classList.add("selected");

}

updateCounter();

}

function updateCounter(){

let c=document.getElementById("counter");

if(!c){

c=document.createElement("div");

c.id="counter";

document.body.appendChild(c);

}

c.innerHTML="Selected : "+selected.length;

}
