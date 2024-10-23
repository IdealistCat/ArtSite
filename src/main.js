import { ARTLIST } from "./global_artlist.js";


for (let index = 0; index < ARTLIST.length; index++) {
    const artwork = ARTLIST[index];

    var img = document.createElement("img")
    img.src = "./art/"+artwork.src+artwork.ext
    if (artwork.dimensions[0]>0) img.width=artwork.dimensions[0];
    if (artwork.dimensions[1]>0) img.height=artwork.dimensions[1];
    
    var para = document.createElement('p');
    para.innerHTML = artwork.src+artwork.ext;
    
    document.getElementById('art').append(img)
    document.getElementById('art').append(para)

    document.getElementById('art').append(document.createElement('br'))
    
}