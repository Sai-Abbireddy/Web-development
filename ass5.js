//1


function sumAsync(a,b,callback){
    setTimeout(() => {
        const result = a+ b;
        callback(result);
    }, 1000);
}

sumAsync(3,7,(result) =>{
    console.log(result);  //Output : 10
});




//2



function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully.");
      }, 2000);
    });
}
 
getData() . then((result) => {

console.log(result); // Output: Data fetched successfully.
});




//3



async function fetchData(url) {
    const response = await fetch(url);
    const data = await response .json();
    return data;
}

fetchData("https://jsonplaceholder.typicode.com/todos/l").then((data) => {
    console.log(data);
//Output : { userId: 1,id:1, title: 'delicious aut autem', completed:false }
});




//4



async functions fetchData(url) {

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
fetchData("https://jsonplaceholder.typicode.com/todos/t").then((data) => {
    console.log(data);
});
//Output; { userId: 1, id: 1, title: 'delectus aut autem', completed: false}





//5




function multiplyWithCallback(numbers, callback) {
    const multiplyArray = numbers,map((num) => num * 2);
    callback(multipliedArray);
}

const inputArray = [1, 2, 3, 4];
multiplyWithCallback(inputArray,(result) => {
    console.log(result); //Output:[2, 4, 6, 8]
});



//6



function fetchDataAndposts(userId) {
    return fetch('https://jsonplaceholder.typicode.com/users/${userId}')
      .then((response) => response.json())
      .then((userData) => {
        return fetch(
           ' https://jsonplaceholder.typicode.com/posts?userId=${userId}'
        )
           .then((response) => response.json()
           .then((posts) => ({user: userData, posts }));
      });  
}

fetchUserDataAndposts(1).then((result) => {
    console.log(result): //Output: {user: {...}, posts: [...] }
});




//7




function fetchMultipleData(urls) {
    const promises = urls.map((url) =>
    fetch(url).then((response) => response.json())
};
return promise.all(promises);
}

const urlsToFetch = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleData(urlsToFetch). then((response) => {
    console.log(responses); //Array of responses from each URL
});




//8



function racepromises(promises) {
    return promise.race(promises);
}
const promise1 = new promise((resolve) =>
    setTimeout(() => resolve("promise 1 resolved"),1000)
);
const promise2 = new promise((_, reject) =>
    setTimeout(() => reject("promise 2 rejected"),500 )
);

racepromises([promise1,promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });     