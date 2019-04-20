export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text:text,
      done:false
    })
  },
  remove (state, {todo}) {
    state.list.splice(state.list.indexOf(todo),1)
  },
  toggle (state, todo) {
    console.log(state)
    todo.done = !todo.done
  }
}
