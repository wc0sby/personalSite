import { connect } from 'react-redux'
import Contact from '../Components/main'

const getContent = (state, criteria) =>{
  return state.filter((i)=>{
    return i.link === criteria
  })
}

const msp = state => {
  return{
    content: getContent(state.contents, 'Resume')
  }
}

export default connect(msp)(Contact)