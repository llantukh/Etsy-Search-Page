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

function neededData (allData){
  var image = allData.Images[0].url_75x75;
  var price = allData.price;
  var storeName = allData.Shop.shop_name;
  var storeURL = allData.Shop.shop_url;
  var itemName = allData.title;
  var itemURL = allData.url;

  return {
    image: image,
    price: price,
    store: storeName,
    storeLink: storeURL,
    item: itemName,
    itemLink: itemURL
  };
};
