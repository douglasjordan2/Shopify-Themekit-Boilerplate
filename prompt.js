const prompt = require('prompt-sync')()
const fs = require('fs')

const $STORE = 'STORE=' + prompt('Enter Store URL:')
const $PASSWORD = 'PASSWORD=' + prompt('Enter ThemeKit password:')
const $DEV = 'DEV_THEME=' + prompt('Enter development Theme ID:')
const $PROD = 'PROD_THEME=' + prompt('Enter production Theme ID:')

const variables = $STORE + '\n' + $PASSWORD + '\n' + $DEV + '\n' + $PROD 

fs.writeFile('./variables', variables, err => {
    if (err) { console.log(err) }
})

const gitignore = 'node_modules\npackage-lock.json\nconfig.yml\nvariables'

fs.writeFile('./.gitignore', gitignore, err => {
    if (err) { console.log(err) }
})