const axios = require('axios')
const { getSettings } = require('../utility')
const throwError = require('./throwError')
const path = require('path')
const {version} = require('../../package.json')

/**
 *  subUrl -> remaining url part specific to the function call
 * 
 *  post -> state if the request is of type post, will make a get request otherwise
 * 
 *  body -> data to pass to the request body for requests of type post
 * 
 *  query -> aditional query parameters
 */
function makeRequest ({ subUrl, body, query, requestType = 'get', needsAuth}) {
    const { link, dataSource, authToken, language } = getSettings()
    const test = /\/(?=\/)(?<!https:\/)/g
    let headers = {
        'accept': 'application/json',
        'Accept-Language': `${language}`,
        'Content-Type': 'application/json',
        'user-agent': `esiJSv${version}`
    }
    let request
    let fullURL = `${link}${subUrl}/?datasource=${dataSource}`
    
    // If query params are defined, add them to the end of the full url
    if (query) {
        // Cicle each query entry and add to the full url in the form '&key=value'
        // Because all request already have '?datasource' no need to manage the ? on the first query param
        Object.keys(query).forEach(queryKey => {
            // query params undefined or empty, or array of length 0
            if (query[queryKey] === undefined || query[queryKey] === '') {
                return
            }
            if (query[queryKey].length && query[queryKey].length === 0) {
                return
            }
            fullURL += `&${queryKey}=${query[queryKey]}`
        })
    }
    // Add in the language
    if (language !== '') {
        fullURL += `&language=${language.split('/').join('-')}`
    }
    // Add in the project name if specified, else default to 'esiJS {version}'
    if (projectName && projectName !== '') {
        headers['application-name'] = projectName
    } else {
        headers['application-name'] = `esiJSv${version}`
    }
    if (needsAuth && authToken !== '') {
        // Include both the headers and the query just in case one or the other fails
        headers['authorization'] = `Bearer: ${authToken}`
        fullURL += `&token=${authToken}`  
    }
    if (needsAuth && authToken === '') {
        throw throwError(`You used a authenicated function without a token. Please set a token in the 'esi.json' file in ${path.join(__dirname, '../')}.`, `NO_AUTH_TOKEN`)
    }

    // Check the URL for extra forward slashes and delete them
    fullURL = fullURL.replace(test, '')

    // Check for request type

    switch(requestType) {
        case 'get': {
            request = axios.get(fullURL, {
                headers
            })
            break;
        }
        case 'post': {
            request = axios.post(fullURL, body, {
                headers
            })
            break;
        }
        case 'put': {
            request = axios.put(fullURL, body, {
                headers
            })
            break;
        }
        case 'delete': {
            request = axios.delete(fullURL, body, {
                headers
            })
            break;
        }
        default: {
            throw throwError(`ESIJS ERROR: Endpoint function not configured properly. Please report this error on the GitHub repository. Error:\n${e}`)
        }
    }

    // Return the promise request, pre set the 'then' and 'catch' clauses
    return request
        .then(response => {
           let data = {    
                headers: response.headers,
                data: response.data
            }

            return data
        }).catch(error => {
            const esiError = error.response.data.error
            const url = fullURL.split('&token')[0]
            throw throwError(esiError, `ESI_ERROR`, url)
        })
}

module.exports = makeRequest