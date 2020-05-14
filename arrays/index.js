const makeTableFromCountry = (c) => {
    const baseParams = ['Континент', 'Часть света', 'Разница во времени', 'Денежная единица'];
    return `<table width="100%" style="margin-bottom: 2em;">
                <thead>
                    <tr>
                        <th colspan="2">
                            <h1>${c[0]} — ${c[1]}</h1>
                        </th>
                    </tr>
                </thead>

                <tr>
                    <td colspan="2">
                        <table width="75%" style="margin: 0 auto;">
                            ${
                                baseParams.map((v, i) => {
                                    return `<tr>
                                                <td><b>${v}</b></td>
                                                <td>${c[i+2]}</td>
                                            </tr>`;
                                }).join('\n')
                            }
                        </table>
                    </td>
                </tr>

                ${
                    c[6].map((v, i) => {
                        return `<tr>
                                    <td><b>${i == 0 ? "Географические объекты" : ""}</b></td>
                                    <td>${i+1}. ${v}</td>
                                </tr>`;
                    }).join('\n')
                }

                ${
                    c[7].sort((a, b) => a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0).map((v, i) => {
                        return `<tr>
                                    <td><b>${i == 0 ? "Литературные произведения" : ""}</b></td>
                                    <td>${i+1}. ${v[0]} «${v[1]}» (${v[2]})</td>
                                </tr>`;
                    }).join('\n')
                }

                <tr>
                    <td colspan="2" style="text-align: center;"><b>Исторические события:</b></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <table width="100%" border="1"><tr>
                            ${
                                Object.keys(c[8]).map((k, i) => {
                                    return `<td colspan="2"><small><b>${k}</b> — ${c[8][k]}</small></td>`;
                                }).join('\n')
                            }
                        </tr></table>
                    </td>
                </tr>
            </table>`;
};

const makeTimer = () => {
    const date = new Date();
    const studyStartDate = new Date('2020-09-01');
    const diff = Math.floor((studyStartDate - date) / 1000);

    const seconds = Math.floor(diff % 60);
    const minutes = Math.floor(diff % (60 * 60) / 60);
    const hours = Math.floor(diff % (60 * 60 * 24) / (60 * 60));
    const days = Math.floor(diff / (60 * 60 * 24));

    return `<table style="margin: 0 auto; width: 300px;">
                <tr style="text-align: center;">
                    <td colspan="4"><b>До начала 2020 учебного года</b></td>
                </tr>
                <tr style="text-align: center; font-size: 20px;">
                    <td>${days}</td>
                    <td>${hours}</td>
                    <td>${minutes}</td>
                    <td>${seconds}</td>
                </tr>
                <tr style="text-align: center;">
                    <td>дней</td>
                    <td>часов</td>
                    <td>минут</td>
                    <td>секунд</td>
                </tr>
            </table>`;
};

const showTimer = () => {
    document.getElementById('timer').innerHTML = makeTimer();
};

showTimer();
setInterval(showTimer, 1000);

countries.forEach((country) => {
    return document.getElementById('content').innerHTML += makeTableFromCountry(country);
});