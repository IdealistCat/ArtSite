const png = ".png"
const jpeg = ".jpeg"

export const ARTLIST = []

function addArtwork(img = "test/test1", dimensions = [400,400], ext = png) {
    ARTLIST.push({
        src: img,
        ext: ext,
        dimensions:dimensions
    })
}

addArtwork('ADHD!', [200]);
addArtwork('AHH', [200]);
addArtwork('And you say you have no fire powers right', [200]);
addArtwork('barakah sticcks', [200])
addArtwork('clones', [200])
addArtwork('failure', [200])
addArtwork('GTA VI', [200])
addArtwork('hey!', [200])
addArtwork("romantic", [200])
addArtwork("math", [200])
addArtwork('Jump!', [200])
addArtwork('lies', [200])
addArtwork('Magic is a big secret', [200])
addArtwork('mining with the boys', [200], jpeg)
addArtwork('POWER', [200])
addArtwork('pyromaniac', [200])
addArtwork('rate my fit', [200])
addArtwork('shootergame', [200])
addArtwork('SnowingSeason', [200])
addArtwork('The Mountains', [200], jpeg)
addArtwork('the obs ', [200])
addArtwork('what movie are you here to see', [200])
addArtwork('what6x3', [200])
addArtwork('whatyagotthere', [200])
addArtwork('Wrestle', [200])
addArtwork('yournotsick ', [200])
