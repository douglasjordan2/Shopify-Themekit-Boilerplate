const fs = require('fs')
const readline = require('readline')

const rl = readline
    .createInterface({
        input: process.stdin,
        output: process.stdout
    })

const gitignoreWriteStream = fs.createWriteStream('./.gitignore')
gitignoreWriteStream.write('node_modules\npackage-lock.json\nconfig.yml\nvariables')
gitignoreWriteStream.close()

const variableWriteStream = fs.createWriteStream('./variables')

rl.question('Enter Store URL: ', $STORE => {
    rl.question('Enter ThemeKi0t password: ', $PASSWORD => {
        rl.question('Enter development Theme ID: ', $DEV => {
            rl.question('Enter development Theme ID: ', $PROD => {
                variableWriteStream.write(Object.entries({
                    'STORE': $STORE,
                    'PASSWORD': $PASSWORD,
                    'DEV': $DEV,
                    'PROD': $PROD
                }).map(([key, value]) => `${[key]}=${value}\n`).join(''))

                rl.close()
            })
        })
    })
})

rl.on('close', () => {
    variableWriteStream.close()
})