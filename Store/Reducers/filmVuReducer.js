const initialState = { filmsVus: [] }
function toggleFilmVu(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FILM_VU':
    const filmVuIndex = state.filmsVus.findIndex(item => item.id === action.value.id);
    if (filmVuIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          filmsVus: state.filmsVus.filter( (item, index) => index !== filmVuIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          filmsVus: [...state.filmsVus, action.value]
        }
      }
    return nextState || state
    default:
    return state
  }
}
export default toggleFilmVu
