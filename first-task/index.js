const key = '80df597e0ca14ef6894565929343e289';
const optionForSources = {
    key: key,
    url: `https://newsapi.org/v2/sources?apiKey=${key}`
};
const sources = new Sources();
const optionForNews = {
    key: key,
    url: `https://newsapi.org/v2/everything?sources=${sources.source}&apiKey=${key}`
};
const news = new News();
const $newsBlock = $("#news");

$(document).ready(function () {
    const $sourcesBlock = $("#sources");
    sources.getSources().then(sources => function () {
        for (source of sources) {
            let option = $(`<option value="${source.id}">${source.name}</option>`);
            $sourcesBlock.append(option);
        }
    });

})
    
function btnShow() {
    const selectArr = $("#sources option:selected");
    if (selectArr.length > 0) {
        $newsBlock.empty();
        sources.setSource(selectArr);
        renderMarkup();
    } else {
        $newsBlock.empty();
        alert("Select source(-s)");
    }
}

/*function selectElements() {
    const $sourcesBlock = $("#sources option:selected");
    const arr = [];
    for (option of $sourcesBlock) {
        if (option.selected) arr.push(option.value);
    }
    return arr;
}*/

function renderMarkup() {  
    news.getNews().then(news => {
        for (article of news) {
            let $articleBlock = $("<div class='cell small-4'></div>");
            let author = (article.author) ? `<small class='label secondary'>${article.author}</small>` : "";
            $articleBlock.append($(`<h5><a href='${article.url}'>${article.title}</a> ${author}</h5>`));
            $articleBlock.append($(`<p>${article.description || ''}</p>`));
            $articleBlock.append($(`<a class='clear button' href='${article.url}'>Read more</a>`));
            $newsBlock.append($articleBlock);
        }
    });
}
