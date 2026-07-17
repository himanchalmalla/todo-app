import React, { useEffect, useState } from 'react'
import Input from '../../../components/ui/Input'
import { Link } from 'react-router-dom'
import RadioButton from '../../../components/ui/RadioButton'
import CheckBox from '../../../components/ui/CheckBox'
import DropDown from '../../../components/ui/DropDown'
import SelectImage from '../../../components/ui/SelectImage'

const SignUpForm = ({initialData, onSubmit}) => {
    const genderOptions = ['Male', 'Female', 'Other'];
    const interestOption=['Increase Productivity', 'Discipline', 'Focus', 'Self Improvement'];
    const jobOptions=['Software Engineer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Plumber', 'Carpenter', 'Electrician'];
    
    const emptyForm={
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        interest: [],
        job: '',
        profileImage: '',
        profileImageUrl:'',
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(() => {
        if (initialData) {
            return initialData;
        } else {
            return emptyForm;
        }
    });

    useEffect(() => {
        if (initialData) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                ...initialData
            }));
        }
  }, [initialData]);
  
       const updateFormData = (field, value) => {
           setFormData((prevFormData) => ({
               ...prevFormData,
               [field]: value
           }))
       }

       const toggleData = (option) => {
           setFormData((prevFormData) => ({
               ...prevFormData,
               interest: prevFormData.interest.includes(option) ? prevFormData.interest.filter((item) => item !== option) : [...prevFormData.interest, option]
           }))
       }
    

      const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);}

    return (
     <div className='flex flex-col  justify-center gap-4'>
      <p className='text-2xl font-bold text-[#c20044] my-3 text-center'>Welcome to SignIn</p>
      <form className='flex flex-col gap-3' onSubmit={handleFormSubmit}>

      <Input type="First Name" placeholder='Enter your First Name' label='First Name' value={formData.firstName}
       onChange={(val) => updateFormData('firstName', val)} />

      <Input type="Last Name" placeholder='Enter your Last Name' label='Last Name' value={formData.lastName}
       onChange={(val) => updateFormData('lastName', val)} />

      <Input type="date" placeholder='Enter your DOB' label='Date of Birth' value={formData.dob}
       onChange={(val) => updateFormData('dob', val)}
      />
      <RadioButton options={genderOptions} label='Gender' id='gender' value={formData.gender}
       onChange={(val) => updateFormData('gender', val)} />

      <CheckBox options={interestOption} label='Interests' id='interest' value={formData.interest}
        onChange={toggleData} />

      <DropDown options={jobOptions} label='Select Your Job' placeholder='Select Your Job' value={formData.job} 
      onChange={(val) => updateFormData('job', val)} />

       <SelectImage placeholder='Select You Profile' label='Select You Profile Image' onChange={(val) => updateFormData('profileImage', val)} existingImageUrl={formData.profileImageUrl} />

        <Input type="email" placeholder='Enter your email' label='Email' value={formData.email}
         onChange={(val) => updateFormData('email', val)} />

        <Input type="password" placeholder='Enter your password' label='Password' value={formData.password}
         onChange={(val) => updateFormData('password', val)} />

      <button type='submit' className='bg-[#c20044] text-white py-2 rounded-md'>Register</button>

      </form>
      <Link className='text-blue' to="/forget-password">Forget Password?</Link>
      <p className='text-center my-3 text-sm text-[#c20044]'>Already have an account? click <Link to="/signin"><span className='text-[#c20044] underline font-bold'>Sign In</span></Link> to login.</p>
    </div>
  )
}

export default SignUpForm
