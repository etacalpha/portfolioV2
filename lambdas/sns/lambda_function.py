import boto3
import os
import json

sns_client = boto3.client('sns')
  
def lambda_handler(event,context):
  print(event['body'])
  message=json.loads(event['body'])
  try:  
    response = sns_client.publish(
      PhoneNumber=os.environ['Phone_Number'], 
      Message=f"{message['message']} \n from: {message['user']} \n contact: {message['contact']}"
    )

    print(response)
    return {
          "isBase64Encoded": False,
          "statusCode": 200,
          "headers": {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST,OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type'
          },
          "body": 'Message sent'
      }
  except Exception as e:
    print(e)
    return {
            "isBase64Encoded": False,
            'statusCode': 403,
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }