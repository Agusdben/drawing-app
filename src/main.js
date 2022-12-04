import './style.css'
import 'normalize.css'
import CONTROLS from './constants/controls'
import {
  setCurrentColor,
  setCurrentControl,
  setRadius
} from './scripts/drawConfig'
import handleOnDraw from './scripts/handleOnDraw'
import startUpCanvas from './scripts/startUpCanvas'
import handleStopDrawing from './scripts/handleStopDrawing'
import { handleUndo } from './scripts/drawControlsHandlers'

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

$undo.addEventListener('click', handleUndo)

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
$canvas.addEventListener('mouseleave', handleStopDrawing)
$canvas.addEventListener('mouseup', handleStopDrawing)
