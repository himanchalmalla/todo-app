// Custom hook to check password strength
/**
 * 
 * @param {string} password
 * min 8 characters
 * min 1 uppercase letter
 * min 1 lowercase letter
 * min 1 number
 * min 1 special character
 * check if password and confirm password are same (if both password provided else verify only one)
 * 
 * After comparing return info like
 * {
    isPasswordSame: true,
    hasEightChar: true,
    hasUppercase: true,
    hasLowercase: true,
    hasNumber: true,
    hasSpecialChar: true
 }
 */


const usePasswordVerifier = ({ password, confirmPassword }) => {
  return {
    isPasswordSame:
      confirmPassword === "" ? false : password === confirmPassword,

    hasEightChar: hasEightChar(password),
    hasUppercase: hasUppercase(password),
    hasLowercase: hasLowercase(password),
    hasNumber: hasNumber(password),
    hasSpecialChar: hasSpecialChar(password),
  };
};


const hasEightChar = (password) => {
    const eightCharRegex = /(?=.{8,})/;
    console.log(eightCharRegex.test(password));
    return eightCharRegex.test(password);
}

const hasUppercase = (password) => {
    const uppercaseRegex = /(?=.*[A-Z])/;
    return uppercaseRegex.test(password);
}

const hasLowercase = (password) => {
    const lowercaseRegex = /(?=.*[a-z])/;
    return lowercaseRegex.test(password);
}

const hasNumber = (password) => {
    const numberRegex = /(?=.*[0-9])/;
    return numberRegex.test(password);
}

const hasSpecialChar = (password) => {
    const specialCharRegex = /(?=.*[!@#$%^&*])/;
    return specialCharRegex.test(password);
}

export default usePasswordVerifier;