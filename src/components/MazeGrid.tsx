import { MAX_SIZE, MIN_SIZE } from '../config'

type MazeGridProps = {
  size: number
}

function MazeGrid({ size }: MazeGridProps) {
  const safeSize = Math.min(MAX_SIZE, Math.max(MIN_SIZE, Math.floor(size)))
  const cellCount = safeSize * safeSize

  return (
    <div
      className="grid w-full gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800"
      style={{ gridTemplateColumns: `repeat(${safeSize}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cellCount }, (_, index) => {
        const isStart = index === 0
        const isFinish = index === cellCount - 1

        return (
          <div
            key={index}
            className={[
              'aspect-square',
              isStart
                ? 'bg-zinc-100'
                : isFinish
                  ? 'bg-blue-600'
                  : 'bg-zinc-950',
            ].join(' ')}
          />
        )
      })}
    </div>
  )
}

export default MazeGrid
