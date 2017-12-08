import Retriever from './retriever';

export default class News extends Retriever {
    get () {
        return super.get().then(response => {
            return response.articles;
        });
    }
}
