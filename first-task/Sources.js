class Sources {
    constructor (option) {        
        this.url = option.url;
        this.source = null;
    }

    getSources () {
        return fetch(this.url).then(sources => {
            return sources.json().source;
        });
    }

    setSource (source) {
        this.source = source;
    }

}