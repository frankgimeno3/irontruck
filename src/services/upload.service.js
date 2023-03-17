import axios from "axios";

const api = axios.create({
  // asegúrese de usar PORT = 5005 (el puerto donde se ejecuta nuestro servidor)
  baseURL: "http://localhost:5005"
  // withCredentials: true // => es posible que necesite esta opción si usa cookies y sesiones
});

const errorHandler = (err) => {
  throw err;
};

const uploadImage = (file) => {
  return api.post("/profile/myprofile/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

const uploadService = {
  uploadImage
};

export default uploadService;