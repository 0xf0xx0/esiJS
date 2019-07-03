module.exports = status

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function status() {
let returningData;

    await axios.get(`${link}status/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })

        return returningData;
}