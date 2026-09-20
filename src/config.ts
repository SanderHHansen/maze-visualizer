export const MIN_SIZE = 4
export const MAX_SIZE = 80
export const DEFAULT_SIZE = 20

export const METHODS = [
  { value: 'recursive-backtracker', label: 'Recursive Backtracker' },
  { value: 'prims', label: "Prim's Algorithm" },
] as const

export type Method = (typeof METHODS)[number]['value']
