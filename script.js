// Задание №1

class Logo {
  constructor(url) {
    this.top = 0
    this.left = 0
    this.width = 200
    this.imgUrl = url
    this.html = null
  }

  init() {
    this.html = document.createElement('img')
    this.html.setAttribute('src', this.imgUrl)
    this.html.setAttribute('alt', 'image')
    this.render()
    const bodyColor = document.querySelector('body')
    bodyColor.style.backgroundColor = 'black'
    bodyColor.append(this.html)
  }

  render() {
    this.html.style.position = 'fixed'
    this.html.style.width = this.width + 'px'
    this.html.style.marginTop = this.top + 'px'
    this.html.style.marginLeft = this.left + 'px'
  }

  moveUp() {
    this.top = this.top - 20
    this.render()

  }
  moveDown() {
    this.top = this.top + 20
    this.render()
  }

  moveLeft() {
    this.left = this.left - 20
    this.render()
  }

  moveRight() {
    this.left = this.left + 20
    this.render()
  }
}

const imgUrl = 'https://bit.ly/2tcDito'
var mfLogotip = new Logo(imgUrl)
console.log(mfLogotip)

mfLogotip.init()

mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveRight()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()


// Задание №2

class Circle {
  constructor(width, color) {
    this.width = width
    this.color = color

    this.render()
  }

  #creteTemplate() {
    const area = this.#calcArea()

    return `
      <div  class="p-4 text-white"
        style =" border-radius: 50%;
        width: ${this.width}px;
        height: ${this.width}px;
        background-color: ${this.color};">
        S=${area}px2
      </div>
    `
  }

  #calcArea() {
    return ((this.width * this.width) * 3.14) / 4
  }

  render() {
    const template = this.#creteTemplate()
    document.body.innerHTML += template
  }
}

const circle1 = new Circle(150, 'red')
const circle2 = new Circle(300, 'blue')
new Circle(600, 'gray')
