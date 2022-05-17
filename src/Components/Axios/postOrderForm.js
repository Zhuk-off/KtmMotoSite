import axios from 'axios';

export async function postOrderForm(data) {
  await axios
    .post(
      'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/order.json',
      data
    )
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
