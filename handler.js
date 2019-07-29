const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject) => {
        docClient.scan({
            TableName: 'Cars',
        }, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data.Items);
        });
    });
};