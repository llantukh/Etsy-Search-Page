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

function pullData (allData){
  var dataArray = [];
  for (var i= 0; i< allData.results.length; i++){

  var itemName = allData.results[i].title;
  var itemURL = allData.results[i].url;
  var price = allData.results[i].price;
  var image = allData.results[i].Images[0].url_fullxfull;
  var storeName = allData.results[i].Shop.shop_name;
  var storeURL = allData.results[i].Shop.url;


// get the data structured how you want it on the page:

  var resultHTML = `
    <div class = "singleItem">
      <img src = ${image}>
      <span class = "item"> <a href = ${itemURL}>${itemName} </a></span>
      <span class = "store"> <a href = ${storeURL}>${storeName} </a></span>
      <span class = "price"> $${price} <span>
    </div>`;

// get the data onto the page:

    $(".searchResults").append(resultHTML);

}
};


// run the function we just wrote.
 
pullData(allData);
