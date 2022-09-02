# Happy Day Server

"Happy Day" is a WebApp consisting from the following components:

1. RFID-controller
   > _A python application that reads states of a few RFID-readers and whenever the state is changed, via the HTTP-server, it notifies the Browser-App on the new state._<br/>
   > This new state is considered to be a user "choice" which the Browser-App shall react to.
2. HTTP-Server
   > _A simple web-server that serves files and pushes the "choices" (notifications) from the RFID-controller to the Browser-App ._
3. Browser-App
   > _A single-page application which requests files from the HTTP-Server, and gets notified by the HTTP-Server on a new "choice"._<br/>
   > The application shows "scenes". Every scene has a video to play and a set of messages for user.<br/>
   > Reacting on "choices", the application shows messages and switches between scenes according to a predefined [scenario](web-server/public/images/scene_flow.jpg).<br/>

## To install

```bash
# For development
$ npm install
# For production
$ npm install --production
```

## To run the HTTP-Server

```
# In dev environment
npm run dev
# In prod environment
npm start
```

### Play with it

1. Point your browser to [http://localhost:3000](http://localhost:3000)
2. In another terminal try:

```sh
# Simulate a "choice" message from the RFID-controller
$ curl http://localhost:3000/publish/choice-msg/A-F-x

# Test switching pages
$ curl http://localhost:3000/publish/navigate-to-page/start
$ curl http://localhost:3000/publish/navigate-to-page/sceneA
$ curl http://localhost:3000/publish/navigate-to-page/sceneB
$ curl http://localhost:3000/publish/navigate-to-page/dev
```

3. Try the same from python:

```
$ python
>>> import requests as req
>>> req.get('http://localhost:3000/publish/choice-msg/A-F-x')
>>> req.get('http://localhost:3000/publish/navigate-to-page/start')
```

#### TODO:

1. Add a process manager that starts and monitors components.
