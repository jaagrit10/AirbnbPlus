import axios from "axios";
const baseUrl = "";
function transform(data){
    return axios.post(baseUrl,data);
}

export {transform}