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


// 1.) This function should pull the data we need:

function pullData (allData) {
// for (var i= 0; i< allData.length; i++)
//   {
  var itemName = allData.results[0].title;
  var itemURL = allData.results[0].url;
  var price = allData.results[0].price;
  var image = allData.results[0].Images[0].url_75x75;
  var storeName = allData.results[0].Shop.shop_name;
  var storeURL = allData.results[0].Shop.url;

  return {
    item: itemName,
    itemLink: itemURL,
    price: price,
    image: image,
    store: storeName,
    storeLink: storeURL,
  };
  // console.log(allData);
// };
};


// var space = `
//   <div>
//     <ul>
//       <li><img src = ""</li>
//
//     </ul>
//   </div>
//
//
// `

// function neededData (pullData){
//   var list = [];
//   for (count = 0; count < allData.results.length; count++){
//   var item = pullData[count];
//
//   };
// };
