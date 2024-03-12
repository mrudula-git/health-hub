export const formErrors = {
    name: {
      required: "Name is required",
      minimum: "Name should have at least 3 characters",
      maximum: "Name should not exceed 50 characters",
      customValidation: "Name should contain alphabetic characters only with spaces between words",
    },
    email: {
      required: "Email is required",
      invalid: "Email is not valid",
      customValidation: "Email is not valid",
    },
    mobile: {
      required: "Phone Number is required",
      invalid: "Phone Number is not valid",
      customValidation: "Phone Number should contain only numbers and must have a minimum length of 10 digits",
    },
    message: {
      required: "Message is required",
      minimum: "Message must contain 10 characters",
      maximum: "Message should not exceed 500 characters",
    },
  };
  
  export function validateField(
    name: string,
    value: any,
    rules: { required: boolean; minLength?: number; maxLength?: number }
  ) {
    
    if (rules.required) {
      if (!value.toString().trim()) {
        return formErrors[name].required;
      }
    }
  
    if (rules.minLength && value.length < rules.minLength) {
        return formErrors[name].minimum;
      }
    
      if (rules.maxLength && value.length > rules.maxLength) {
        return formErrors[name].maximum;
      }
    if (name === "name") {
        if (value.length < 3) {
            return formErrors[name].minimum;
          }
        
          if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(value)) {
            return formErrors[name].customValidation;
          }
    }
  
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        return formErrors[name].invalid;
      }
    }

    if (name === "mobile") {
      const phoneNumberRegex = /^[0-9+()-]+$/; 
      if (!phoneNumberRegex.test(value) || value.length < 10) {
        return formErrors[name].customValidation;
      }
    }
  
    return "";
  }
  