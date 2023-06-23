function showOnlyLikedAdMetrics() {
    document
        .querySelectorAll('tr.rated-well')
        .forEach((el) => el.style.display = 'table-row')

    document
        .querySelectorAll('tr:not(.rated-well):not(.tr-head)')
        .forEach((el) => el.style.display = 'none')
}

function showOnlyDislikedAdMetrics() {
    document
        .querySelectorAll('tr.rated-badly')
        .forEach((el) => el.style.display = 'table-row')

    document
        .querySelectorAll('tr:not(.rated-badly):not(.tr-head)')
        .forEach((el) => el.style.display = 'none')
}

function showOnlyUnratedAdMetrics() {
    document
        .querySelectorAll('tr.unrated')
        .forEach((el) => el.style.display = 'table-row')

    document
        .querySelectorAll('tr.rated-badly,tr.rated-well')
        .forEach((el) => el.style.display = 'none')
}

function showAll() {
    document
        .querySelectorAll('tr')
        .forEach((el) => el.style.display = 'table-row')
}