import axios from '../configureAxios/axios'

export const asyncGetUsers = () => {
    return (dispatch) => {
        axios.get('/users/application-forms')
        .then((response) => {
            const result = response.data
            dispatch(setUsers(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncAddUser = (formData,formReset) => {
    return (dispatch) => {
        axios.post('/users/application-form',formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(addUser(result))
                formReset()
                alert('Application Submitted')
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncShowDetails = (id) => {
    return (dispatch) => {
        axios.get(`/users/application-form/${id}`)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('message')){
                alert(result.message)
            }else{
                alert(`
                ${result.name[0].toUpperCase()+result.name.slice(1).toLowerCase()} Profile
                Contact Number : ${result.phone}
                Email : ${result.email}
                Skills : ${result.skills}
                Experience : ${result.experience}
                `)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncRejectUser = (id,data) => {
    return (dispatch) => {
        axios.put(`/users/application-form/update/${id}`,data)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(rejectUser(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const asyncShortlistUser = (id,data) => {
    return (dispatch) => {
        axios.put(`/users/application-form/update/${id}`,data)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(shortlistUser(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const setUsers = (users) => {
    return {
        type : 'SET_USERS',
        payload : users
    }
}

export const addUser = (user) => {
    return {
        type : 'ADD_USER',
        payload : user
    }
}

export const rejectUser = (result) => {
    return {
        type : 'REJECT_USER',
        payload : result
    }
}
export const shortlistUser = (result) => {
    return {
        type : 'SHORTLIST_USER',
        payload : result
    }
}