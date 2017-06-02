import { request } from '../helpers.js'

export const test = function() {
  return request({
    url: 'api/1.0'
  })
}
