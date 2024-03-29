import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import AddBlogPost from "./components/AddBlogPost";
import BlogPost from "./components/BlogPost";
import BlogPostsList from "./components/BlogPostsList";


import AddComment from "./components/AddComment";
import Comment from "./components/Comment";
import CommentsList from "./components/CommentsList";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'var(--custom-primary-color)' }}>
    <Link to={"/"} className="navbar-brand">
    {/* <MDBBtn outline color="primary" className='me-2' type='button'>
    SocialMediaBlogger
        </MDBBtn> */}
   
   <div class="container">
   
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 15h-4v-1.59c0-.81.66-1.47 1.47-1.47h1.06c.81 0 1.47.66 1.47 1.47V17zm2.99-6.75c-.01.81-.66 1.47-1.47 1.47h-3.04c-.48-1.28-1.68-2.24-3.07-2.38-1.58-.16-2.94.97-3.44 2.38H5.48c-.81 0-1.47-.66-1.47-1.47v-3.72c0-.81.66-1.47 1.47-1.47H7V7c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75v2.26h1.52c.81 0 1.47.66 1.47 1.47v3.72z"/>
    </svg>
    
    <h5>SocialMediaBlogger</h5>
  </div>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
         <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>

        {showModeratorBoard && (
          <li className="nav-item">
            <Link to={"/mod"} className="nav-link">
              Moderator Board
            </Link>
          </li>
        )}

        {showAdminBoard && (
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin Board
            </Link>
          </li>
        )} 

         {currentUser && (
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
        )} 

        {currentUser && (
          <li className="nav-item">
            <Link to={"/blogposts"} className="nav-link">
             <h3>BlogPosts</h3> 
             {/* <MDBBtn outline color="success" className='me-2' type='button'>
             BlogPosts
        </MDBBtn> */}
            </Link>
          </li>
        )}

        {currentUser && (
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              <h3>Add</h3>
            </Link>
          </li>
        )}

        {currentUser && (
          <li className="nav-item">
            <Link to={"/comments"} className="nav-link">
             <h3>Comments</h3> 
            </Link>
          </li>
        )}
        
      </ul>

      {currentUser ? (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
             <h3>Welcome {currentUser.username}</h3> 
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              <h3>LogOut</h3>
            </a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  </nav>

      <div className="container mt-3">
        <Routes>
          {/* <Route exact path={"/"} element={<Home />} /> */}
                    {/* <Route path="/" element={<BlogPostsList/>} /> */}
          {/* <Route exact path={"/home"} element={<Home />} /> */}
          <Route exact path={"/"} element={<Home />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/blogposts" element={<BlogPostsList/>} />
          <Route path="/add" element={<AddBlogPost/>} />
          <Route path="/blogposts/:id" element={<BlogPost/>} />
          <Route path="/comments" element={<CommentsList/>} />
          <Route path="/addcomment/:id" element={<AddComment/>} />
          <Route path="/comments/:id" element={<Comment/>} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
