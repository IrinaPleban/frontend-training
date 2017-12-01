class News {
    constructor (option) {
        this.key = option.key;
        this.url = option.url || null;
    }

    getNews () {
        //this.updateUrl();
        return fetch(this.url).then(news => {
            return news.json().articles;
        });
    }

    updateUrl () {
        this.url = `https://newsapi.org/v2/everything?sources=${this.source}&apiKey=${this.key}`;
    }
}