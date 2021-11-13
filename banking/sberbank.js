
const solve = async (page, sms) => {
    const input = await page.$('#psw_id')
    console.log(input)
    await input.type(sms)
    return
}

module.exports = solve