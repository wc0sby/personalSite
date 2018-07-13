import { connect } from 'react-redux'
import Project from '../Components/main'

const getContent = (state, criteria) =>{
  return state.filter((i)=>{
    return i.link === criteria
  })
}

const msp = state => {
  return{
    content: getContent(state.contents, 'Projects')
  }
}

export default connect(msp)(Project)