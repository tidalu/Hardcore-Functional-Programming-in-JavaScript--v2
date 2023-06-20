import {Task} from 'types'
const fs = required('fs')

const app = () => 
    fs.readFile('config.json','utf-8', (err, contents) => {
        console.log(err, contents)
        if(err) throw err

        const newContents = contents.replace(/3/g, '6')

        fs.readFile('config1.json', newContents, (err, _) => {
            if(err) throw err
            console.log('success')
        })
    })


app()