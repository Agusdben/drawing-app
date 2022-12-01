import './style.css'
import 'normalize.css'
import CONTROLS from './constants/controlls'
import getMousePos from './scripts/getMousePos'
import { handlePencil, handleRubber } from './scripts/drawControlsHandlers'

const $ = selector => document.querySelector(selector)

const handleOnDraw = evt => {
  const { x, y } = getMousePos($canvas, evt)
  switch (currentControl) {
    case CONTROLS.PENCIL:
      handlePencil({ ctx, x, y })
      return
    case CONTROLS.RUBBER:
      handleRubber({ ctx, x, y })
  }
}

// canvas
const $canvas = $('#canvas')
const ctx = $canvas.getContext('2d')

// drawing controlls
const $pencil = $('#pencil')
const $rubber = $('#rubber')
let currentControl = CONTROLS.PENCIL

// events
$pencil.addEventListener('click', () => {
  currentControl = CONTROLS.PENCIL
  console.log(currentControl)
})

$rubber.addEventListener('click', () => {
  currentControl = CONTROLS.RUBBER
  console.log(currentControl)
})

// start drawing
$canvas.addEventListener('mousedown', () => {
  $canvas.addEventListener('mousemove', handleOnDraw)
  $canvas.addEventListener('click', handleOnDraw)
})

// stop drawing
document.addEventListener('mouseup', () => {
  // we need add this event on document because the user can release the button outside of canvas
  $canvas.removeEventListener('mousemove', handleOnDraw)
})
