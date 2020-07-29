import React from "react";
import { fetchUserProfile } from "../action/action";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Profile extends React.Component {
  componentDidMount() {
    const { userInfo } = this.props;
    this.props.dispatch(
      fetchUserProfile(
        `https://conduit.productionready.io/api/profiles/${userInfo.username}`
      )
    );
  }

  render() {
    const { userInfo } = this.props;
    console.log(userInfo);
    return (
      <>
        <div className="user-profile">
          <img
            className="user-profile-img"
            src={`${userInfo.image}`}
            alt={userInfo.username}
          />
          <p className="user-profile-username">{userInfo.username}</p>
          <div className= "user-profile-btn-right">
            <NavLink to="/setting" className="user-profile-bnt">
              Edit user profile
            </NavLink>
          </div>
        </div>

        <div>
          <NavLink to="userProfile" activeClassName="active">
            My Article
          </NavLink>
          <NavLink to="favoritedArtice" activeClassName="active">
            Favorited Articles
          </NavLink>
        </div>
      </>
    );
  }
}

function mapState(state) {
  console.log(state);
  return { ...state };
}

export default connect(mapState)(Profile);
