const solve = async (page, sms) => {
    const input = await page.$('body > main > .form > .tr > .ti')
    console.log(input)
    await input.type(sms)
    return
}

module.exports = solve