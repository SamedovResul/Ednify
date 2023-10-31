import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const ValidationSchema = yup.object().shape({
    companyName: yup.string().required('Bu xana tələb olunur.'),
    studentCount: yup.string().required('Bu xana tələb olunur.'),
    name: yup.string().required('Bu xana tələb olunur.'),
    surName: yup.string().required('Bu xana tələb olunur.'),
    email: yup.string().email('Emaili doğru daxil edin.').required('Bu xana tələb olunur.'),
    phone: yup.number('Rəqəm olmalıdır.').positive('Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
    contactTime: yup.string().required('Bu xana tələb olunur.')
  });