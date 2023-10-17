const initialState = {
    searchId: '',
    filters: [true, true, true, true, true],
    way: 0,
    tickets: { tickets: [], stop: false },
    ticketsCounter: 5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_ON_CHANGE':
            const newFilters = [...state.filters.slice(0, action.number), !state.filters[action.number], ...state.filters.slice(action.number + 1)]
            if (action.number === 0) {
                return state.filters[0] === false ? { ...state, filters: [...state.filters.map(() => true)] } : { ...state, filters: [...state.filters.map(() => false)], ticketsCounter: 5 }
            } else if (newFilters.slice(1).findIndex((i) => i === false) === -1) {
                return { ...state, filters: [true, ...newFilters.slice(1)], ticketsCounter: 5 }
            } else if (newFilters.slice(1).findIndex((i) => i === false) !== -1) {
                return { ...state, filters: [false, ...newFilters.slice(1)], ticketsCounter: 5 }
            }
            return { ...state, filters: [...state.filters.slice(0, action.number), !state.filters[action.number], ...state.filters.slice(action.number + 1)], ticketsCounter: 5 }
        case 'CHANGE_WAY':
            return { ...state, way: action.way, ticketsCounter: 5 }
        case 'ADD_SEARCH_ID':
            return { ...state, searchId: action.searchId }
        case 'ADD_TICKETS':
            return { ...state, tickets: { tickets: [...state.tickets.tickets, ...action.tickets.tickets], stop: action.tickets.stop } }
        case 'SHOW_MORE_TICKETS':
            return { ...state, ticketsCounter: state.ticketsCounter + 5 }
        default:
            return state
    }
}

export default reducer