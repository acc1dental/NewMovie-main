import axios from "axios"

let Base_Url = "https://api.themoviedb.org/3/"
let Api_Key = import.meta.env.VITE_API_KEY
   
const Objects = {
    headers: {
        Authorization: Api_Key
    }
}

const Api_Service  = {
  GetData: async (url) => {
    const responce = await axios.get(`${Base_Url}${url}` , Objects)
    return responce.data
  }

}

export default Api_Service