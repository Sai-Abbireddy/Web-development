//1

function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log('Click count : ${count}');
    };
}
 
let  ClickCounter = createCounter();

//Simulate button Clicks
ClickCounter(); //Output : Click count : 1
ClickCounter(); //Output : Click count : 2





//2


let order = {
     orderId:"123456",
    productName:"Laptop",
    quantity : 2
};


//  Without destructing 
console.log("Without Destructuring :");
console.log("order ID:", order.orderID);
console.log("product Name:", order. productName);
console.log("Quantity:",order.quantity);

//With destructing
console.log("\nWith Destructuring:");
let {orderId, productName,quantity } = order;
console.log ("order ID:", orderId);
console.log("product Name:", productName);
console.log("Quantity:", quantity);


//3



function shoppingCart(){
    const cartItems = [];
    return {

      getCartItems:function(){
        return cartItems;
      }
    };
}

 const cart = shoppingCart();

 console.log('Cart Items:', cart.getCartItems());

 //OUTPUT: Cart Items:[]



 

 //4



 function shoppingCart() {
    const cartItems = [];


    function itemIndexInCart(productId) {
        return cartItems.findIndex(item =>item.id === productId);
    }

    return{
        addItem:function (product) {
            const itemIndex = itemIndexInCart(product .id);

        if(itemIndex !==-1) {
            CartItems[itemIndex]. quantity++;
        }else{
            cartItems.push({id: product.id, name:product.name,price:product.price,quantity : 1});
        }
      },
      getCartItems:function(){
       return cartItems;
      }
    };
}

const cart = shoppingCart();

console.log('Cart Items:', cart.getCartItems());
//OUTPUT : Cart Items:[]


const product1 = {id: 1, name:'product 1', price:10};
const product2 = {id: 2, name:'product 2', price:20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items:', cart.getCartItems());


//OUTPUT:

//Cart Items: [
//   {id: 1, name: 'product 1',price: 10, quantity: 2},
//   {id: 2, name: 'product 2', price: 20, quantity: 1}
// ]





//5




function shoppingCart() {
    const cartItems = [];

    function itemIndexInCart(productId) {
        return cartItems.findIndex(item =>item.id === productId);
    }
    return {
        addItem:function(product) {
          const itemIndex = itemIndexInCart(product.id);

          if (itemIndex ! ==-1) {
             cartItems[itemIndex].quantity++;
          }else{
            cartItems.push({id:product.id,name:product.name,name,price:product.price,quantity: 1});
        }
    },
    removeItem:function(productId) {
        const indexToRemove = itemInCart(productId);

        if(index ToRemove !==-1){
            cartItems.splice(indexToRemove,1);
        }
    },
    getCartItems : function() {
        return cartItems;
    } 
  };
}

 constcart = shoppingCart();

 console.log('Cart Items:', cart.getCartItems());
 //OUTPUT : Cart Items: []

 const product1 = {id:1,name:'product 1', price:10};
 const product2 = {id:2,name:'product 2', price:20};

 cart.addItem(product1);
 cart.addItem(product2);
 cart.addItem(product1);


 console.log('Cart Items:', cart.getCartItems());
 //OUTPUT:

 //Cart Items: [
//   {id: 1, name: 'product 1', price: 10, quantity: 2},
//   {id: 2, name: 'product 2', price: 20, quantity: 1}
// ]
 cart.removeItem(2):

 console.log('Cart Items', cart.getCartItems());

 //OUTPUT: cart Items: [ { id: 1, name: 'product 1', price::10, quantity: 2}]




 //6



 //Task 1: Create playlist 
function createplaylist(playlistName) {
  letplaylist = [];


return{
    addsong:function(songName,artist) {
    playlistName.push({songName,artist });
    },
    listSongs:function(){
        if (playlistName.length===0) {
          console.log('${playlistName} playlist is empty,');
        }else{
          console.log('${playlistName} playlist: ${playlist.map(song =>'${song.songName} by ${song.artist}'),join(', ')}');
    }
  }
 };
}


//Task 2: Add Song to playlist
function addsong(playlist, songName,artist) {
  playlist.addsong(songName,artist);
}


//Task 3: List Songs in playlist
function listSongs(playlist) {
  playlist.listSongs();
}


const myPlaylist = createplaylist("My Favourite");

addsong(myPlaylist, "Song1", "Artist1");
addsong(myPlaylist, "Song2", "Artist2");
addsong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist); //Output: My Favourite playlist: Song1 by Artist1,song2 by Artist2, song3 by Artist3