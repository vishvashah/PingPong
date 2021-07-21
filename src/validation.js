import validator from "validator";
export default function PlayerDetailValidation(data) {
    let errors = {};
    if (validator.isEmpty(data.Player1 + "")) {
        errors.Player1 = "Please Enter Player1 Name";
    }
   
    if (validator.isEmpty(data.Player2 + "")) {
        errors.Player2 = "Please Enter Player2 Name";
    }

    return {
        errors,
        isValid: Object.keys(errors).length > 0 ? false : true
    };
};
