const png = ".png"

export const ARTLIST = []

function addArtwork(img = "test/test1", dimensions = [400,400], ext = png) {
    ARTLIST.push({
        src: img,
        ext: ext,
        dimensions:dimensions
    })
}

addArtwork('ADHD!');