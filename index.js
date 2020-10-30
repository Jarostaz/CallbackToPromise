const fs = require('fs');

async function greeting(){
    //read greeting.txt
    const greetingContents = await new Promise(resolve => fs.readFile('greeting.txt', 'utf-8', (err, res) => resolve(res)));
    console.log(greetingContents);
}

greeting();