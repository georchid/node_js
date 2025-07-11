import fs from'fs'
import path from 'path'
const sourceDir = './files'
const destinationDir = './copied-files'

if (!fs.existsSync(sourceDir)) {
    console.warn(`Sourse dir ${sourceDir} doesn't exist!`)
    console.log('Exiting...')
    process.exit(0)
}

if (fs.existsSync(destinationDir)){
    fs.rmSync(destinationDir, { recursive: true})
    console.log('Destination dir removed')
}

fs.mkdirSync(destinationDir)

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }

    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName)
        const destinationPath = path.join(destinationDir, `${index}_${fileName}`)

        const readFileStream = fs.createReadStream(sourceFilePath)
        const writeFileStream = fs.createWriteStream(destinationPath)
        readFileStream.pipe(writeFileStream)
        writeFileStream.on('finish', () => {
            console.log(`File ${fileName} was copied`)
        })
    })
})