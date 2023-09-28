import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://back-ciel-again-nrhau7z2v-thalitaleandras-projects.vercel.app/',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance