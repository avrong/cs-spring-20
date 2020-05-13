let makeTableFromCountry = (c) => {
    let baseParams = ['Континент', 'Часть света', 'Разница во времени', 'Денежная единица'];
    return `<table width="100%" style="margin-bottom: 2em;">
                <thead>
                    <tr>
                        <th colspan="2">
                            <h1>${c[0]} — ${c[1]}</h1>
                        </th>
                    </tr>
                </thead>

                <tr>
                    <td>
                        <table width="75%" style="margin: 0 auto;">
                            ${
                                baseParams.map((v, i) => {
                                    return `<tr>
                                                <td><b>${v}</b></td>
                                                <td>${c[i]}</td>
                                            </tr>`;
                                }).join('\n')
                            }
                        </table>
                    </td>
                </tr>

                <tr>
                    <td colspan="2" style="text-align: center;"><b>Географические объекты:</b></td>
                </tr>
                ${
                    c[6].map((v, i) => {
                        return `<tr style="text-align: center;">
                                    <td colspan="2">${v}</td>
                                </tr>`;
                    }).join('\n')
                }

                <tr>
                    <td colspan="2" style="text-align: center;"><b>Литературные произведения:</b></td>
                </tr>
                ${
                    c[7].map((v, i) => {
                        return `<tr style="text-align: center;">
                                    <td colspan="2">${v[0]} «${v[1]}» (${v[2]})</td>
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
            </table>`
};

countries.forEach((country) => {
    return document.getElementById('content').innerHTML += makeTableFromCountry(country);
});
