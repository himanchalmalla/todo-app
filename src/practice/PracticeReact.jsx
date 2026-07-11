import { useEffect, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Marquee from 'react-fast-marquee';
import usePasswordVerifier from './hooks/usePasswordVerifier';


const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px"
}


const inputStyle = {
  flex: 1,
  minWidth: 0,
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "0px 5px 5px 0px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const formFieldStyle = {
  display: "flex",
  height: "20px",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  marginBottom: "10px",
};

const labelStyle = {
  width: "100px",
  height: "100%",
  padding: "10px 5px",
  fontWeight: "bold",
  backgroundColor: "#0c0767",
  color: "white",
  borderRadius: "5px 0 0 5px",
  display: "flex",
  alignItems: "center",
};

function PracticeReact({ name, age, address }) {
  const [favFruit, setFavFruit] = useState("apple 🍎🍎")
  const [count, setCount] = useState(0)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showFinalData, setShowFinalData] = useState(false)

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
  })

  const handleCounter = (action) => {
    if (count <= 0 && action === "decrement") {
      setCount(0)
      setShowErrorAlert(true)
    } else {
      setShowErrorAlert(false)
      if (action === "increment") {
        setCount(count + 1)
      } else if (action === "decrement") {
        setCount(count - 1)
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowFinalData(true)
  }

  const hideFinalData = () => {
    setShowFinalData(false)
  }

  // DATA FOR LOOP AND NESTED LOOP

  const collegeInfo = [
    {
      id: 1,
      name: "MIT",
      location: "USA",
      courses: [
        {
          id: 1,
          name: "Computer Science",
          duration: "4 years",
          fees: "10000"
        },
        {
          id: 2,
          name: "Electronics",
          duration: "3 years",
          fees: "8000"
        },
        {
          id: 3,
          name: "Mechanical",
          duration: "3 years",
          fees: "8000"
        }
      ]
    },
    {
      id: 2,
      name: "IIT",
      location: "India",
      courses: [
        {
          id: 1,
          name: "Computer Science",
          duration: "4 years",
          fees: "10000"
        },
        {
          id: 2,
          name: "Electronics",
          duration: "3 years",
          fees: "8000"
        },
        {
          id: 3,
          name: "Mechanical",
          duration: "3 years",
          fees: "8000"
        }
      ]
    },
    {
      id: 3,
      name: "IIIT",
      location: "India",
      courses: [
        {
          id: 1,
          name: "Computer Science",
          duration: "4 years",
          fees: "10000"
        },
        {
          id: 2,
          name: "Electronics",
          duration: "3 years",
          fees: "8000"
        },
        {
          id: 3,
          name: "Mechanical",
          duration: "3 years",
          fees: "8000"
        }
      ]
    },
    {
      id: 4,
      name: "TU",
      location: "Nepal",
      courses: [
        {
          id: 1,
          name: "Computer Science",
          duration: "4 years",
          fees: "10000"
        },
        {
          id: 2,
          name: "Electronics",
          duration: "3 years",
          fees: "8000"
        },
        {
          id: 3,
          name: "Mechanical",
          duration: "3 years",
          fees: "8000"
        }
      ]
    }
  ]

  //   Use Effect
  useEffect(() => {
    console.log("useEffect is called after every render")
  });

  useEffect(() => {
    console.log("useEffect is called Single Time");

  }, [])

  useEffect(() => {
    console.log("useEffect is called on update of count state variable");
  }, [count])

  useEffect(() => {
    console.log("useEffect is called on update of favFruit and count state variable");
  }, [favFruit, count]);

  useEffect(() => {
    console.log("useEffect is called on update of props");
  }, [name, age, address]);

  // USE REF
  const inputRef = useRef(null)

  // Custom hooks
  const [passwords, setPasswords] = useState('')
  const [confirmPasswords, setConfirmPasswords] = useState('')

  const passwordStatus = usePasswordVerifier({password:passwords, confirmPassword:confirmPasswords});

  const handleButtonClick = () => {
    inputRef.current.focus()
    inputRef.current.style.color = "red"
    inputRef.current.type = "password"
  }
  // 
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%", alignItems: "left", gap: 10, marginLeft: 20 }}>
      <h1>TODO APP - STATE MANAGEMENT</h1>
      <p>Your favorite fruit is: {favFruit}</p>

      <button style={{ ...buttonStyle, backgroundColor: "yellow" }} onClick={() => setFavFruit("Banana 🍌 🍌")}>Banana 🍌 🍌</button>
      <button style={{ ...buttonStyle, backgroundColor: "orange" }} onClick={() => setFavFruit("Orange 🍊 🍊")}>Orange 🍊 🍊</button>
      <button style={{ ...buttonStyle, backgroundColor: "purple" }} onClick={() => setFavFruit("Grapes 🍇 🍇")}>Grape 🍇 🍇</button>
      <button style={{ ...buttonStyle, backgroundColor: "red" }} onClick={() => setFavFruit("Apples 🍎 🍎")}>Apple 🍎 🍎</button>

      <hr style={{ backgroundColor: "red", width: "50%", height: 5 }} />

      <p style={{ color: count <= 0 ? "red" : "green", fontSize: 20, fontWeight: "bold" }}>Count: {count}</p>


      <div style={{ display: "flex", flexDirection: "row", alignItems: "left", alignContent: "space-between", gap: 10 }}>
        <button style={{ ...buttonStyle, backgroundColor: "green" }} onClick={() => handleCounter("increment")}>Increment++</button>
        <button style={{ ...buttonStyle, backgroundColor: "red" }} onClick={() => handleCounter("decrement")}>Decrement--</button>
      </div>
      {showErrorAlert && (
        <p style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>Count cannot be less than 0</p>
      )}

      {/* TOGGLE PASSWORD VISIBILITY */}
      <div style={{ position: "relative", width: "300px", marginBottom: "20px" }}>
        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" style={{
          width: "100%",
          padding: "10px 40px 10px 10px",
          fontSize: "16px",
        }}
        />

        <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <hr style={{ backgroundColor: "red", width: "100%", height: 5 }} />
      <div>
        {/* User Form Submission */}
        <h3>User Form</h3>
        <form >
          <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", gap: 10, border: "5px solid black", borderRadius: 10, padding: 10 }}>
            <div style={formFieldStyle}>
              <label style={labelStyle}>Full Name</label>
              <input type="text" placeholder="Enter your Full Name" style={inputStyle} value={userInfo.name} onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  name: e.target.value
                })
                hideFinalData()
              }} />
            </div>

            <div style={formFieldStyle}>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="Enter your Email" style={inputStyle} value={userInfo.email} onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} />
            </div>

            <div style={formFieldStyle}>
              <label style={labelStyle}>Password</label>
              <input type="password" placeholder="Enter your Password" style={inputStyle} value={userInfo.password} onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  password: e.target.value
                })
                hideFinalData()
              }} />
            </div>
            <div style={formFieldStyle}>
              <label style={labelStyle}>Confirm Password</label>
              <input type="password" placeholder="Confirm your Password" style={inputStyle} value={userInfo.confirmPassword} onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  confirmPassword: e.target.value
                })
                hideFinalData()
              }} />
            </div>
            <div style={formFieldStyle}>
              <label style={labelStyle}>Upload Image</label>
              <input type="file" accept="image/*" placeholder="Upload your Image" style={{ ...inputStyle, padding: "6px" }} onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setUserInfo({
                    ...userInfo,
                    image: e.target.files[0]
                  })
                  hideFinalData()
                }
              }} />
            </div>
            <button type="submit" onClick={handleFormSubmit} style={{ ...buttonStyle, backgroundColor: "green", width: "50%", alignSelf: "center" }}>Submit</button>
          </div>
        </form>
      </div>

      <hr style={{ backgroundColor: "red", width: "100%", height: 5 }} />
      {
        showFinalData && (
          <div>
            <h3>Final Data</h3>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Password: {userInfo.password}</p>
            <p>Confirm Password: {userInfo.confirmPassword}</p>
            <p><img src={URL.createObjectURL(userInfo.image)} alt="User Image" width="150" height="150" /></p>
          </div>
        )
      }


      {/* LOOP AND NESTED LOOP */}
      <hr style={{ backgroundColor: "red", width: "100%", height: 5 }} />
      <div>
        <h3>Loop and Nested Loop</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {
            collegeInfo.map((college, index) => (
              <div key={index}
                style={{
                  display: "flex", flexDirection: "column", gap: 10, border: "2px solid black",
                  borderRadius: 10, padding: 10, backgroundColor: "#bbc8f1",
                }}>
                <div style={{
                  width: "100%",
                  backgroundColor: "#464648",
                  color: "white",
                  borderRadius: 10,
                  marginRight: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <h2>{college.name}</h2>
                  <p>Address: {college.location}</p>
                </div>
                <br />
                <Marquee direction="left" gradient={false} speed={40}>
                  <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    {
                      college.courses.map((course, courseIndex) => (
                        <div key={courseIndex}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            border: "2px solid black",
                            borderRadius: 10,
                            padding: 10,
                            width: "180px",
                            margin: 10,
                            backgroundColor: "#0b0bdf",
                            color: "white"
                          }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <h3>{course.name}</h3>
                            <p>Duration: {course.duration}</p>
                            <p>Fee: {course.fees}</p>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </Marquee>

              </div>
            ))
          }
        </div>
      </div>

      {/* UseRef example */}
      <hr style={{ backgroundColor: "red", width: "100%", height: 5 }} />
      <div>
        <h3>UseRef Example</h3>
        <input type="text" ref={inputRef} placeholder="Enter text" />
        <button onClick={handleButtonClick}>Click</button>
      </div>

      {/* Custom Hook */}
      <hr style={{ backgroundColor: "red", width: "100%", height: 5 }} />
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <h3>Custom Hook</h3>
        <input type='password' onChange={(e) => setPasswords(e.target.value)} placeholder='Enter your password'/>
        <input type='password' onChange={(e) => setConfirmPasswords(e.target.value)} placeholder='Enter your confirm password'/>

        <h2 style={{ color: 'AccentColor', fontWeight: 'bold' }}>Password Strength</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {
            passwords && confirmPasswords && (
              <p style={{ color: passwordStatus.isPasswordSame ? "green" : "red" }}>{passwordStatus.isPasswordSame ? "Great Password are same" : "Password and Confirm Password are not same"}</p>
            )
          }
          {(passwords || confirmPasswords) && (
            <>
              <p style={{ color: passwordStatus.hasEightChar ? "green" : "red" }}> {passwordStatus.hasEightChar ? "Hmm Good" : "Should be Minimum 8 Char"}</p>
              <p style={{ color: passwordStatus.hasUppercase ? "green" : "red" }}>{passwordStatus.hasUppercase ? "Moving Ahead" : "Must have at least 1 Uppercase"}</p>
              <p style={{ color: passwordStatus.hasLowercase ? "green" : "red" }}>{passwordStatus.hasLowercase ? "That's Great" : "Must have at least 1 Lowercase"}</p>
              <p style={{ color: passwordStatus.hasNumber ? "green" : "red" }}> {passwordStatus.hasNumber ? "Awesome and Strong" : "Must have at least 1 Number"}</p>
              <p style={{ color: passwordStatus.hasSpecialChar ? "green" : "red" }}> {passwordStatus.hasSpecialChar ? "Almost Impossible to get in" : "Must have at least 1 Special Char"}</p>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default PracticeReact;


