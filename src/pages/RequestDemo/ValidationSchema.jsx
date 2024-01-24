import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const ValidationSchema = yup.object().shape({
    companyName: yup.string().required('must be filled.'),
    studentCount: yup.string().required('must be filled.'),
    name: yup.string().required('must be filled.'),
    surName: yup.string().required('must be filled.'),
    email: yup.string().email('email is wrong.').required('must be filled.'),
    phone: yup.number('must be a number').positive('must be a number.').required("must be filled."),
    contactTime: yup.string().required('must be filled.')
  });