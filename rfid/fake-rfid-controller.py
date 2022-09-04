# /usr/bin/python
# This is a fake controller
from time import sleep
import requests as req

def fakeUserChoices():
  # route Start->A->B2->C2->End
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/A-B-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/A-B-C')
  # End->Start
  sleep(15)

  # route Start->A->B2->D2->End
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/A-B-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/A-B-D')
  # End->Start
  sleep(15)

  # route Start->A->F-C2->End
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/A-F-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/A-F-C')
  # End->Start
  sleep(15)

  # route Start->A->F->E->End
  req.get('http://localhost:3000/publish/choice-msg/A-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/A-F-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/A-F-E')
  # End->Start
  sleep(15)

  # route Start->B1->C1-D2->End
  req.get('http://localhost:3000/publish/choice-msg/B-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/B-C-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-C-D')
  # End->Start
  sleep(15)

  # route Start->B1->C1->E->End
  req.get('http://localhost:3000/publish/choice-msg/B-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/B-C-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-C-E')
  # End->Start
  sleep(15)

  # route Start->B1-D1->C2->End
  req.get('http://localhost:3000/publish/choice-msg/B-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/B-D-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-D-C')
  # End->Start
  sleep(15)

  # route Start->B1-D1->E->End
  req.get('http://localhost:3000/publish/choice-msg/B-x-x')
  sleep(4)
  req.get('http://localhost:3000/publish/choice-msg/B-D-x')
  sleep(6)
  req.get('http://localhost:3000/publish/choice-msg/B-D-E')
  # End->Start
  sleep(15)

if __name__ == "__main__":
  print("fake controller is running...")
  print("Ctr+c to cancel")

  # Let's simulate readings of RFID-sensors
  sleep(10)
  fakeUserChoices()

  # then do nothing until stopped
  while True:
    sleep(1)
