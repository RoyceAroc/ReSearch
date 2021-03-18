document.getElementById("search").addEventListener("click", myFunction);

function myFunction(){
    console.log(document.getElementById("question").value);
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        tab_title = tab.title;
        chrome.tabs.executeScript(tab.id, {
            code: 'document.body.innerText'
        }, function(result) {
            qna.load().then(model => {
                model.findAnswers(document.getElementById("question").value, String(result)).then(answers => {
                    chrome.tabs.executeScript(tab.id, {
                        code: '$(window).scrollTop($("*:contains(' + answers[0].text + '):last").offset().top-200);$("*:contains(' + answers[0].text + '):last").css("background-color", "lightblue");'
                    }, function(result) {console.log(result) });
                });
            });
        });
    });
}