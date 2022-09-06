# /usr/bin/python
# This simulates user actions resulting in RFID-readings
from time import sleep
import requests as req

def sendChoice(choice, pause):
  print("requesting " + choice)
  req.get('http://localhost:3000/publish/choice-msg/' + choice)
  print("waiting " + str(pause) + "s")
  sleep(pause)

def fakeUserChoices():
  # route Start->A->B2->C2->End
  sendChoice('A-x-x', 25)
  sendChoice('A-B-x', 20)
  sendChoice('A-B-C', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)


  # route Start->A->B2->D2->End
  sendChoice('A-x-x', 25)
  sendChoice('A-B-x', 20)
  sendChoice('A-B-D', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

  # route Start->A->F-C2->End
  sendChoice('A-x-x', 25)
  sendChoice('A-F-x', 20)
  sendChoice('A-F-C', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

  # route Start->A->F->E->End
  sendChoice('A-x-x', 25)
  sendChoice('A-F-x', 20)
  sendChoice('A-F-E', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

  # route Start->B1->C1-D2->End
  sendChoice('B-x-x', 25)
  sendChoice('B-C-x', 20)
  sendChoice('B-C-D', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

  # route Start->B1->C1->E->End
  sendChoice('B-x-x', 25)
  sendChoice('B-C-x', 20)
  sendChoice('B-C-E', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

  # route Start->B1-D1->C2->End
  sendChoice('B-x-x', 25)
  sendChoice('B-D-x', 20)
  sendChoice('B-D-C', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

  # route Start->B1-D1->E->End
  sendChoice('B-x-x', 25)
  sendChoice('B-D-x', 20)
  sendChoice('B-D-E', 45)
  # End->Start
  sendChoice('x-x-RESTART', 20)

if __name__ == "__main__":
  print("simulating RFID readings...")
  print("Ctr+c to cancel")

  fakeUserChoices()
