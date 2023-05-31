# Multi Language Serverless Micro-services
Template with 3 micro-services made in different languages deployed under the same API Gateway. You can create as many as the stack allows with any language you like.
All of them use AWS LAMBDA WEB ADAPTERS so they can run normal web apps on port 8080 and still respond to lambda calls.
## How to use it?
#### Install AWS CLI
Instructions can be found here.
#### deploy your app
```bash
sls deploy
```
#### Get the console url
Get the url displayed in your console and replace it in your calls (baseURL)
##### For accessing the Golang Micro-service
```bash
curl baseURL/go/api
```
##### For accessing the Node.js Micro-service
```bash
curl baseURL/js/api
```
##### For accessing the Python Micro-service
```bash
curl baseURL/py/api
```