import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: baseURL,
  timeout: 8000
})
