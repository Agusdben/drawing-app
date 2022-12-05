import { $canvas } from '../main'
import { saveLastTraceBuffered } from './drawConfig'
import handleOnDraw from './handleOnDraw'

export default () => {
  $canvas.removeEventListener('mousemove', handleOnDraw)
  $canvas.removeEventListener('touchmove', handleOnDraw)
  setTimeout(() => {
    console.log('saved')
    saveLastTraceBuffered()
  }, 10)
}
