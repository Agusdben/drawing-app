export const handlePencil = ({ ctx, x, y }) => {
  ctx.beginPath()
  ctx.stroke()
  ctx.fill()
}

export const handleRubber = ({ ctx, x, y }) => {
  ctx.beginPath()
  ctx.fillStyle = '#ffffff'
  ctx.arc(x, y, 2, 0, 2 * Math.PI)
  ctx.fill()
}
