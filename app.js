
var twitch = function(){
var twitchRequest = new XMLHttpRequest();
twitchRequest.open("GET", "https://api.twitch.tv/kraken/search/streams?q=starcraft");
twitchRequest.onload = function(e) {
  if (twitchRequest.readyState === 4 && twitchRequest.status === 200){
    var res = twitchRequest.response;
    var txt = JSON.parse(twitchRequest.responseText);
    // console.log('res',res)
    console.log('txt', txt)
  } else {
    console.error(twitchRequest.statusText)
  }
};
twitchRequest.send();
  
};

//   var twitchQuery = new XMLHttpRequest();
//   twitchQuery.open("GET", queryPath, true);
//   twitchQuery.onload = function (e) {
//     if (twitchQuery.readyState === 4 && twitchQuery.status === 200) {
//       streamData = JSON.parse(twitchQuery.responseText);
//     } else {
//       console.error(twitchQuery.statusText);
//     }
//   };
//   twitchQuery.send();
// };
