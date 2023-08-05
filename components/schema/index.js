import * as Yup from 'yup'
export const Details1_Validaion_Schema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    confirmEmail: Yup.string().email('Invalid email address').required('Required').oneOf([Yup.ref("email") , null] , "Email and Confirm Email are not same")
})