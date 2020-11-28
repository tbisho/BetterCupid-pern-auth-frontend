// NOTE: the next 2 lines MUST be kept separate to prevent a compiling error, because
// if you import React in curly brackets it will return an error that says 
// 'cannot read createElement of undefined'
import React from 'react';
import { useState, useCallback } from 'react';
import Profile from '../pages/Profile';
import UserModel from '../models/user';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const UserInfo = (props) => {
  const [isLiked, setIsLiked] = useState(false)

  const deleteUser = () => {
    UserModel.deleteUser({
    }).then(
      ProfileModel.deleteProfile({
      }).then(
        localStorage.clear()
      )
    )
  }

//   const toggleImage = useCallback(() => 
//     setIsLiked(!isLiked),
//     [isLiked, setIsLiked]
//   )

//   const updateRelationship = () => {
//     toggleImage()

//     if (isLiked === false) {
//       RelationshipModel.unlikeUser()
//     } else {
//       RelationshipModel.likeUser()
//     }
//   }

  const updateRelationship = () => {
    RelationshipModel.likeUser({
        // targetProfile
    })
  }

  return (
    <div className="card flex-row flex-wrap user-info">
      <div className="card-header border-0">
        <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='180px' width='180px' alt='user icon' />
      </div>
      <div className="card-block info-card-text">
        {/* THIS IS HOW WE PASS PROPS */}
        <h4 className="card-title">{props.displayName}</h4>
        <div className="card-text">
          <p>{props.age}</p>
          <p>{props.city}, {props.state}</p>
        </div>
        <a href="#" className="info-card-button" onClick={ updateRelationship }>
          {isLiked
            ? <img src='https://i.imgur.com/7LesXMV.png' height='20px' width='20px' alt='heart' />
            : <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg' height='20px' width='20px' alt='heart' />
          }
        </a>
        <a href="#" className="info-card-button">
          <img src='https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg' height='20px' width='20px' alt='message' />
        </a>
        <a href="/profile/edit" className="btn pink-button info-card-button">Edit</a>
        <a href="/" className="btn pink-button info-card-button" onClick={deleteUser}>Delete</a>
      </div>
    </div>
  )
}

export default UserInfo