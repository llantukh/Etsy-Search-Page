// What am I trying to do? I need to pull certain data from the items.js
// and generate the html to get it on the page. What data do I actually need?
//
// -Image
// -Price
// -Store Name
// -Store link
// -Item Name
// -Item link
//
// 1.) I will write a function that pulls this data for me.
// 2.) Then I will write a for loop to generate the html to get the info on the page.


// pull the data we need:

// you can do this instead of the for loop:
// data.map(function(item){
//   `<div>${item.title}</div>`
// })
// then you would enter item.title or whatever into the resultHtml. his way is cleaner.

function pullData (data){
  for (var i= 0; i< data.results.length; i++){

  var itemName = data.results[i].title;
  var itemURL = data.results[i].url;
  var price = data.results[i].price;
  var image = data.results[i].Images[0].url_fullxfull;
  var storeName = data.results[i].Shop.shop_name;
  var storeURL = data.results[i].Shop.url;


// get the data structured how you want it on the page:

  var resultHTML = `
    <div class = "singleItem">
    <div class="mouseOver">
      <span><img class = "heart" src = "assets/heart.png"><span>
      <span><img class = "hamburger" src = "assets/hamburger.png"><span>
    </div>
      <a class = "realLink1" href = ${itemURL}>
      <img class = "resultImage" src = ${image}>
      <div>
        <a class = "realLink1" href = ${itemURL}>
        ${itemName}
        </a>
         <div class = "finalDetails">
          <span class = "store"> <a class = "realLink" href = ${storeURL}>${storeName} </a></span>
          <span class = "price"> $${price} <span>
        </div>
      </div>
    </div>`;

// get the data onto the page:

    $(".searchResults").append(resultHTML);

}
};


// run the function we just wrote.

pullData(allData);
