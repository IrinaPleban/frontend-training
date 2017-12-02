class Sources {
    constructor (options) {
        this.key = options.key || null;
        this.url = options.url || null;
        this.source = options.source || null;
    }

    getSources () {
        return fetch(this.url).then(response => {
            return response.json();
        }).then(response => {
            return response.sources;
        });
    }

    setUrl (url) {
        this.url = url;
    }

    getUrl (url) {
        return this.url;
    }

    setKey (key) {
        this.key = key;
    }

    getKey (key) {
        return this.key;
    }

    setSource (source) {
        this.source = source;
    }

    getSource (source) {
        return this.source;
    }

}