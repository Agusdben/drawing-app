import {
  drawConfig,
  setConfig,
  setCurrentColor,
  setCurrentControl,
  setRadius
} from './drawConfig'
import { $canvas, ctx } from '../main'
import { draw } from './handleOnDraw'

export const handlePencil = ({ x, y }) => {
  ctx.beginPath()
  ctx.fillStyle = drawConfig.currentColor
  ctx.arc(x, y, drawConfig.radius, 0, 2 * Math.PI)
  ctx.fill()
}

export const handleRubber = ({ x, y }) => {
  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.arc(x, y, drawConfig.radius, 0, 2 * Math.PI)
  ctx.fill()
}

export const handleUndo = () => {
  const currentConfig = drawConfig
  const deletedTrace = drawConfig.trace.pop() // remove last trace
  if (!deletedTrace) {
    return
  }
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, $canvas.width, $canvas.height)
  drawConfig.trace.forEach(trace => {
    trace.forEach(({ x, y, radius, tool, color }) => {
      setRadius(radius)
      setCurrentColor(color)
      setCurrentControl(tool)
      draw({ x, y })
    })
  }) // nested for 🙄
  setConfig(currentConfig)
}
