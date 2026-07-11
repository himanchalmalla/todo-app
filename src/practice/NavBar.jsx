import React from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import PracticeReact from './PracticeReact'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const navStyle = {
    width: "80%",
    margin: "0 auto",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px"
}

const ulStyle = {
    listStyleType: "none",
    margin: 0,
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
}

const liStyle = {
    padding: "5px",
    borderRadius: "5px",
    width: "80px",
    border: "1px solid #ccc",
    backgroundColor: "#1c0653",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    cursor: "pointer",
    fontSize: "12px"
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
    width: "100%",

}


const NavBar = () => {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#5a516f', borderRadius: '5px', paddingLeft: '10px' }}>
                <div style={{
                    width: "20%",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    padding: "5px",
                    borderRadius: "10px",
                    border: "none",
                }}>
                    <p style={{ margin: 0, fontSize: "12px", fontWeight: "bolder", color: "#1c0653" }}>React<br />Practice</p>
                </div>
                <nav style={navStyle}>
                    <ul style={ulStyle}>
                        <li style={liStyle}><NavLink style={linkStyle} to="/">React Practice</NavLink></li>
                        <li style={liStyle}><NavLink style={linkStyle} to="/home">Home</NavLink></li>
                        <li style={liStyle}><NavLink style={linkStyle} to="/about">About</NavLink></li>
                        <li style={liStyle}><NavLink style={linkStyle} to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>

                <Routes>
                    <Route path="/" element={<PracticeReact />} >React Practice</Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default NavBar
