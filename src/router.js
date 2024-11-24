import Navigo from 'navigo'
import { Home } from './pages/Home'
import { CV } from './pages/CV'

const router = new Navigo('/')

export const initRouter = () => {
  router
    .on('/', () => {
      document.querySelector('#app').innerHTML = Home()
    })
    .on('/cv', () => {
      document.querySelector('#app').innerHTML = CV()
    })
    .resolve()

  return router
}