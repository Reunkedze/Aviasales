import ShowButton from '../ShowButton'
import Ticket from '../Ticket/Ticket'
import Ways from '../Ways'
import classes from './Tickets.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Spin } from 'antd'
import { useCallback, useEffect } from 'react'

function Tickets({ searchId, filters, tickets, loadTickets, ticketsCounter, way }) {
    useEffect(() => {
        if (!tickets.stop) loadTickets(searchId)
    }, [tickets])

    const ticketsComponents = []

    let filteredTickets = [...tickets.tickets]

    let stopsCounts = []
    filters.slice(1).filter((f, i) => f ? stopsCounts.push(i + 1) : null)

    if (!filters[0]) {
        filteredTickets = [...filteredTickets.filter((t) => stopsCounts.indexOf(t.segments[0].stops.length) !== -1 || stopsCounts.indexOf(t.segments[1].stops.length) !== -1)]
    }

    function compareNumbers(a, b) {
        return a.price - b.price;
    }

    function compareDurations(a, b) {
        return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
    }

    function compareDurationsAndPrice(a, b) {
        return ((a.segments[0].duration + a.segments[1].duration) * 31 + a.price) - ((b.segments[0].duration + b.segments[1].duration) * 31 + b.price)
    }

    if (way === 0) {
        filteredTickets.sort(compareNumbers)
    }

    if (way === 1) {
        filteredTickets.sort(compareDurations)
    }

    if (way === 2) {
        filteredTickets.sort(compareDurationsAndPrice)
    }

    for (let i = 0; i < ticketsCounter; i++) {
        ticketsComponents.push(<Ticket info={filteredTickets[i]} key={i} />)
    }

    return (
        <section className={classes['main_tickets']}>
            <Ways />
            <div className={classes['spinner-container']}>
                {tickets.stop ? null : <Spin className={classes['spinner']} />}
            </div>
            {ticketsComponents}
            <ShowButton />
        </section>
    )
}

const mapDispatchToProps = (state) => {
    return { searchId: state.searchId, filters: state.filters, tickets: state.tickets, ticketsCounter: state.ticketsCounter, way: state.way }
}

export default connect(mapDispatchToProps, actions)(Tickets)
