const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

  inicializar() {
      /*
          el metodo bind se utiliza para asignar el contexto a tratar
          en este caso para seguir manteniendo la clase Juego
      */
    this.elegirColor = this.elegirColor.bind(this)
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
        celeste,
        violeta,
        naranja,
        verde
    }
  }

  generarSecuencia() {
      this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel() {
      this.iluminarSecuencia()
      this.agregarEventosClick()
  }

  transformarNumeroAColor(num) {
    switch (num) {
        case 0:
            return 'celeste'
        case 1:
            return 'violeta'
        case 2:
            return 'naranja'
        case 3:
            return 'verde'
    }
  }

  iluminarSecuencia() {
      for (let i = 0; i < this.nivel; i++) {
          const color = this.transformarNumeroAColor(this.secuencia[i])
          console.log(color);
          setTimeout(() => this.iluminarColor(color), 1000 * i)
      }
  }

  iluminarColor(color) {
      this.colores[color].classList.add('light')
      setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color) {
      this.colores[color].classList.remove('light')
  }

  agregarEventosClick() {
      this.colores.celeste.addEventListener('click', this.elegirColor)

      this.colores.celeste.addEventListener('click', this.elegirColor)

      this.colores.celeste.addEventListener('click', this.elegirColor)

      this.colores.celeste.addEventListener('click', this.elegirColor)
  }

  elegirColor(ev) {
      console.log(this)
  }

}

function empezarJuego() {
    window.juego = new Juego()
}
