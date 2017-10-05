class BaseApi {
  constructor() {
    'ngInject';
  }

  getAll() {
    let path = this.ENDPOINT + this.BASE_URL + '/';
    let self = this;
    return new Promise((resolve, reject) => {
      self._http.get(path)
        .then((response) => {
          resolve(response)
        }, (err) => {
          reject(err);
        });
    });
  }

  getByField(field, value) {
    let path = `${this.ENDPOINT}${this.BASE_URL}/get/${field}/${value}`;
    let self = this;
    return new Promise((resolve, reject) => {
      self._http.get(path)
        .then((response) => {
          resolve(response)
        }, (err) => {
          reject(err);
        });
    });
  }

  add(data) {
    let path = this.ENDPOINT + this.BASE_URL + '/add';
    let self = this;

    return new Promise((resolve, reject) => {
      self._http.put(path, data)
        .then((response) => {
          resolve(response)
        }, (err) => {
          reject(err);
        });
    });
  }

  update(data) {
    let path = this.ENDPOINT + this.BASE_URL + '/update';
    let self = this;
    return new Promise((resolve, reject) => {
      self._http.post(path, data)
        .then((response) => {
          resolve(response)
        }, (err) => {
          reject(err);
        });
    });
  }

  delete(id) {
    let path = this.ENDPOINT + this.BASE_URL + '/delete';
    let self = this;
    return new Promise((resolve, reject) => {
      self._http.post(path, { id: id })
        .then((response) => {
          resolve(response)
        }, (err) => {
          reject(err);
        });
    });
  }

  upload(id, images) {
    let path = this.ENDPOINT + this.BASE_URL + '/upload';
    let self = this;

    return new Promise((resolve, reject) => {
      self._upload.upload({
        url: path,
        data: { file: images, id: id }
      }).then((response) => {
        resolve(response)
      }, (err) => {
        reject(err);
      });
    });
  }

}
export default BaseApi;