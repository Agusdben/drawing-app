import { $canvas, ctx } from '../main'

export default () => {
  $canvas.width = $canvas.parentNode.offsetWidth
  $canvas.height = $canvas.parentNode.offsetHeight
  ctx.fillStyle = '#fff' // background
  ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}
