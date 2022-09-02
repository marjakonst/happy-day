# /usr/bin/python
# This is a fake controller
from time import sleep
import requests as req

def fakeUserChoices():
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/B-x-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-D-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-D-E')
  sleep(15)
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/A-F-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/A-F-C')
  sleep(15)
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/A-F-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/A-F-E')
  sleep(15)
  req.get('http://localhost:3000/publish/choice-msg/B-x-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-D-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-D-E')

if __name__ == "__main__":
  print("fake controller is running...")
  print("Ctr+c to cancel")

  # Let's simulate readings of RFID-sensors
  sleep(10)
  fakeUserChoices()

  # then do nothing until stopped
  while True:
    sleep(1)
