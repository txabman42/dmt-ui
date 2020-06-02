import axios from 'axios'

const SERVER_URL = 'https://euw1.api.riotgames.com'
const API_KEY = 'RGAPI-cf23fb00-2a55-44b2-b8f7-8b4403102f1a'

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000,
  credentials: 'same-origin',
  headers: {
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Riot-Token': API_KEY
  },
  params: {
    'X-Riot-Token': API_KEY
  }
})

export default {
  async execute (method, resource, data, config) {
    return instance({
      method: method,
      url: resource,
      data,
      ...config
    })
  },

  getSummonerInfo (sumName) {
    return this.execute('GET', 'lol/summoner/v4/summoners/by-name/' + sumName + '/', null, {
      transformResource: [function (data) {
        return data ? JSON.parse(data) : data
      }]
    })
  }
}
