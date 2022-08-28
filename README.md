# Happy Day Server

"Happy Day" is a WebApp consisting from the following components:

1. RFID-controller
   > _A python application that reads states of a few RFID-readers and whenever the state is changed, via the HTTP-server, it notifies the Browser-App on the new state._
2. HTTP-Server
   > _A simple web-server that serves files to the Browser-App, and it pushes notifications received from the RFID-controller to the Browser-App._
3. Browser-App
   > _A single-page application which requests files from the HTTP-Server, and gets notified by the HTTP-Server on a new state the RFID-reader detects._ >_The application is supposed to play different videos in a certain sequence in response to changes of RFID-reader states._

## To install

```bash
$ npm install --production
```

## To run the HTTP-Server

```
# In dev environment
npm run dev
# In prod environment
npm start
```

Play with it:

1. Point your browser to [http://localhost:3000](http://localhost:3000)
2. In another terminal try:

```sh
$ curl http://localhost:3000/publish/controller-msg/start
$ curl http://localhost:3000/publish/controller-msg/sceneA
$ curl http://localhost:3000/publish/controller-msg/sceneB
$ curl http://localhost:3000/publish/controller-msg/dev
```

3. Try the same from python:

```
$ python
>>> import requests as req
>>> req.get('http://localhost:3000/publish/controller-msg/start')
```

#### TODO:

1. Add a simple state manager to the Browser-App;
2. Make the state manager define the logic of video/subtitle switching.
