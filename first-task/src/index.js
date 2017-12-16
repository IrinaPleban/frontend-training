import $ from 'jquery';
import News from './news';
import Sources from './sources';
import 'foundation-sites/dist/css/foundation.min.css';
import Class1 from './class.json';

const key = '80df597e0ca14ef6894565929343e289';
const host = `https://newsapi.org/v2/`;
const optionForSources = {
    key,
    url: `${host}sources?apiKey=${key}`
};
const sources = new Sources(optionForSources);

const optionForNews = {
    key
};
const news = new News(optionForNews);
console.log('test plugin');
$(document).ready(function () {
    const $sourcesBlock = $('#sources');
    sources.get().then(sources => {
        for (const source of sources) {
            let option = $(`<option value="${source.id}">${source.name}</option>`);
            $sourcesBlock.append(option);
        }
    });

    $('#btnShow').click(btnShow);
});

function btnShow () {
    const $error = $('#error');
    const selectedOptions = getSelectedOptions();
    if (selectedOptions.length > 0) {
        $error.css('display', 'none');
        sources.source = selectedOptions;
        news.url = `${host}everything?sources=${sources.source}&apiKey=${key}`;
        renderNews();
    } else {
        $error.css('display', '');
    }
}

function getSelectedOptions () {
    const $selectedOptions = $('#sources option:selected');
    const result = [];
    for (const option of $selectedOptions) {
        result.push(option.value);
    }
    return result;
}

function renderNews () {
    news.get().then(news => {
        const $newsBlock = $('#news');
        $newsBlock.empty();
        for (const article of news) {
            const $articleBlock = $("<div class='cell small-4'></div>");
            const author = (article.author) ? `<small class='label secondary'>${article.author}</small>` : '';
            $articleBlock.append($(`<h5><a href='${article.url}'>${article.title}</a> ${author}</h5>`));
            $articleBlock.append($(`<p>${article.description || ''}</p>`));
            $articleBlock.append($(`<a class='clear button' href='${article.url}'>Read more</a>`));
            $newsBlock.append($articleBlock);
        }
    });
}
