class News {
    constructor () {
        this.key = '80df597e0ca14ef6894565929343e289';
        this.sources = `https://newsapi.org/v2/sources?apiKey=${this.key}`;
        this.source = null;
        this.url = null;
    }

    getNews () {
        this.updateUrl();
        return fetch(this.url).then(response => {
            return response.json();
        });
    }

    getSources () {
        return fetch(this.sources).then(response => {
            return response.json();
        });
    }

    setSource (source) {
        this.source = source;
    }

    updateUrl () {
        this.url = `https://newsapi.org/v2/everything?sources=${this.source}&apiKey=${this.key}`;
    }
}