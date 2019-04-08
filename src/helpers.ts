export type Range = [number, number]

export type Blueprint = Map<number, number>

export const printRange = (range: Range) => `[${range.join(', ')})`

export const printList = (list: Range[]) => list.map(printRange).join(' ')

export const addRange = (blueprint: Blueprint, range: Range) =>
  blueprint
    .set(range[0], (blueprint.get(range[0]) || 0) + 1)
    .set(range[1], (blueprint.get(range[1]) || 0) - 1)

export const cutRange = (blueprint: Blueprint, range: Range) =>
  blueprint
    .set(range[0], (blueprint.get(range[0]) || 0) - 1)
    .set(range[1], (blueprint.get(range[1]) || 0) + 1)

export const listToBlueprint = (list: Range[]) =>
  list.reduce<Blueprint>(addRange, new Map())

export const blueprintToList = (blueprint: Blueprint) =>
  Array.from(blueprint.keys())
    .sort((a, b) => a - b)
    .reduce<{ list: Range[]; openCount: number; startItem: number }>(
      (acc, item) => {
        const increment = blueprint.get(item) || 0

        if (increment > 0) {
          if (acc.openCount === 0) acc.startItem = item
          acc.openCount += increment
        } else if (increment < 0) {
          acc.openCount += increment
          if (acc.openCount === 0) acc.list.push([acc.startItem, item])
        }

        return acc
      },
      { list: [], openCount: 0, startItem: 0 },
    ).list
