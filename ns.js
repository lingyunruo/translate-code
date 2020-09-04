const https = require('https');
const querystring = require('querystring');
const cheerio = require('cheerio');
const fse = require('fs-extra');
const path = require('path');

const data = {};
let i = 1;
const tmp = (num) => {
    return `1902050${num}`
}

function getAccount(userName) {
    const postData = querystring.stringify({
        username: userName,
        myselect: 2
    });
    
    
    const req = https.request({
        hostname: 'i.lnut.edu.cn',
        port: 443,
        path: '/appsystem/ihome/service/mmrzwt/yuliuyouxiang.ws',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    }, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            const $ = cheerio.load(chunk);
    
            let name = $('#account').val();
            let value = $('#ylyouxiang').val();
    
            if(value) {
                data[name] = value;
            }
        })

        res.on('end', () => {
            i++;
            if(i < 80) {
                let num = i < 10 ? '0' + i : i;
                getAccount(tmp(num));
            }
            else {
                fse.outputFileSync(path.join(__dirname, './data.json'), JSON.stringify(data, null, '\t'), {
                    encoding: 'utf-8'
                });
            }
        });
    });

    req.write(postData);
    req.end();
}

getAccount(tmp(01));