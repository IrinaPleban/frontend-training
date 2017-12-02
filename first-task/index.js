const key = '80df597e0ca14ef6894565929343e289';
const url = `https://newsapi.org/v2/`;
const optionForSources = {
    key: key,
    url: `${url}sources?apiKey=${key}`
};
const sources = new Sources(optionForSources);

const optionForNews = {
    key: key
};
const news = new News(optionForNews);
let $newsBlock = null;

$(document).ready(function () {
    const $sourcesBlock = $('#sources');
    sources.getSources().then(sources => {
        for (const source of sources) {
            let option = $(`<option value="${source.id}">${source.name}</option>`);
            $sourcesBlock.append(option);
        }
    });
    $newsBlock = $('#news');
});

function btnShow () {
    const selectArr = selectElements();
    $newsBlock.empty();
    if (selectArr.length > 0) {
        sources.setSource(selectArr);
        news.setUrl(`${url}everything?sources=${sources.source}&apiKey=${key}`);
        renderMarkup();
    } else {
        alert('Select source(-s)');
    }
}

function selectElements () {
    const $sourcesBlock = $('#sources option:selected');
    const arr = [];
    for (const option of $sourcesBlock) {
        arr.push(option.value);
    }
    return arr;
}

function renderMarkup () {
    news.getNews().then(news => {
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