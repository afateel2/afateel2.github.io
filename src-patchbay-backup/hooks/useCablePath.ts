import { useEffect, useState, type RefObject } from 'react'

interface Point {
  x: number
  y: number
}

// Computes an SVG cubic-bezier path between two elements, relative to a container.
// Recalculates on selection change, resize, and font/layout load.
export function useCablePath(
  containerRef: RefObject<HTMLElement | null>,
  fromRef: RefObject<HTMLElement | null>,
  toRef: RefObject<HTMLElement | null>,
  deps: unknown[] = []
) {
  const [path, setPath] = useState('')

  useEffect(() => {
    function recalc() {
      const container = containerRef.current
      const from = fromRef.current
      const to = toRef.current
      if (!container || !from || !to) {
        setPath('')
        return
      }

      const cRect = container.getBoundingClientRect()
      const fRect = from.getBoundingClientRect()
      const tRect = to.getBoundingClientRect()

      const start: Point = {
        x: fRect.left + fRect.width / 2 - cRect.left,
        y: fRect.top + fRect.height / 2 - cRect.top,
      }
      const end: Point = {
        x: tRect.left + tRect.width / 2 - cRect.left,
        y: tRect.top + tRect.height / 2 - cRect.top,
      }

      // Cable sags slightly, like a real patch cable under gravity
      const midY = Math.max(start.y, end.y) + 48
      const c1 = { x: start.x + (end.x - start.x) * 0.35, y: midY }
      const c2 = { x: start.x + (end.x - start.x) * 0.65, y: midY }

      setPath(
        `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`
      )
    }

    recalc()
    window.addEventListener('resize', recalc)
    const t = setTimeout(recalc, 250) // catch late font/layout shifts
    return () => {
      window.removeEventListener('resize', recalc)
      clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return path
}
