import styles from "./canvasA.module.scss"
import React, { useState, useEffect } from 'react'

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

        window.addEventListener('resize', function(){
            cancelAnimationFrame(flowFieldAnimation)
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
            flowField.animate(0)
        })

        window.addEventListener('mousemove', function(e){
            mouse.x = e.x
            mouse.y = e.y
        })


    }, [])



    class FlowFieldEffect {
        #ctx
        #width
        #height

        constructor(ctx, width, height) {
            this.#ctx = ctx
            this.#ctx.strokeStyle = 'white'
            this.#ctx.lineWidth = 5
            this.#width = width
            this.#height = height
            this.angle = 0
            this.lastTime = 0
        }

        #draw(x, y) {
            const length = 300
            this.#ctx.beginPath()
            this.#ctx.moveTo(x, y)
            this.#ctx.lineTo(mouse.x, mouse.y)
            this.#ctx.stroke()
        }

        animate(timeStamp) {
            const deltaTime = timeStamp - this.lastTime
            this.lastTime = timeStamp
            this.angle += 0.1
            this.#ctx.clearRect(0, 0, this.#width, this.#height)
            this.#draw(this.#width/2, this.#height/2)

            flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))
        }


    }













    return (
        <div>
            <canvas id="canvas1"> </canvas>
        </div >
    )
}