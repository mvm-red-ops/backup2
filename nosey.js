const { Console } = require('console');
const https = require('https');

https.get('https://dishnation.com/xumotv/?showID=1&playlistID=5afde755986e57000132e774', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log('end')
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


function execute() {
    // Divorce Court 
    var url = "https://dishnation.com/xumotv/?showID=1&playlistID=5afde755986e57000132e774";
    main(url, 1);
  
    // Dish Nation
    var url2 = "https://dishnation.com/xumotv/?showID=0&playlistID=5adfbad898561e0001d39c6d";
    main(url2, 2); 
    
    // Divorce Court 2021
    var url3 = "https://partner-delivery.mediacloud.fox/partner/feed/xumo/SER000947QXEP";
    main(url3, 3);
    
    // Ana Polo
    var url4 = "https://partner-delivery.mediacloud.fox/partner/feed/xumo/SER001335TZDH";
    main(url4, 4);
  }

