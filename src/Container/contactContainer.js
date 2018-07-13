import { connect } from 'react-redux'
import Contact from '../Components/contactBar'

const msp = state => {return{contacts: state.contacts}}

export default connect(msp)(Contact)