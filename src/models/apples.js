import Immutable from 'immutable'

export const START_ANIMATION = 'START_ANIMATION'

const initialState = {
  treeClass: '',
  apples: [
    { key: 1, className: 'apple1' },
    { key: 2, className: 'apple2' },
    { key: 3, className: 'apple3' },
    { key: 4, className: 'apple4' },
    { key: 5, className: 'apple5' },
    { key: 6, className: 'apple6' },
    { key: 7, className: 'apple7' },
    { key: 8, className: 'apple8' },
    { key: 9, className: 'apple9' },
    { key: 10, className: 'apple10' },
    { key: 11, className: 'apple11' },
    { key: 12, className: 'apple12' }
  ]
}

export default function apples (state = initialState, action) {
  switch (action.type) {
    case START_ANIMATION: {
      return Immutable.fromJS(state)
        .merge({
          treeClass: action.treeClass,
          apples: action.apples
        })
        .toJS()
    }

    default:
      return state
  }
}

export const actions = {
  startAnimation (treeClass, apples) {
    return { type: START_ANIMATION, treeClass, apples }
  }
}
