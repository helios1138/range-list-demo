import {
  addRange,
  blueprintToList,
  listToBlueprint,
  printList,
  Range,
  cutRange,
} from './helpers'

export class RangeList {
  constructor(public list: Range[] = []) {}

  add(range: Range) {
    this.list = blueprintToList(addRange(listToBlueprint(this.list), range))
  }

  remove(range: Range) {
    this.list = blueprintToList(cutRange(listToBlueprint(this.list), range))
  }

  print() {
    console.log(printList(this.list))
  }
}
