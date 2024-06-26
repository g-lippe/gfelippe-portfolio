import NavBar from "components/navbar"
import styles from "./canvasA.module.scss"
import React, { useState, useEffect, Fragment } from 'react'

export default function CanvasA() {
  let canvas
  let ctx
  let flowField
  let flowFieldAnimation

  const mouse = {
    x: 0,
    y: 0,
  }


  useEffect(() => {
    canvas = document.getElementById('canvas1')
    ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate(0)

    window.addEventListener('resize', function () {
      cancelAnimationFrame(flowFieldAnimation)
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
      flowField.animate(0)
    })

    window.addEventListener('mousemove', function (e) {
      mouse.x = e.x
      mouse.y = e.y
    })


  }, [])



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
      this.cellSize = 10;
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

    #drawLine(angle, x, y) {
      const length = 15
      this.#ctx.beginPath()
      this.#ctx.moveTo(x, y)
      this.#ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
      this.#ctx.stroke()
    }

    animate(timeStamp) {
      const deltaTime = timeStamp - this.lastTime
      this.lastTime = timeStamp
      if (this.timer > this.interval) {
        this.#ctx.clearRect(0, 0, this.#width, this.#height)
        this.radius += this.vr;

        if (this.radius > 8 || this.radius < -8) this.vr *= -1


        for (let y = 0; y <= this.#height; y += this.cellSize) {
          for (let x = 0; x <= this.#width; x += this.cellSize) {
            const angle = (Math.cos(x * 0.015) + Math.sin(y * 0.015)) * this.radius
            this.#drawLine(angle, x, y)
          }
        }

        this.timer = 0
      } else {
        this.timer += deltaTime
      }

      flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))
    }


  }













  return (
    <Fragment>
      <NavBar />
      <div>
        <canvas id="canvas1"> </canvas>
      </div >
    </Fragment>
  )
}