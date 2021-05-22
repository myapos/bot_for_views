
if (location.href == "https://freevpn.one/") {
if (localStorage.server) {
  var matches = [];
  var searchEles = document.getElementById("servers").children;
  for(var i = 0; i < searchEles.length; i++) {
    searchEles[i].classList.remove("selected");
    if (searchEles[i].innerHTML == localStorage.server) {
      searchEles[i].classList.add("selected");
    }
  }
}


}

window.addEventListener("message", function(event) {
  // console.log('t');
  // console.log(event);

    // We only accept messages from ourselves
    if (event.source != window) {
        return;
    }

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        var data = { type: "FROM_EXTENSION", text: "connecting" };
        window.postMessage(data, "*");
        chrome.runtime.sendMessage({action: "connect",server:event.data.text}, function(response) {
          // console.log(response);
        });

    }
});



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    localStorage.server = request.server;


if(request.type == "FROM_EXTENSION" && (sender.id == "bhndbnphbbhplkjlkggacplnbmjojgdg" || sender.id == "jcbiifklmgnkppebelchllpdbnibihel")){

    if ((localStorage.server !== false && localStorage.server !== "false") && request.action == "server" && (window.location.hostname != "freevpn.one" && window.location.hostname != "www.freevpn.one")) {

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function()
      {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                          var distance = JSON.parse(xhr.responseText).timeleft;
                          if (distance > 0) {countdownTimeStart(distance*1000);}
                          else {document.getElementById("BVPNcountDown").innerHTML = "EXPIRED";}
              } else {
                  // console.log(xhr);
              }
          }
      };
      xhr.open("GET", 'https://www.ipunblock.com/timeleft.php', true);
      xhr.send();

      var connectedBox = document.createElement('div');
      connectedBox.innerHTML = "<img src='https://freevpn.one/icon-128.png' style='width:24px;float:left;margin-right:10px;'>Connected <b>"+localStorage.server+"</b><br><span id='BVPNcountDown' style='margin-left:34px;'>00:00:00 </span>&nbsp;<a href='https://www.freevpn.one/' target='_top' style='color:#58585b;font-weight:900; text-decoration:none; font-size:20px;'>&#x27F3;</a>";
      connectedBox.style.position = 'fixed';
  connectedBox.style.left = '0px';
  connectedBox.style.bottom = '0px';
  connectedBox.style.width = 'auto';
  connectedBox.style.borderRadius = '0px';
  connectedBox.style.textShadow = 'none';
  connectedBox.style.boxShadow = 'none';
  connectedBox.style.background = '#ffffff';
  connectedBox.style.lineHeight = '26px';
  connectedBox.style.border = 'none';
  connectedBox.style.padding = '20px';
  connectedBox.style.margin = '0px';
  connectedBox.style.color = '#58585b';
  connectedBox.style.fontSize = '16px';
  connectedBox.style.display = 'block';
  connectedBox.style.fontFamily = '"Open Sans", sans-serif';
  connectedBox.style.zIndex = '2147483647';


       document.getElementsByTagName('body')[0].appendChild(connectedBox);
    }


  var count = 0;
    if (request.action == "connected") {
      closeAllModals();
    }

}


    if (sender.url == "https://freevpn.one/") {
      // console.log('i');
    }
  }
);


function countdownTimeStart(distance){
var count = 0;

// Update the count down every 1 second
  myTimer = setInterval(countDo, 1000);
  function countDo() {
    distance = distance-1000;
    count++;


    if (count == 60) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                            distance = (JSON.parse(xhr.responseText).timeleft*1000);
                } else {

                }
            }
        };
        xhr.open("GET", 'https://www.ipunblock.com/timeleft.php', true);
        xhr.send();

        count = 0;

    }

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("BVPNcountDown").innerHTML = hours.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }) + ":"
    + minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }) + ":" + seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }) + " ";

    // If the count down is over, write some text
    if (distance < 1) {
        document.getElementById("BVPNcountDown").innerHTML = "EXPIRED";
    }
}
}



function closeAllModals() {

    // get modals
    const modals = document.getElementsByClassName('modal');

    // on every modal change state like in hidden modal
    for(let i=0; i<modals.length; i++) {
      modals[i].classList.remove('show');
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }

     // get modal backdrops
     const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove every modal backdrop
     for(let i=0; i<modalsBackdrops.length; i++) {
       document.body.removeChild(modalsBackdrops[i]);
     }
  }
