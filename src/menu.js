import Pho from './pho.jpg'
import Salad from './salad.jpg'
import SesameBalls from './sesame_balls.jpg'
import SpicyNoodle from './spicy.jpg'
import Sushi from './sushi.jpg'

function menuLoad() {
  document.getElementById('content').append(appyContent(), mainCourseContent())
}

function appyContent() {
  const section = document.createElement('div')
  section.className = "section-container"

  const title = document.createElement('h2')
  title.className = "section-title"
  title.textContent = "Appetizer"
  section.append(title, appetizerList())
  return section
}

function appetizerList() {
  const list = document.createElement('ul')

  const appys = {
    1: {
      dish: "Salad",
      imageSource: Salad,
      alternate: "Salad",
      description: "A great appy to share with friends!"
    },
    2: {
      dish: "Sesame Balls",
      imageSource: SesameBalls,
      alternate: "Sesame Balls",
      description: "The quintessential asian snack goes well with anything!"
    }
  }

  let appyNodes = []

  for (let i = 1; i < 3; i++) {
    const item = document.createElement('li')
    item.className = "card-container"

    const name = document.createElement('h3')
    name.textContent = appys[i].dish

    const image = document.createElement('img')
    image.className = "food-image"
    image.src = appys[i].imageSource
    image.alt = appys[i].alternate

    const desc = document.createElement('p')
    desc.className = "card-description"
    desc.textContent = appys[i].description

    item.append(name, image, desc)
    appyNodes.push(item)
  }

  list.append(...appyNodes)

  return list
}

function mainCourseContent() {
  const section = document.createElement('div')
  section.className = "section-container"

  const title = document.createElement('h2')
  title.className = "section-title"
  title.textContent = "Main Course"
  section.append(title, mainCourseList())
  return section
}

function mainCourseList() {
  const list = document.createElement('ul')

  const mainCourse = {
    1: {
      dish: "Vietnamese Pho",
      imageSource: Pho,
      alternate: "Pho",
      description: "Thinly sliced meat cooks to perfection in the clear broth. Yum!"
    },
    2: {
      dish: "Spicy Noodle Soup",
      imageSource: SpicyNoodle,
      alternate: "Spicy Noodle Soup",
      description: "A bowl of hot and spicy noodle soup is perfect in the cold winter!"
    },
    3: {
      dish: "Sushi Platter",
      imageSource: Sushi,
      alternate: "Sushi",
      description: "You can't go wrong with sushi!"
    }
  }

  let mainCourseNodes = []

  for (let i = 1; i < 4; i++) {
    const item = document.createElement('li')
    item.className = "card-container"

    const name = document.createElement('h3')
    name.textContent = mainCourse[i].dish

    const image = document.createElement('img')
    image.className = "food-image"
    image.src = mainCourse[i].imageSource
    image.alt = mainCourse[i].alternate

    const desc = document.createElement('p')
    desc.className = "card-description"
    desc.textContent = mainCourse[i].description

    item.append(name, image, desc)
    mainCourseNodes.push(item)
  }

  list.append(...mainCourseNodes)

  return list
}

export { menuLoad }