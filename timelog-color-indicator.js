// #wt1_Everest_wt27_block_wtBodyContaienr_wtTimelogContent
// each table
// each tr
// td[1] and td[2]

const manDay = 8
const lavenderBlush = 'rgb(255, 240, 245)'
const dayIds = ['#Monday', '#Tuesday', '#Wednesday', '#Thursday', '#Friday']

let dtes = $('tr[id=DayTotalEffort]')
let isHolidays = []
let filledHours = []

dtes.each(function () {
    let dte = $(this)
    
    for (let i = 0; i < dayIds.length; i++) {
        isHolidays[i] = dte.find(dayIds[i]).css('background-color') === lavenderBlush
        filledHours[i] = +dte.find(dayIds[i]).find('span').text()
        
        if (!isHolidays[i] && filledHours[i] === manDay) {
            dte.find(dayIds[i]).css('background-color', '#42f58d')
        } else if (!isHolidays[i]) {
            dte.find(dayIds[i]).css('background-color', '#ed6464')
        }
    }
})

$('#wt1_Everest_wt27_block_wtBodyContaienr_wtTimelogContent')
    .find('table').find('tr').each(function (index) {
        let tds = $(this).children('td')
        let plannedEffort = +tds.eq(1).find('span').text()
        let actualEffort = +tds.eq(2).find('span').text()

        if (plannedEffort > actualEffort) {
            tds.eq(2).css('background-color', '#ede264')

            let remToWork = plannedEffort - actualEffort
            let currentIndex = 0
            do {
                if (currentIndex === 5) {
                    break
                }
                
                if (!isHolidays[currentIndex] && filledHours[currentIndex] < manDay) {
                    let remToFill = manDay - filledHours[currentIndex]
                    let rem = remToWork > remToFill ? remToFill : remToWork

                    if (rem > 0) {
                        let filledPercent = filledHours[currentIndex] / manDay * 100
                        let percent = rem / manDay * 100 + filledPercent
                        
                        tds.eq(currentIndex + 3)
                            .css('background',
                                 `linear-gradient(to right,
                                    white ` + filledPercent + `%,
                                    #bdf2d3 ` + filledPercent + `%,
                                    #bdf2d3 ` + percent + `%,
                                    white ` + percent + `%)`)
                        tds.eq(currentIndex + 3).find('input').attr('placeholder', rem)
                        
                        remToWork -= rem
                        filledHours[currentIndex] += rem
                    }
                }

                currentIndex++
            } while (remToWork > 0)            
        } else if (plannedEffort === 0) {
            tds.eq(2).css('background-color', '#4287f5')
            tds.eq(2).css('color', '#fff')
        }
    })

$('body').append('<style>::placeholder{color:#AAA;font-size:12px}</style>')
