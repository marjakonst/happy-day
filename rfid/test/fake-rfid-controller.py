# /usr/bin/python
# This is a fake controller
from time import sleep
import requests as req

if __name__ == "__main__":
  print("fake controller is running...")
  print("Ctr+c to cancel")

  # do nothing until stopped
  while True:
    sleep(1)
