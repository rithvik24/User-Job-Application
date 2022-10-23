import React from "react";
import { useDispatch } from "react-redux";
import { asyncShowDetails,asyncRejectUser,asyncShortlistUser } from "../actions/usersActions";
import { statusUpdatedShortlisted , statusUpdatedRejected } from "../helpers/statusUpdated";

const UsersTable = (props) => {
  const { text, users } = props;
  const dispatch = useDispatch();

  const handleReject = (id) => {
    dispatch(asyncRejectUser(id,statusUpdatedRejected()))
  }

  const handleSortlist = (id) => {
    dispatch(asyncShortlistUser(id,statusUpdatedShortlisted()))
  }

  const handleRejected = (id) => {
    const confirmShortlist = window.confirm('candidate rejected,you want to shortlist the candidate?')
    if(confirmShortlist){
      dispatch(asyncShortlistUser(id,statusUpdatedShortlisted()))
    }
  }

  const handleShortlisted = (id) => {
    const confirmReject = window.confirm('candidated shortlisted,you want to reject the candidated?')
    if(confirmReject){
      dispatch(asyncRejectUser(id,statusUpdatedRejected()))
    }
  }

  return (
    <div>
      <h2> {text} Developers </h2>
      <p> List of candidates applied for {text} developers job</p>
      <table border="1px">
        <thead>
          <tr>
            <th> Name </th>
            <th> Technical Skills </th>
            <th> Experience </th>
            <th> Applied Date </th>
            <th> View Details </th>
            <th> Update Application Status </th>
          </tr>
        </thead>
        <tbody>
          {users.slice(-50).reverse().map((user) => {
              return (
                <tr key={user._id}>
                  <td> {user.name} </td>
                  <td> {user.skills} </td>
                  <td> {user.experience} </td>
                  <td> {user.createdAt.slice(0, 10)} </td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(asyncShowDetails(user._id));
                      }}
                    > view details</button>
                  </td>
                  <td>
                    { user.status === 'applied' && (
                      <>
                        <button onClick={() => {
                          handleSortlist(user._id)
                        }}> shortlist </button>                      
                        <button onClick={() => {
                        handleReject(user._id)
                      }} > reject </button>                      
                      </>
                    ) }
                    {
                      user.status === 'rejected' && <button onClick={() => {
                        handleRejected(user._id)
                      }}> {user.status} </button>
                    }
                    {
                      user.status === 'shortlisted' && <button onClick={() => {
                        handleShortlisted(user._id)
                      }}> {user.status} </button>
                    }
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
