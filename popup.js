function convertDate(date) {
    let dateNew = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dateNew.toLocaleDateString("en-IN", options);
}

// add successfully cleared cache into paragraph with id "lastCleared"
function addCleared() {
    var p = document.getElementById("lastCleared");
    let date = new Date();
    p.innerHTML = "Successfully cleared cache " + convertDate(date);
    p.style.marginTop = "2rem";
}

// clear all cache history
document.getElementById("allHistory").addEventListener("click", function () {
    chrome.browsingData.removeCache({ "since": 0 }, function () {
        addCleared();
    });
});

// clear cache history from the past month
document.getElementById("pastMonth").addEventListener("click", function () {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    chrome.browsingData.removeCache({ "since": date.getTime() }, function () {
        addCleared();
    });
});

// clear cache history from the past week
document.getElementById("pastWeek").addEventListener("click", function () {
    let date = new Date();
    date.setDate(date.getDate() - 7);
    chrome.browsingData.removeCache({ "since": date.getTime() }, function () {
        addCleared();
    });
});

// clear cache history from the past day
document.getElementById("pastDay").addEventListener("click", function () {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    chrome.browsingData.removeCache({ "since": date.getTime() }, function () {
        addCleared();
    });
});

// clear cache history from the past hour
document.getElementById("pastHour").addEventListener("click", function () {
    let date = new Date();
    date.setHours(date.getHours() - 1);
    chrome.browsingData.removeCache({ "since": date.getTime() }, function () {
        addCleared();
    });
});

// clear cache history from the past minute
document.getElementById("pastMinute").addEventListener("click", function () {
    let date = new Date();
    date.setMinutes(date.getMinutes() - 1);
    chrome.browsingData.removeCache({ "since": date.getTime() }, function () {
        addCleared();
    });
});