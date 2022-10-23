import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetUsers } from '../actions/usersActions'
import UsersTable from './UsersTable'
import { filterByJobType } from '../selectors/filterByJobTitle'

const AdminDashBoard = () => {
    const [ toggleFe, setToggleFe ] = useState(false)
    const [ toggleNode, setToggleNode ] = useState(false)
    const [ toggleMean, setToggleMean] = useState(false)
    const [ toggleFullStack, setToggleFullStack] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(asyncGetUsers())
    },[])
    
    const users = useSelector((state) => {
      return state.users
    })
    console.log(users)
    const handleFeToggle = () => {
      setToggleFe(true)
      setToggleNode(false)
      setToggleMean(false)
      setToggleFullStack(false)
    }
    const handleNodeToggle = () => {
      setToggleNode(true)
      setToggleFe(false)
      setToggleMean(false)
      setToggleFullStack(false)
    }
    const handleMeanToggle = () => {
      setToggleMean(true)
      setToggleNode(false)
      setToggleFe(false)
      setToggleFullStack(false)
    }
    const handleFullStackToggle = () => {
      setToggleFullStack(true)
      setToggleMean(false)
      setToggleNode(false)
      setToggleFe(false)
    }

  return (
    <div>
        <h2> Admin Dashboard </h2>
        <button onClick={handleFeToggle}> Front-End Developers </button>
        <button onClick={handleNodeToggle}> Node.js Developers </button>
        <button onClick={handleMeanToggle}> MEAN Stack Developers </button>
        <button onClick={handleFullStackToggle}> Full Stack Developers </button>
        { toggleFe && <UsersTable text = 'Front-End' users = {filterByJobType(users,'Front-End Developer')}/> }
        { toggleNode && <UsersTable text = 'Node.js' users = {filterByJobType(users,'Node.js Developer')} /> }
        { toggleMean && <UsersTable text = 'MEAN Stack' users = {filterByJobType(users,'MEAN Stack Developer')} />}
        { toggleFullStack &&  <UsersTable text = 'FULL Stack' users = {filterByJobType(users,'FULL Stack Developer')} />}
    </div>
  )
}

export default AdminDashBoard