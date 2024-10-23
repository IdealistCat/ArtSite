import { ARTLIST } from "./global_artlist.js";

var p = document.createElement("img")
p.src = ARTLIST[0].src + ARTLIST[0].ext
p.width = ARTLIST[0].dimensions[0]
p.height = ARTLIST[0].dimensions[1]
document.body.append(p)