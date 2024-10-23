const png = ".png"
const jpeg = ".jpeg"
const DEFAULT_DIMENSIONS = [500]

export const ARTLIST = []

function addArtwork(img = "test/test1", dimensions = [400,400], ext = png) {
    ARTLIST.push({
        src: img,
        ext: ext,
        dimensions:dimensions
    })
}

addArtwork('ADHD!', DEFAULT_DIMENSIONS);
addArtwork('AHH', DEFAULT_DIMENSIONS);
addArtwork('And you say you have no fire powers right', DEFAULT_DIMENSIONS);
addArtwork('barakah sticcks', DEFAULT_DIMENSIONS)
addArtwork('clones', DEFAULT_DIMENSIONS)
addArtwork('failure', DEFAULT_DIMENSIONS)
addArtwork('GTA VI', DEFAULT_DIMENSIONS)
addArtwork('hey!', DEFAULT_DIMENSIONS)
addArtwork("romantic", DEFAULT_DIMENSIONS)
addArtwork("math", DEFAULT_DIMENSIONS)
addArtwork('Jump!', DEFAULT_DIMENSIONS)
addArtwork('lies', DEFAULT_DIMENSIONS)
addArtwork('Magic is a big secret', DEFAULT_DIMENSIONS)
addArtwork('mining with the boys', DEFAULT_DIMENSIONS, jpeg)
addArtwork('POWER', DEFAULT_DIMENSIONS)
addArtwork('pyromaniac', DEFAULT_DIMENSIONS)
addArtwork('rate my fit', DEFAULT_DIMENSIONS)
addArtwork('shootergame', DEFAULT_DIMENSIONS)
addArtwork('SnowingSeason', DEFAULT_DIMENSIONS)
addArtwork('The Mountains', DEFAULT_DIMENSIONS, jpeg)
addArtwork('the obs ', DEFAULT_DIMENSIONS)
addArtwork('what movie are you here to see', DEFAULT_DIMENSIONS)
addArtwork('what6x3', DEFAULT_DIMENSIONS)
addArtwork('whatyagotthere', DEFAULT_DIMENSIONS)
addArtwork('Wrestle', DEFAULT_DIMENSIONS)
addArtwork('yournotsick ', DEFAULT_DIMENSIONS)
