import _axios from "axios";
	
const axios = _axios.create();

const GET = (url) => {
    return axios.get(url)
      .then(response => response.data);
}

const POST = (url, data) => {
    return axios.post(url, data)
      .then(response => response.data);
}
 
const PUT = (url, data) => {
    return axios.put(url, data)
      .then(response => response.data);
}
 
const DELETE = (url) => {
    return axios.delete(url)
      .then(response => `${response.status} ${response.statusText}`);
}

export { GET, POST , PUT , DELETE};