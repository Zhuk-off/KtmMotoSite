import axios from 'axios';

export async function postOrderForm(data) {
  // console.log('in postOrderForm data --- ', data);
  return await axios
    .post(
      'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/order.json',
      data
    )
    .then(function (response) {
      // console.log('response = ', response);
      return response;
    })
    .catch(function (error) {
      // console.log('error =====', error);
      return error;
    });
}
