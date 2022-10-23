export const filterByJobType = (users,jobTitle) => {
    return users.filter((ele) => ele.jobTitle === jobTitle)
}