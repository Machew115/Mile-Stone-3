require('dotenv').config()
const fs= require('fs')
const S3 = require('aws-sdk/clients/s3')

//S3 Connection variables
    const bucketName = process.env.AWS_S3_BUCKET
    const region = process.env.AWS_S3_REGION
    const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID
    const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY_ID

    //Instantiate S3
const s3 = new S3({
     region,
    accessKeyId,
    secretAccessKey
})

//upload a file to S3
export function upload(file){
    const fileStream= fs.createReadStream(file.path)

    const uploadParams= {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile
