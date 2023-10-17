import Header from "../Header";
import Main from "../Main";
import classes from "./App.module.scss"
import { connect } from 'react-redux'
import * as actions from '../../actions'

function App({ searchId, tickets, onAsyncAddSearchId }) {
  if (!searchId) onAsyncAddSearchId()
  return (
    <div className={classes['app']}>
      <Header />
      <Main />
    </div>
  );
}

const mapStateToProps = (state) => ({ searchId: state.searchId, tickets: state.tickets })

export default connect(mapStateToProps, actions)(App);
