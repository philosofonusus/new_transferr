
const solve = (page, sms) => {
    const input = page.$('input')
    await input.type(sms)
}

module.exports = solve