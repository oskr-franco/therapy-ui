const openModal = (state, {component ,componentProps }) => {
  const modal = {
    isOpen: true,
    component,
    componentProps,
  }
  return {
    ...state,
    modal,
  }
}

const closeModal = (state) => {
  const modal = {
    isOpen: false,
    component: '',
    componentProps: {},

  }
  return {
    ...state,
    modal,
  }
}

const loadExercises = (state, exercises) => {
  return {
    ...state,
    exercises,
  }
}

const addExercise = (state, exercise) => {
  const exercises = [...state.exercises, exercise];
  return {
    ...state,
    exercises,
  }
}

const reducersMap = {
  modal: {
    openModal: openModal,
    closeModal: closeModal,
  },
  exercises: {
    loadExercises: loadExercises,
    addExercise: addExercise,
  }
};

function reducer(state, action) {
  const {type, func, value} = action
  return reducersMap[type][func](state, value);
}

export default reducer;
