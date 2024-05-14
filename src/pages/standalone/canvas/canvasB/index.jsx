import NavBar from "components/navbar"
import styles from "./canvasB.module.scss"
import React, { useState, useEffect, Fragment } from 'react'

export default function CanvasB() {
  var canvas = document.getElementById('canvas1')
  var ctx = canvas ? canvas.getContext('2d') : undefined
  let flowField
  let flowFieldAnimation

  const mouse = {
    x: 0,
    y: 0,
  }

  const [line_length, setLineLength] = useState({ x: 20, y: 20 })
  const [canvas_size, setCanvasSize] = useState({ x: 1800, y: 750 })
  const [cell_Size, setCellSize] = useState(15)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })


  const [grad, setGrad] = useState({
    a: ["0.1", "#ff5c33"],
    b: ["0.2", "#ff66b3"],
    c: ["0.4", "#ccccff"],
    d: ["0.6", "#b3ffff"],
    e: ["0.8", "#80ff80"],
    f: ["0.9", "#ffff33"],
  })


  useEffect(() => {
    canvas = document.getElementById('canvas1')
    boilerPlate()

    // window.addEventListener('resize', function () {
    //   cancelAnimationFrame(flowFieldAnimation)
    //   canvas.width = window.innerWidth
    //   canvas.height = window.innerHeight
    //   flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    //   flowField.animate(0)
    // })

    window.addEventListener('mousemove', function (e) {
      mouse.x = e.x
      mouse.y = e.y
    })


  }, [])

  function boilerPlate() {
    ctx = canvas.getContext('2d')
    canvas.width = canvas_size.x
    canvas.height = canvas_size.y
    flowField = new FlowFieldEffect(ctx, canvas_size.x, canvas_size.y)
    flowField.drawLine()
  }

  function resetAnimation() {
    cancelAnimationFrame(flowFieldAnimation)
    canvas.width = canvas_size.x
    canvas.height = canvas_size.y
    flowField = new FlowFieldEffect(ctx, canvas_size.x, canvas_size.y)
    flowField.drawLine()
    console.log(canvas, ctx)
  }

  console.log('length:', line_length)
  console.log('cell_Size: ', cell_Size)
  console.log('canvas size: ', canvas_size)
  console.log('grad: ', grad)
  // console.log('canvas: ', canvas)

  class FlowFieldEffect {
    #ctx
    #width
    #height

    constructor(ctx, width, height) {
      this.#ctx = ctx;
      this.#ctx.lineWidth = 1;
      this.#width = width;
      this.#height = height;
      this.lastTime = 0;
      this.interval = 1000 / 60;
      this.timer = 0;
      // this.gradient;
      this.cellSize = cell_Size;
      this.#createGradient();
      this.#ctx.strokeStyle = this.gradient;
      this.radius = 0
      this.vr = 0.03
    }

    #createGradient() {
      this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height)
      this.gradient.addColorStop("0.1", "#ff5c33")
      this.gradient.addColorStop("0.2", "#ff66b3")
      this.gradient.addColorStop("0.4", "#ccccff")
      this.gradient.addColorStop("0.6", "#b3ffff")
      this.gradient.addColorStop("0.8", "#80ff80")
      this.gradient.addColorStop("0.9", "#ffff33")
    }

    drawLine() {
      this.#ctx.clearRect(0, 0, this.#width, this.#height)

      for (let y = 0; y <= this.#height; y += this.cellSize) {
        for (let x = 0; x <= this.#width; x += this.cellSize) {
          const angle = Math.cos(x) + Math.sin(y)
          this.#ctx.beginPath()
          this.#ctx.moveTo(x, y)
          this.#ctx.lineTo(x + angle * line_length.x, y + angle * line_length.y)
          this.#ctx.stroke()
        }
      }


      console.log('draw')
    }

    // animate() {
    //   this.#ctx.clearRect(0, 0, this.#width, this.#height)

    //   for (let y = 0; y <= this.#height; y += this.cellSize) {
    //     for (let x = 0; x <= this.#width; x += this.cellSize) {
    //       const angle = Math.cos(x) + Math.sin(y)
    //       this.#drawLine(angle, x, y)
    //     }
    //   }



    //   // flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))
    //   console.log('animate')
    // }


  }






  return (
    <Fragment>
      <NavBar />
      <div className={styles.main}>

        <h2>Canvas B</h2>

        <div>

          <div>
            <label htmlFor="">Line Length </label>
            <label htmlFor="">x: </label>
            <input type="number" value={line_length.x} onChange={(e) => { setLineLength({ x: parseInt(e.target.value), y: line_length.y }); resetAnimation() }} />
            <label htmlFor=""> y: </label>
            <input type="number" value={line_length.y} onChange={(e) => { setLineLength({ x: line_length.x, y: parseInt(e.target.value) }); resetAnimation() }} />
          </div>

          <div>
            <label htmlFor="">Canvas Size </label>
            <label htmlFor="">x: </label>
            <input type="number" value={canvas_size.x} onChange={(e) => { setCanvasSize({ x: parseInt(e.target.value), y: canvas_size.y }); resetAnimation() }} />
            <label htmlFor=""> y: </label>
            <input type="number" value={canvas_size.y} onChange={(e) => { setCanvasSize({ x: canvas_size.x, y: parseInt(e.target.value) }); resetAnimation() }} />
          </div>

          <div>
            <label htmlFor="">Cell Size </label>
            <input type="number" step="0.01" value={cell_Size} onChange={(e) => { setCellSize(parseFloat(e.target.value)); resetAnimation() }} />
            <input type="range" step="0.01" min="6" max="30" value={cell_Size} style={{ width: '1500px', margin: '5px' }} onChange={(e) => { setCellSize(parseFloat(e.target.value)); resetAnimation() }} />
          </div>


          <div>
            <button onClick={() => resetAnimation()}>Apply</button>
          </div>

          <div>
          </div>

        </div>

        <div className={styles.canvas_cont}>
          <p>Test</p>
          <canvas id="canvas1"> </canvas>
        </div>


      </div >
    </Fragment>
  )
}