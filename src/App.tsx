import { useState } from 'react'
import Controls from './components/Controls'
import MazeGrid from './components/MazeGrid'
import { DEFAULT_SIZE, type Method } from './config'

const RAMP = [
  'bg-zinc-100',
  'bg-blue-200',
  'bg-blue-400',
  'bg-blue-600',
  'bg-blue-800',
]

function Legend() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-1 text-xs text-zinc-500">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-[3px] bg-zinc-100" />
        <span>Start</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Nær start</span>
        <div className="flex overflow-hidden rounded-[3px]">
          {RAMP.map((color) => (
            <span key={color} className={`h-3 w-5 ${color}`} />
          ))}
        </div>
        <span>Nær slutt</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-[3px] bg-blue-600" />
        <span>Slutt</span>
      </div>
    </div>
  )
}

function App() {
  const [size, setSize] = useState(DEFAULT_SIZE)
  const [method, setMethod] = useState<Method>('recursive-backtracker')
  const [speed, setSpeed] = useState(40)
  const [runId, setRunId] = useState(0)

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-5xl flex-col gap-10 px-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight text-zinc-100">
          Maze Visualizer
        </h1>
        <p className="text-sm text-zinc-500">
          Visualiser generering og løsning av perfekte labyrinter.
        </p>
      </header>

      <main className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <Controls
          size={size}
          onSizeChange={setSize}
          method={method}
          onMethodChange={setMethod}
          speed={speed}
          onSpeedChange={setSpeed}
          onGenerate={() => setRunId((id) => id + 1)}
        />

        <section className="flex flex-1 flex-col gap-3">
          <MazeGrid key={runId} size={size} />
          <Legend />
        </section>
      </main>

      <footer className="mt-auto border-t border-zinc-900 pt-4 text-xs text-zinc-600">
        <a
          href="https://github.com/SanderHHansen/maze-visualizer"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-zinc-400"
        >
          github.com/SanderHHansen/maze-visualizer
        </a>
      </footer>
    </div>
  )
}

export default App
