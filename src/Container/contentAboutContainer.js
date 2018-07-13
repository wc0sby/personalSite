import { connect } from 'react-redux'
import About from '../Components/main'

const getContent = (state, criteria) =>{
  return state.filter((i)=>{
    return i.title === criteria
  })
}

const msp = state => {
  return{
    content: getContent(state.contents, 'About Me')
  }
}

export default connect(msp)(About)