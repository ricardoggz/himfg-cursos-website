import axios from 'axios'

export const addPayment = async({data})=>{
    try {
        const response = await axios.post(
            `${process.env.BASE_URL_API}api/payments/add-payment`,
            data
        )
        console.log('payment', response)
        return response
    } catch (error) {
        throw new Error(error)
    }
}