import { AppState } from '../AppState'
import { House } from '../models/House'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    AppState.houses = res.data.map(h => new House(h))
    logger.log(res.data)
  }

  async getHouseById(houseId) {
    AppState.house = null
    const res = await api.get(`api/houses/${houseId}`)
    logger.log('hello from gethousebyId', houseId)
    AppState.house = new House(res.data)
  }

  async createHouse(house) {
    const res = await api.post('api/houses', house)
    AppState.houses.push(new House(res.data))
    logger.log(res.data)
  }

  async removeHouse(houseId) {
    await api.delete(`api/houses/${houseId}`)
    AppState.house = null
    AppState.houses.filter(h => h.id !== houseId)
  }
}
export const housesService = new HousesService()
