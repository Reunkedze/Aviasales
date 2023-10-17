export const filterOnChange = (number) => ({ type: 'FILTER_ON_CHANGE', number })

export const changeWay = (way) => ({ type: 'CHANGE_WAY', way })

const addSearchId = (searchId) => ({ type: 'ADD_SEARCH_ID', searchId })

export const onAsyncAddSearchId = () => {
    return (dispatch) => {
        fetch('https://aviasales-test-api.kata.academy/search').then(r => r.json()).then(d => dispatch(addSearchId(d.searchId)))
    }
}

const addTickets = (tickets) => ({ type: 'ADD_TICKETS', tickets })

export const loadTickets = (searchId) => {
    return (dispatch) => {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
            .then(r => r.ok ? r.json() : { tickets: [], stop: false })
            .then(d => {
                console.log(d)
                dispatch(addTickets(d))
            })
            .catch((e) => console.log(e))
    }
}

export const showMoreTickets = () => ({ type: 'SHOW_MORE_TICKETS' })
