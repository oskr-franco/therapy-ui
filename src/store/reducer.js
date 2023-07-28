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

const addAlert = (state, { id, type, message }) => {
  const alert = {
    id,
    type,
    message,
  }
  return {
    ...state,
    alerts: [...state.alerts, alert],
  }
}

const removeAlert = (state, id) => {
  const alerts = state.alerts.filter(alert => alert.id !== id);
  return {
    ...state,
    alerts,
  }
}

const reducersMap = {
  modal: {
    openModal: openModal,
    closeModal: closeModal,
  },
  alerts: {
    addAlert: addAlert,
    removeAlert: removeAlert,
  }
};

function reducer(state, action) {
  const { type, func, value } = action;
  return reducersMap[type][func](state, value);
}

export default reducer;
