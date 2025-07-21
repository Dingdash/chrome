const https = require('https')
const fs = require('fs')
const path = require('path')


const versionTxt = path.resolve('version.txt')
    fs.writeFileSync(versionTxt, '0.0.5' + '\n')

