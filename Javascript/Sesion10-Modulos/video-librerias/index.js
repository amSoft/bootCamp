//Importar axios
import axios from "axios"

axios.get('https://ofi.omesa.es/deportes2.0/')
  .then(function (response) {

    // handle success
    console.log("sucess");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  ;

  