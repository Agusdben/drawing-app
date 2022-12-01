let drawConfig = {
  currentColor: '#ffffff',
  radius: 5
}

const setCurrentColor = color => {
  drawConfig = {
    ...drawConfig,
    currentColor: color
  }
}

const setRadius = radius => {
  drawConfig = {
    ...drawConfig,
    radius
  }
}

export { drawConfig, setCurrentColor, setRadius }
