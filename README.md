# Happy Day App

It is the application written for and used by the [artistic work "Happy Day"]() by [@constvigilance]().

It is a Web App consisting from the following components:

1. RFID-controller
   > _A python application that reads states of a few RFID-readers and whenever the state is changed, via the HTTP-server, it notifies the Browser-App on the new state._<br/>
   > This new state is considered to be a user "choice" which the Browser-App shall react to.
2. HTTP-Server
   > _A simple web-server that serves files and pushes the "choices" (notifications) from the RFID-controller to the Browser-App ._
3. Browser-App <br />
   (see [web-server/README.md](web-server/README.md))
   > _A single-page application which requests files from the HTTP-Server, and gets notified by the HTTP-Server on a new "choice"._<br/>
   > The application shows "scenes". Every scene has a video to play and a set of messages for user.<br/>
   > Reacting on "choices", the application shows messages and switches between scenes according to a predefined [scenario](web-server/public/images/scene_flow.jpg).<br/>

## To install

```bash
$ npm install
```

## To run the Application

### Production environment

```sh
# Start all components
$ npm run start
# Stop all components
$ npm run stop
# See the status (if components run)
$ npm run status
# See logs
npm run logs
# Monitor components
$ npm run monitor
```

### Development environment

To start the RFID-controller

```
$ npm run dev:contr
```

To start the HTTP server, run (in another terminal)

```
npm run dev:server
```

To start the Browser-App in the Chrome browser

```
$ npm run dev:brows
```

#### Play with it

Start components ([in dev environment](#Development environment)), then open terminal and try...

```
# Simulate a "choice" message from the RFID-controller
$ curl http://localhost:3000/publish/choice-msg/A-F-x

# Test switching pages
$ curl http://localhost:3000/publish/navigate-to-page/start
$ curl http://localhost:3000/publish/navigate-to-page/sceneA
$ curl http://localhost:3000/publish/navigate-to-page/sceneB
$ curl http://localhost:3000/publish/navigate-to-page/dev
```

Try the same from python:

```
$ python
>>> import requests as req
>>> req.get('http://localhost:3000/publish/choice-msg/A-F-x')
>>> req.get('http://localhost:3000/publish/navigate-to-page/start')
```

TODO: replace fake controller w/ the real one.
