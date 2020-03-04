var months = ['#', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

function isObjectEmpty(object) {
    return Object.entries(object).length === 0 && object.constructor === Object
}

function parseDate(dateString) {
    let date = dateString.split('-').map(s => parseInt(s))
    return { year: date[0], month: date[1], day: date[2] }
}

function checkName(word, name) {
    return name.toLowerCase().includes(word.toLowerCase())
}

function parseEvents(events, filterWord='') {
    let sortedEvents = []

    for (let i = 0; i <= 12; i++) {
        sortedEvents.push({})
    }

    for (i in events) {
        let event = events[i]

        if (!checkName(filterWord, event.name)) {
            continue
        }

        let date = parseDate(event.date)

        if (!(date.day in sortedEvents[date.month])) {
            sortedEvents[date.month][date.day] = []
        }
        sortedEvents[date.month][date.day].push({ date: date, name: event.name, link: event.link })
    }

    return sortedEvents
}

function renderEvents(sortedEvents) {
    let r = ''

    let monthsIncluded = 13

    for (m in sortedEvents) {
        if (isObjectEmpty(sortedEvents[m])) {
            monthsIncluded -= 1
            continue
        }

        r += `<div class="month"><h2>${months[m]}</h2>`
        for (let d = 0; d <= 31; d++) {
            let day = sortedEvents[m][d];
            if (day === undefined) {
                continue
            }

            r += `<div class="day"><h3>${d}</h3>`
            for (e in sortedEvents[m][d]) {
                let event = sortedEvents[m][d][e]
                r += `<a target="_blank" href="${event.link}">${event.name}</a>`
            }
            r += `</div>`
        }
        r += `</div>`
    }

    if (monthsIncluded < 1) {
        r = String.raw`<h1>¯\_(ツ)_/¯</h1>`
    }

    return r
}

function updateContent(filterWord='') {
    document.getElementById('content').innerHTML = renderEvents(parseEvents(events, filterWord))
}

let search = document.getElementById('search')
search.addEventListener('input', function () {
    updateContent(search.value)
})

updateContent()
