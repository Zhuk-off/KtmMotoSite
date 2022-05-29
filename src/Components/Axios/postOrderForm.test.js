import axios from 'axios';
import { postOrderForm } from './postOrderForm';

jest.mock('axios');

describe('postOrderForm async function', () => {
  it('function throw error', async () => {
    const badRequest = `Request failed with status code 404
          at createError (createError.js:16:1)
          at settle (settle.js:17:1)
          at XMLHttpRequest.onloadend (xhr.js:66:1)`;
    const error = new Error(badRequest);
    axios.post.mockResolvedValue(error);
    let postOrderRequest = await postOrderForm();

    expect(postOrderRequest.message).toEqual(error.message);
  });

  it('function work', async () => {
    const response = {
      data: {
        name: '-N2f7mVwv97hcZ5eU5-s',
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'cache-control': 'no-cache',
        'content-length': '31',
        'content-type': 'application/json; charset=utf-8',
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'post',
        url: 'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/order.json',
        data: '{"userName":"Жуков","phone":"375295116445","email":"Zhukoff.alexander@gmail.com","message":"Я хочу приобрести мотоцикл KTM 690 Enduro R 2022"}',
      },
      request: {},
    };
    const data = { phone: '+375295116445' };
    axios.post.mockResolvedValue(response);
    const postOrderRequest = await postOrderForm(data);
    expect(postOrderRequest.status).toBe(200);
  });
});
