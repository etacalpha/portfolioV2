import boto3
import os

sns_client = boto3.client('sns')
  
def lambda_handler(event,context):
  print(event)

  response = sns_client.publish(
    PhoneNumber=os.environ['Phone_Number'], 
    Message=f"{event['message']} from {event['user']} @ {event['contact']}"
  )

  print(response)
  return response