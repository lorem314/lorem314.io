const TYPE = { ADD: "ADD", REMOVE: "REMOVE", PAUSE: "PAUSE" }

const manager = {
  subscribe(callback) {
    this.callback = callback
  },
  add() {},
  remove() {},
}
