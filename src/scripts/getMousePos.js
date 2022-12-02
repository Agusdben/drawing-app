export default (el, evt) => {
  const rect = el.getBoundingClientRect()
  const clientX = evt?.clientX || evt?.touches[0]?.clientX || undefined
  const clientY = evt?.clientY || evt?.touches[0]?.clientY || undefined
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  }
}
