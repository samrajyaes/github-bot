// Bootstrapped with npm init after closing repo from remote
// Then Create index.js file, used to make lot of commit for back dates
// data.json and modify the data n commit(file changed had to added to git, all using code)
// jsonfile module to write into json data file, then grab FILE path
// We can write any random val, we ll add time stamp...so install moment lib and import
// data obj which takes date..then write to file using writeFile(), run node index.js
// We should see data.json with written date, now we ready to do git operations
// To commit we need one more package - simple git. run npm -i simple-git
const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILEPATH = './data.json';

const makeCommit = n => {
    if(n===0) return simpleGit().push();
    const x = random.int(0,54);
    const y = random.int(0,6);
    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w')
    .add(y,'d').format();
    const data = {
        date : DATE
    }

    console.log(DATE);

    jsonfile.writeFile(FILEPATH, data, () => {
        simpleGit().add([FILEPATH]).commit(DATE, {'--date': DATE },
        makeCommit.bind(this, --n));
    });
}

makeCommit(100);

// To do git cadd n commit and make sure modify the date here
// git commit --date="" and also make it back date
// simpleGit().add([FILEPATH]).commit(DATE, {'--date': DATE});

// run node index.js and check git log, shows created ndw commit with current time stamp
// Add push to it
//simpleGit().add([FILEPATH]).commit(DATE, {'--date': DATE}).push();
// run node index.js and we can find pushed data in remote on browser

// Imp thing now is to edit dates,  use subract date
// const DATE = moment().subtract(1,'d').format();
