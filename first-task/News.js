class News {
    constructor (options) {
        this.key = options.key || null;
        this.url = options.url || null;
    }

    getNews () {
        return fetch(this.url).then(response => {
            return response.json();
        }).then(response => {
            return response.articles;
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
}