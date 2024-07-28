import shortCode from '../languageCodes/shortCode.json' assert { type: 'json' };
async function handleHomePage(req, res) {
    return res.render('home', { shortCode });
}
export { handleHomePage };
