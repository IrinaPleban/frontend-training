import Retriever from './retriever';

export default class Sources extends Retriever {
    constructor (options) {
        super(options);
        ({source: this._source} = options);
    }

    get () {
        return super.get().then(response => {
            return response.sources;
        });
    }

    set source (source) {
        this._source = source;
    }

    get source () {
        return this._source;
    }
}
