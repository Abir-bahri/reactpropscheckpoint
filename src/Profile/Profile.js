import React from 'react';
import PropTypes from 'prop-types';
import "./Profile.css";




 export default function Profile(props)  {
    return (
    <div className="profile-card">
   
        <div className="imgpro">{props.children}</div>
        <div className="container">
         <h4>
          <span className="label"> Name : </span>
          {props.fullName}{" "}
        </h4>
        <p>
          {" "}
          <span className="label"> Profession : </span>
          {props.profession}{" "}
        </p>
        <p>
          {" "}
          <span className="label"> Bio : </span>
          {props.bio}{" "}
        </p>
        <button
          onClick={() => props.handleName(props.fullName)}
          className="btn btn-profile"
        >
          Hello{" "}
        </button>
        </div>
    </div>
    );
}

Profile.propTypes = {
fullName: PropTypes.string,
bio: PropTypes.string,
profession: PropTypes.string,

handleName: PropTypes.func,
};
Profile.defaultProps ={
fullName: " ",
profession: "",
bio: " ",
handleName: () => {
    alert(" ");
  },
};

