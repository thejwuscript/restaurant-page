import 'normalize.css'
import './style.css'
import initalLoad from './initial_load'
import homeLoad from './home'
import { menuLoad } from './menu'

initalLoad();

document.querySelector('header').querySelectorAll('a')[0].addEventListener('click', () => {
  document.getElementById('content').innerHTML = ''
  homeLoad()
})
document.querySelector('header').querySelectorAll('a')[1].addEventListener('click', () => {
  document.getElementById('content').innerHTML = ''
  menuLoad()
})
