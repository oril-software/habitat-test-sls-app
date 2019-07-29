const AWS = require('aws-sdk');

module.exports.getAll = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    return new Promise(resolve => {
        const response = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            }
        };
        docClient.scan({
            TableName: 'Cars',
        }, (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.body = JSON.stringify(err);
            } else {
                response.statusCode = 200;
                response.body = JSON.stringify(data.Items);
            }
            resolve(response);
        });
    });
};