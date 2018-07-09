import axios from 'axios'
import {
  domain,
  secret
} from '../config'

const instance = axios.create({
  baseURL: domain,
  timeout: 1000,
  headers: {
    'X-Secret-Key': secret
  }
});


const Request = class {
    constructor({ domain, secret }) {
        this.instance = axios.create({
            baseURL: domain,
            timeout: 1000,
            headers: {
              'X-Secret-Key': secret
            }
          });
    }

    post({ data, url, success, error }) {
        this.instance.post(url, data)
            .then(response => success(response))
            .catch(err => error(err))
    }
}

const HTTP = new Request({ domain, secret })
window._HTTP = HTTP