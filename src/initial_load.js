import homeLoad from './home'

const initalLoad = () => {
  document.body.prepend(loadHeader(),)
  document.body.append(...loadBackground())
  document.body.append(loadFooter())
  homeLoad()
}

function loadHeader() {
  const header = document.createElement('header')
  const fragment = document.createDocumentFragment()
  const tabs = ['Home', 'Menu', 'Contact']

  tabs.forEach( tab => {
    const link = document.createElement('a')
    link.textContent = tab
    fragment.appendChild(link)
  })
  header.appendChild(fragment)

  return header
}

function loadFooter() {
  const footer = document.createElement('footer')
  footer.textContent = "No Rights Reserved. For Educational Purposes Only."

  return footer
}

function loadBackground() {
  const background = document.createElement('img')
  const overlay = document.createElement('div')
  background.src = "../src/background.jpg"
  background.className = "background"
  overlay.className = "overlay"

  return [background, overlay]
}

export default initalLoad;
