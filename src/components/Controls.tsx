import { useState } from 'react'
import { MAX_SIZE, METHODS, MIN_SIZE, type Method } from '../config'

type ControlsProps = {
  size: number
  onSizeChange: (size: number) => void
  method: Method
  onMethodChange: (method: Method) => void
  speed: number
  onSpeedChange: (speed: number) => void
  onGenerate: () => void
}

const fieldLabel = 'text-xs font-medium uppercase tracking-wider text-zinc-500'
const fieldInput =
  'w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 outline-none transition-colors focus:border-blue-500'

function Controls({
  size,
  onSizeChange,
  method,
  onMethodChange,
  speed,
  onSpeedChange,
  onGenerate,
}: ControlsProps) {
  const [sizeText, setSizeText] = useState(() => String(size))

  const commitSize = () => {
    const parsed = Number.parseInt(sizeText, 10)
    const next = Number.isNaN(parsed)
      ? size
      : Math.min(MAX_SIZE, Math.max(MIN_SIZE, parsed))
    setSizeText(String(next))
    onSizeChange(next)
  }

  return (
    <aside className="flex w-full shrink-0 flex-col gap-6 rounded-lg border border-zinc-800 bg-zinc-900/60 p-5 lg:w-64">
      <div className="flex flex-col gap-2">
        <label className={fieldLabel} htmlFor="size">
          Størrelse
        </label>
        <input
          id="size"
          type="number"
          inputMode="numeric"
          min={MIN_SIZE}
          max={MAX_SIZE}
          value={sizeText}
          onChange={(event) => setSizeText(event.target.value)}
          onBlur={commitSize}
          onKeyDown={(event) => {
            if (event.key === 'Enter') commitSize()
          }}
          className={fieldInput}
        />
        <p className="text-xs text-zinc-600">
          {MIN_SIZE}–{MAX_SIZE} ruter ({size}×{size})
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className={fieldLabel} htmlFor="method">
          Metode
        </label>
        <select
          id="method"
          value={method}
          onChange={(event) => onMethodChange(event.target.value as Method)}
          className={fieldInput}
        >
          {METHODS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <label className={fieldLabel} htmlFor="speed">
            Hastighet
          </label>
          <span className="text-xs tabular-nums text-zinc-500">{speed}</span>
        </div>
        <input
          id="speed"
          type="range"
          min={1}
          max={100}
          value={speed}
          onChange={(event) => onSpeedChange(Number(event.target.value))}
          className="w-full accent-blue-500"
        />
      </div>

      <button
        type="button"
        onClick={onGenerate}
        className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        Generer
      </button>
    </aside>
  )
}

export default Controls
