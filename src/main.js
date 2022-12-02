import './style.css'
import 'normalize.css'
import CONTROLS from './constants/controls'
import {
  drawConfig,
  setCurrentColor,
  setCurrentControl,
  setRadius
} from './scripts/drawConfig'
import handleOnDraw from './scripts/handleOnDraw'
import startUpCanvas from './scripts/startUpCanvas'
import handleStopDrawing from './scripts/handleStopDrawing'
import { handleRubber } from './scripts/drawControlsHandlers'

const $ = selector => document.querySelector(selector)

// drawing controlls
const $pencil = $('#pencil')
const $rubber = $('#rubber')
const $undo = $('#undo')
const $radius = $('#radius')
const $color = $('#color')
setRadius($radius.value)
setCurrentColor($color.value)

// canvas
export const $canvas = $('#canvas')
export const ctx = $canvas.getContext('2d')
startUpCanvas()

// controls events
$pencil.addEventListener('click', () => {
  setCurrentControl(CONTROLS.PENCIL)
})

$rubber.addEventListener('click', () => {
  setCurrentControl(CONTROLS.RUBBER)
})

$radius.addEventListener('change', e => {
  setRadius(e.target.value)
})

$color.addEventListener('change', e => {
  setCurrentColor(e.target.value)
})

$undo.addEventListener('click', () => {
  const currentControl = drawConfig.currentControl
  setCurrentControl(CONTROLS.RUBBER)
  const lastTrace = drawConfig.trace.pop()
  if (!lastTrace) {
    setCurrentControl(currentControl)
    return
  }
  lastTrace.forEach(({ x, y }) => {
    handleRubber({ ctx, x, y })
  })
  setCurrentControl(currentControl)
})

// start drawing
$canvas.addEventListener('mousedown', () => {
  $canvas.addEventListener('mousemove', handleOnDraw)
  $canvas.addEventListener('click', handleOnDraw)
})

$canvas.addEventListener('touchmove', evt => {
  evt.preventDefault()
  handleOnDraw(evt)
})

// stop drawing
// we need add this event on document because the user
// can release the button outside of canvas
$canvas.addEventListener('mouseleave', handleStopDrawing)
$canvas.addEventListener('mouseup', handleStopDrawing)
