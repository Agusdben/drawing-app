import CONTROLS from '../constants/controls'
import { $canvas, ctx } from '../main'
import { drawConfig, saveTraceBuffer } from './drawConfig'
import { handlePencil, handleRubber } from './drawControlsHandlers'
import getMousePos from './getMousePos'

export const draw = ({ x, y }) => {
  switch (drawConfig.currentControl) {
    case CONTROLS.PENCIL:
      handlePencil({ ctx, x, y })
      return
    case CONTROLS.RUBBER:
      handleRubber({ ctx, x, y })
  }
}

export default evt => {
  const { x, y } = getMousePos($canvas, evt)
  saveTraceBuffer({ x, y })
  draw({ x, y })
}
