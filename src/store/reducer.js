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

const reducersMap = {
  modal: {
    openModal: openModal,
    closeModal: closeModal,
  }
};
function reducer(state, action) {
  const {type, func, value} = action
  return reducersMap[type][func](state, value);
}

export default reducer;
