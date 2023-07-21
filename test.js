let esiJS = require('./class')
const {cache} = require('./src/util/util')

async function myFunc() {
    let client = new esiJS({})
    let regions = await client.universe.regions.regions()

    console.log(regions)
    console.log(cache.cache)
}
myFunc().catch(e => console.error(e))