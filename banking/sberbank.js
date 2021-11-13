
const solve = async (page, sms) => {
    const input = await page.$('input')
    console.log(input)
    await input.type(sms)
    return
}

module.exports = solve