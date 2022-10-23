import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddUser } from '../actions/usersActions'

const ApplicationForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'name'){
            setName(e.target.value)
        }
        else if(attr === 'email'){
            setEmail(e.target.value)
        }
        else if(attr === 'phone'){
            setPhone(e.target.value)
        }
        else if(attr === 'skills'){
            setSkills(e.target.value)
        }
        else if(attr === 'jobTitle'){
            setJobTitle(e.target.value)
        }
        else if(attr === 'experience'){
            setExperience(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name,
            email,
            phone,
            skills,
            jobTitle,
            experience,
        }
        const formReset = () => {
            setName('')
            setEmail('')
            setPhone('')
            setJobTitle('')
            setSkills('')
            setExperience('')
        }
        dispatch(asyncAddUser(formData,formReset))
    }

  return (
    <div>
        <h1> Apply For Job </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fullName'> Full Name </label>
            <input id='fullName' type='text' name='name' value={name} onChange={handleChange}/>
            <br/>
            <label htmlFor='email'> Email Address </label>
            <input id = 'email' type='text' name='email' value={email} onChange={handleChange}/>
            <br/>
            <label htmlFor='phNumber'> Contact Number </label>
            <input id='phNumber' type='text' name='phone' value={phone} onChange={handleChange}/>
            <br/>
            <label htmlFor='jobType'> Applying For Job </label>
            <select id = 'jobType' name='jobTitle' value={jobTitle} onChange={handleChange}>
                <option value = ''> ...select... </option>
                <option value = 'Front-End Developer'> Front-End Developer </option>
                <option value = 'Node.js Developer'> Node.js Developer </option>
                <option value = 'MEAN Stack Developer'> MEAN Stack Developer </option>
                <option value = 'FULL Stack Developer'> FULL Stack Developer </option>
            </select>
            <br/>
            <label htmlFor='experience'> Experience </label>
            <input id='experience' type='text' name='experience' value={experience} onChange={handleChange}/>
            <br/>
            <label htmlFor='skills'> Technical Skills </label>
            <textarea id='skill' name='skills' value={skills} onChange={handleChange}></textarea>
            <br/>
            <button> Send Application </button>
        </form>
    </div>
  )
}

export default ApplicationForm