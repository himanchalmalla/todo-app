import React, { useEffect, useState } from 'react'
import SignUpForm from './SignUpForm';

const SignUp = () => {
  const [formData, setFormData] = useState({});
 const sampleInitialData = {
  firstName: 'Ramesh',
  lastName: 'Thapa',
  dob: '1998-04-12',                 // must be 'YYYY-MM-DD' to match <input type="date">
  gender: 'Male',                    // must exactly match one of genderOptions
  interest: ['Focus', 'Discipline'],// array, each value must exactly match interestOption entries
  job: 'Frontend Developer',         // must exactly match one of jobOptions
  profileImageUrl: 'https://placekitten.com/200/200', // any existing image URL to preview
  email: 'ramesh.thapa@example.com',
  password: '',                      // always leave blank, never prefill a real password
};
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div>
    <SignUpForm  initialData={sampleInitialData} onSubmit={setFormData} />
    </div>
  )
}

export default SignUp;
