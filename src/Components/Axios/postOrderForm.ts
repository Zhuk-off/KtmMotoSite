import axios from 'axios'

export async function postOrderForm(data: string) {
  return await axios
    .post(
      'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/order.json',
      data
    )
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    })
}
