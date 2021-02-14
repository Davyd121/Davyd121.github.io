const keyboards = [
    {
    action: true,
    photo:"z1-2.jpg",
    name: "Клавіатура дротова Logitech G209 Prodigy USB",
    reviews: 204,
    price: 1399,
    },
    {
    action: false,
    photo:"z1-4.jpg",
    name: "Клавіатура Conguar Vantar",
    reviews: 6,
    price: 1286,
    },
    {
        action: true,
        photo:"z1-2.jpg",
        name: "Клавіатура дротова Logitech G209 Prodigy USB",
        reviews: 204,
        price: 1800,
        },
        {
        action: false,
        photo:"z1-4.jpg",
        name: "Клавіатура Conguar Vantar",
        reviews: 6,
        price: 900,
        },

        
         
        


];

let max = keyboards[0].price;

for( i = 0; i < keyboards.length; i++ ){

    if( keyboards[i].price > max ){
        max = keyboards[i].price;
    }
}
console.log(max);
let cards_text=``;

const products = document.getElementById('products');

for( i = 0; i < keyboards.length ; i++ ){
    let isAction ='';

    let point=0;
    point+=keyboards[i].reviews/2;
    
    let res=max - keyboards[i].price;
    if(keyboards[i].action){
        isAction=`<div class="action">Акція</div>`;
        point+=100
    }   
    point += res;
    cards_text +=
`
<div class="card">
 <h1> бали:${point}</h1>
<div class="header">
    ${isAction}   
    
</div>

<div class="card_image">
    <img src="${keyboards[i].photo}" alt="">
</div>

<div class="card_info">
    <div class="name">
    ${keyboards[i].name}
    </div>
    
    <div class="reviews">
    ${keyboards[i].reviews} відгуки
    </div>
    
    <div class="price">
    ${keyboards[i].price}&#8372;
    </div>
</div> 
</div>   
    `;
}
products.innerHTML=cards_text

