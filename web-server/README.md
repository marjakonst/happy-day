# Browser App

A single-page application.<br />
It gets notified by the HTTP-Server over the Web-Sockets on a new "choice" of a user.<br />

## Scenes

The application shows "scenes" according to the [scenario](public/images/scene_flow.jpg).<br/>

There are scenes of two "kinds":

- "choice" scene listens to user "choice", and, according to the "choice", switches to one of the pre-defined "connected" scenes
- "connector" scene, which, once called, switches to a single pre-defined connected scene<br />
  _(all scenes, including "connectors", listen and react to the ["service" (or dev) choices](#service-choices))_

Every scene has a video to play and a set of messages for user.<br />

### List of scenes

| Scene | Kind      | Choice triads<br />allowed | Scene(s)<br />connected | HTML-file<br />(in public/views/)               | Video file<br />(in public/videos)             |
|-------|-----------|----------------------------|-------------------------|-------------------------------------------------|------------------------------------------------|
| Start | Choice    | A-x-x, B-x-x               | A, B1                   | [sceneStart.html](public/views/sceneStart.html) | [videoStart.mp4](public/videos/videoStart.mp4) |
| End   | Connector | -                          | Start                   | [sceneEnd.html](public/views/sceneEnd.html)     | [videoEnd.mp4](public/videos/videoEnd.mp4)     |
| A     | Choice    | A-B-x, A-F-x               | AB2, AF                 | [sceneA.html](public/views/sceneA.html)         | [videoA.mp4](public/videos/videoA.mp4)         |
| AB2   | Connector | -                          | B2                      | [sceneAB2.html](public/views/sceneAB2.html)     | [videoAB.mp4](public/videos/videoAB.mp4)       |
| AF    | Connector | -                          | F                       | [sceneAF.html](public/views/sceneAF.html)       | [videoAF.mp4](public/videos/videoAF.mp4)       |
| B1    | Choice    | B-C-x, B-D-x               | B1C1, B1D1              | [sceneB1.html](public/views/sceneB1.html)       | [videoB.mp4](public/videos/videoB.mp4)         |
| B1C1  | Connector | -                          | C1                      | [sceneB1C1.html](public/views/sceneB1C1.html)   | [videoBC.mp4](public/videos/videoBC.mp4)       |
| B1D1  | Connector | -                          | D1                      | [sceneB1D1.html](public/views/sceneB1D1.html)   | [videoBD.mp4](public/videos/videoBD.mp4)       |
| B2    | Choice    | A-B-C, A-B-D               | B2C2, B2D2              | [sceneB2.html](public/views/sceneB2.html)       | [videoB.mp4](public/videos/videoB.mp4)         |
| B2C2  | Connector | -                          | C2                      | [sceneB2C2.html](public/views/sceneB2C2.html)   | [videoBC.mp4](public/videos/videoBC.mp4)       |
| B2D2  | Connector | -                          | D2                      | [sceneB2D2.html](public/views/sceneB2D2.html)   | [videoBD.mp4](public/videos/videoBD.mp4)       |
| C1    | Choice    | B-C-D, B-C-E               | C1D2, C1E               | [sceneC1.html](public/views/sceneC1.html)       | [videoC1.mp4](public/videos/videoC1.mp4)       |
| C1D2  | Connector | -                          | D2                      | [sceneC1D2.html](public/views/sceneC1D2.html)   | [videoCD.mp4](public/videos/videoCD.mp4)       |
| C1E   | Connector | -                          | E                       | [sceneC1E.html](public/views/sceneC1E.html)     | [videoCE.mp4](public/videos/videoCE.mp4)       |
| C2    | Connector | -                          | End                     | [sceneC2.html](public/views/sceneC2.html)       | [videoC2.mp4](public/videos/videoC2.mp4)       |
| D1    | Choice    | B-D-C, B-D-E               | D1C2, D1E               | [sceneD1.html](public/views/sceneD1.html)       | [videoD1.mp4](public/videos/videoD1.mp4)       |
| D2    | Connector | -                          | End                     | [sceneD2.html](public/views/sceneD2.html)       | [videoD2.mp4](public/videos/videoD2.mp4)       |
| D1C2  | Connector | -                          | C2                      | [sceneD1C2.html](public/views/sceneD1C2.html)   | [videoDC.mp4](public/videos/videoDC.mp4)       |
| D1E   | Connector | -                          | E                       | [sceneD1E.html](public/views/sceneD1E.html)     | [videoDE.mp4](public/videos/videoDE.mp4)       |
| E     | Connector | -                          | End                     | [sceneE.html](public/views/sceneE.html)         | [videoE.mp4](public/videos/videoE.mp4)         |
| F     | Choice    | A-F-C, A-F-E               | FC2, FE                 | [sceneF.html](public/views/sceneF.html)         | [videoF.mp4](public/videos/videoF.mp4)         |
| FC2   | Connector | -                          | C2                      | [sceneFC2.html](public/views/sceneFC2.html)     | [videoFC.mp4](public/videos/videoFC.mp4)       |
| FE    | Connector | -                          | E                       | [sceneFE.html](public/views/sceneFE.html)       | [videoFE.mp4](public/videos/videoFE.mp4)       |

### Supported "routes"

A "route" is a sequence of "scenes".<br />
Those "connector" scenes, which are demonstrated between "choice" scenes, are omitted here.<br />
_For example, there is the connector scene AB2 that "playing" between the scenes A and B2._

| Main (game) routes     | Sequence of "choice triads" |
|------------------------|-----------------------------|
| Start->A->B2->C2->End  | A-x-x, A-B-x, A-B-C         |
| Start->A->B2->D2->End  | A-x-x, A-B-x, A-B-D         |
| Start->A->F-C2->End    | A-x-x, A-F-x, A-F-C         |
| Start->A->F->E->End    | A-x-x, A-F-x, A-F-E         |
| Start->B1->C1-D2->End  | B-x-x, B-C-x, B-C-D         |
| Start->B1->C1->E->End  | B-x-x, B-C-x, B-C-E         |
| Start->B1->D1->C2->End | B-x-x, B-D-x, B-D-C         |
| Start->B1->D1->E->End  | B-x-x, B-D-x, B-D-E         |

| Special (dev) routes | choice triad  |
|----------------------|---------------|
| Return to Start      | \*-\*-RESTART |
| To previous scene    | \*-\*-BACK    |
| Show hidden buttons  | \*-\*-DEV     |

_("\*" - means any choice)_

## Choices

#### Choice IDs

Every _single choice_ are coded with of the following letters:

- A, B, C, D, E, F

#### Service choices

_There are special (aka "service" or dev) choices - RESTART, BACK, DEV._

### Choice triads

On a "route", a user is supposed to make 3 consecutive choices.
So it makes sense to deal with the "triad" of choices.<br />
A triad may be complete (if all 3 choices have been made), or incomplete (if the 2nd or 3rd choice is pending).

> The application is coded to react on a "choice triad" rather than on a "single choice".

##### Choice Triad IDs

The _triad of choices_ are coded according to the following template.

- <1st choice>-<2nd choice>-<3rd choice> <br />
  _where \<... choice\> is the choice ID, or, the char "x" if the choice is pending._

> Example:<br />
> A-B-x - user opted for A, then for B, and the 3rd choice is yet pending.

### Nicknames for "choices"

In views, choices are shown by its nicknames rather than choice IDs.

| choice ID | Nickname |
|-----------|----------|
| A         | APPLE    |
| B         | SWEETS   |
| C         | BREAD    |
| D         | TEA      |
| E         | CHILI    |
| F         | EGG      |
