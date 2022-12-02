import { drawConfig } from './drawConfig'

export const handlePencil = ({ ctx, x, y }) => {
  ctx.beginPath()
  ctx.fillStyle = drawConfig.currentColor
  ctx.arc(x, y, drawConfig.radius, 0, 2 * Math.PI)
  ctx.fill()
}

export const handleRubber = ({ ctx, x, y }) => {
  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.arc(x, y, drawConfig.radius, 0, 2 * Math.PI)
  ctx.fill()
}
