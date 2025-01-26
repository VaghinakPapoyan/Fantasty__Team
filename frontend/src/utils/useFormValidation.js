// src/hooks/useRegistrationFormValidation.js

import { toast } from "react-toastify";

const calculateAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If the birth month is greater than the current month
  // (or the same month but the birth day is yet to come), subtract one year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export const useRegistrationFormValidation = () => {
  /**
   * @function validate
   * @param {Object} formData - The form data to be validated
   * @param {string} formData.email - User's email
   * @param {string} formData.dateOfBirth - User's date of birth
   * @param {string} formData.password - User's password
   * @param {string} formData.promoCode - Optional promo code
   *
   * @returns {Array<string>} An array of error messages.
   *                          If empty, there are no validation errors.
   */
  const validate = (formData) => {
    const { email, dateOfBirth, password } = formData;
    let errors = [];

    // Validate Email
    if (!email) {
      errors.push("Email is required.");
    } else {
      // Basic regex for email validation; consider using a library like 'validator'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push("Invalid email format.");
      }
    }

    // Validate Date of Birth
    if (!dateOfBirth) {
      errors.push("Date of birth is required.");
    } else {
      const userAge = calculateAge(dateOfBirth);
      if (userAge < 0 || userAge > 150) {
        errors.push("Invalid date of birth.");
      } else if (userAge < 16) {
        errors.push("You must be 16 years old or older to register.");
      }
    }

    // Validate Password
    if (!password) {
      errors.push("Password is required.");
    } else {
      // Example of stronger password policy checks:
      // 1. Minimum length 8
      // 2. At least 1 uppercase
      // 3. At least 1 lowercase
      // 4. At least 1 digit
      // 5. At least 1 special character
      if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
      }
      if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
      }
      if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
      }
      if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
      }
      // Regex for special characters (punctuation, symbols, etc.)
      if (!/[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\;`~]/.test(password)) {
        errors.push("Password must contain at least one special character.");
      }
    }

    return errors;
  };

  return { validate };
};
