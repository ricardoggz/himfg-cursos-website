import axios from 'axios'

export const updateTaxData = async({data, user_id})=>{
    try {
        const response = await axios.put(
            `${process.env.BASE_URL_API}api/auth/update-user-tax-data/${user_id}`,
            {
                student_tax_data: data
            }
        )
        return console.log(response)
    } catch (error) {
        throw new Error(error)
    }
}