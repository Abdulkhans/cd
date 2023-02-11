// var arr = [
//     { name: "Attitude Girl", img1: "https://images.unsplash.comixlib=rb-1.2.1&q60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" },
//     { name: "Bad Girl", img1: "https://images.unsplash.comixlib=rb-1.2.1&q60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" },
//     { name: "Power of Girl", img1: "https://images.unsplash.comixlib=rb-1.2.1&q60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" },
// ];
// var clutter = "";
// arr.forEach(function(elem) {
//     clutter += ` <div id="main">
//     <div id="circals">
//         <div class="background"></div>
//         <img src="${elem}"alt="">
//     </div>
// </div>`
// });
// document.querySelector("#circals").innerHTML = `${clutter}`;

var arr = [
    { name: "Attitude Girl", img1: "https://images.unsplash.comixlib=rb-1.2.1&q60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" },
    { name: "Bad Girl", img1: "https://images.unsplash.comixlib=rb-1.2.1&q60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" },
    { name: "Power of Girl", img1: "https://images.unsplash.comixlib=rb-1.2.1&q60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" },
];
var clutter = "";
arr.forEach(function(elem) {
    clutter += ` <div id="card">
    <img src="${index}" alt="">
    <div id="head">
        <div id="circle">
            <img src="" alt="">
        </div>
        <h3></h3>
    </div>
</div>`
});
document.querySelector("#circals").innerHTML = `${clutter}`;