var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
//script.crossOrigin = 'anonymous';
script.src = "https://dynamic.xkcd.com/api-0/jsonp/comic/"+Math.floor((Math.random() * 1740) + 1)+"?callback=dataloaded";
head.appendChild(script);

function dataloaded(x) {
    console.log(x)
    var img = document.createElement("img");
    img.src = x.img
    var p = document.createElement("p")
    p.className = "alt"
    p.appendChild(document.createTextNode(x.title))
    $("body").append(p)
    $("body").append(img);
}