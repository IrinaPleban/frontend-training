export default class Sources {
    constructor (options) {
        ({key: this._key, url: this._url, source: this._source} = options);
    }

    getSources () {
        return fetch(this._url).then(response => {
            return response.json().then(response => {
                return response.sources;
            });
        });
    }

    set url (url) {
        this._url = url;
    }

    get url () {
        return this._url;
    }

    set key (key) {
        this._key = key;
    }

    get key () {
        return this._key;
    }

    set source (source) {
        this._source = source;
    }

    get source () {
        return this._source;
    }
}