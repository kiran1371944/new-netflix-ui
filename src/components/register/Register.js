import React from 'react';
import './Register.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import one from '../video/one.m4v';
import two from '../video/two.m4v';

function Register() {
  return (
    <>
    <div className="register">
       <Navbar  >
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="logo"
              className=" logoimg d-inline-block align-top" 
            />{' '}
            <button className ="loginButton " to="/dashboard">Sign In</button>
          </Navbar.Brand>
        </Container>
      </Navbar>
          </div>
       <div className="box">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
              Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="input">
                <input type="email" name="email" placeholder="Email Address"/>
                <NavLink to={'/dashboard'} className="btn-rounded"><button>GET STARTED </button></NavLink>
            </div>

          </div>

          <section className="section-parts">
          <div className="part-1">
            <div className="desc-1">
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div>
            <img src="https://i.postimg.cc/q70d1Sts/tv.png" alt="Netflix TV"/>
            <video autoPlay muted loop ><source src={one} type="video/mp4"/></video>
          </div>

          <div className="part-2">
            <img src="https://i.postimg.cc/xTR708qz/3.jpg" alt="Netflix Mobile"/>
            <div className="desc-2">
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
        </div>
        <div className="part-3">
            <div className="desc-3">
                <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div>
            <img src="https://i.postimg.cc/c4ygs1P0/4.png" alt="Device-Pile-In"/>
            <video className="video-2" autoPlay muted loop><source src={two} type="video/mp4"/></video>
        </div>

        <div className="part-0">
            <img src="https://i.postimg.cc/x8SfS88Z/2.jpg" alt="Netflix Mobile"/>
            <div className="desc-0">
                <h1>Create profiles for children.</h1>
                <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
            </div>
        </div>
          </section>

          <section className="lastsec">
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul className="questions">
                <li>What is Netflix?</li>
                <li>How much does Netflix cost?</li>
                <li>Where can I watch?</li>
                <li>How do I cancel?</li>
                <li>What can I watch on Netflix?</li>
                <li>Is Netflix good for kids?</li>
            </ul>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input">
                <input type="email" name="email" placeholder="Email Address"/>
                <NavLink to={'/dashboard'} className="btn-rounded"><button>GET STARTED </button></NavLink>
            </div>
        </div>
    </section>


    <footer className="footer">
        <p>Questions? Call 000-800-040-1843</p>
        <div className="footer-cols">
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Watch for Free</a></li>
            </ul>
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
            <ul>
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Netflix Originals</a></li>
            </ul>
        </div>
    </footer>
          </>

  )
}

export default Register