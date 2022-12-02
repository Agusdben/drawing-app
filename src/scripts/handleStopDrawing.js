import { $canvas } from '../main'
import { saveLastTraceBuffered } from './drawConfig'
import handleOnDraw from './handleOnDraw'

export default () => {
  $canvas.removeEventListener('mousemove', handleOnDraw)
  setTimeout(() => {
    console.log('saved')
    saveLastTraceBuffered()
  }, 10)
}
