import { connect } from 'react-redux'
import Projects from '../Components/cardsContent'



const msp = state => {
  return{
    project: (state.projects)
  }
}

export default connect(msp)(Projects)