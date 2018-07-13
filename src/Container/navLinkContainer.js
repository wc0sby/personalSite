import { connect } from 'react-redux'
import Nav from '../Components/nav'

const getContent = (state) =>{
  return state.map((i)=>{
    return i.link
  })
}

const msp = state => {
  return{
    content: getContent(state.contents)
  }
}

export default connect(msp)(Nav)