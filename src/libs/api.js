import axios from 'axios'
import Router from 'next/router'
import config from '../config'

/**
 * a handler for request data to backend service on server side rendering
 * @param {object} requestConfigInit
 */
export const serverApiRequest = async requestConfigInit => {
  const { method, path, pathOption, params, data, secure } = requestConfigInit
  let headers = {}
  if (secure && secure !== 'optional') {
    headers = {
      Authorization: `Token ${secure}`
    }
  }
  let result = []
  if (!path) return result
  const url = `${config.mainApiEndpoint}${path}`
  const requestConfig = {
    method: method || 'get',
    url,
    headers,
    params,
    secure,
    data,
    pathOption
  }
  const response = await axios.request(requestConfig)
  console.info('Response from serverApiRequest')
  response.status === 401 && process.browser && Router.push('/')
  result = { data: response.data }
  return result
}
