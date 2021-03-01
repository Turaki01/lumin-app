import { instance } from './axios'
// eslint-disable-next-line
export default {
    getData: (data) =>
        instance({
            method: 'POST',
            data
        })
}