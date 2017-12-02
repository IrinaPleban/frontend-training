class News {
    constructor (options) {
        ({key: this._key, url: this._url} = options);
    }

    getNews () {
        return fetch(this._url).then(response => {
            return response.json().then(response => {
                return response.articles;
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
}
