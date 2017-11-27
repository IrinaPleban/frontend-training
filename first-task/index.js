var news = new News();

$(document).ready(function () {    
    let $sourcesBlock = $("#sources");
    news.getSources().then(response => {
        let sources = response.sources;
        for (source of sources) {
            let option = $(`<option value="${source.id}">${source.name}</option>`);
            $sourcesBlock.append(option);
        }
    });
})
    
function btnShow() {
    let $newsBlock = $("#news");
    let selectArr = selectElements();
    if (selectArr.length > 0) {
        $newsBlock.empty();
        news.setSource(selectArr);
        renderMarkup();
    } else {
        $newsBlock.empty();
        alert("Select source(-s)");
    }
}

function selectElements() {
    let $sourcesBlock = $("#sources option");
    const arr = [];
    for (option of $sourcesBlock) {
        if (option.selected) arr.push(option.value);
    }
    return arr;
}

function renderMarkup() {
    news.getNews().then(response => {        
        let news = response.articles;
        let i = 0;
        let $newsBlock = $("#news");
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
