import classes from './Ticket.module.scss'
import { format, add, minutesToHours } from 'date-fns'

function Ticket({ info }) {
    return info ?
        <div className={classes['ticket']}>
            <div className={classes['ticket_header']}>
                <span className={classes['ticket_price']}>{info.price}р</span>
                <img src={`https://pics.avs.io/99/36/${info.carrier}.png`} alt='airline logo' />
            </div>
            <div className={classes['ticket_info']}>
                <div>
                    <div className={classes['ticket_grey']}>{info.segments[0].origin} - {info.segments[0].destination}</div>
                    <div>{format(new Date(info.segments[0].date), "HH':'mm'")} - {format(add(new Date(info.segments[0].date), { minutes: info.segments[0].duration }), "HH':'mm'")}</div>
                </div>
                <div>
                    <div className={classes['ticket_grey']}>В пути</div>
                    <div>{minutesToHours(info.segments[0].duration)}ч {info.segments[0].duration % 60}м</div>
                </div>
                <div>
                    {
                        info.segments[0].stops.length === 0 ? <div>
                            <div className={classes['ticket_grey']}>Без пересадок</div>
                        </div> : null
                    }
                    {
                        info.segments[0].stops.length !== 0 ? <div>
                            <div className={classes['ticket_grey']}>{info.segments[0].stops.length} пересадк{info.segments[0].stops.length === 1 ? 'а' : 'и'}</div>
                            <div>{info.segments[0].stops.join(', ')}</div>
                        </div> : null
                    }
                </div>
                <div>
                    <div className={classes['ticket_grey']}>{info.segments[1].origin} - {info.segments[1].destination}</div>
                    <div>{format(new Date(info.segments[1].date), "HH':'mm'")} - {format(add(new Date(info.segments[1].date), { minutes: info.segments[1].duration }), "HH':'mm'")}</div>
                </div>
                <div>
                    <div className={classes['ticket_grey']}>В пути</div>
                    <div>{minutesToHours(info.segments[1].duration)}ч {info.segments[1].duration % 60}м</div>
                </div>
                <div>
                    {
                        info.segments[1].stops.length === 0 ? <div>
                            <div className={classes['ticket_grey']}>Без пересадок</div>
                        </div> : null
                    }
                    {
                        info.segments[1].stops.length !== 0 ? <div>
                            <div className={classes['ticket_grey']}>{info.segments[1].stops.length} пересадк{info.segments[1].stops.length === 1 ? 'а' : 'и'}</div>
                            <div>{info.segments[1].stops.join(', ')}</div>
                        </div> : null
                    }
                </div>
            </div>
        </div> : null
}

export default Ticket
