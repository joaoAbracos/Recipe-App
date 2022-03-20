
import axios  from 'axios'
function ApiCall(props) {
  const url = 'http://localhost/api/api.php';
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: props,
            url,
        };
        axios(options).then(function (response) {
            console.log(response.data);
        });;
}

export default ApiCall