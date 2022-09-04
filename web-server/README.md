# Browser App

A single-page application.<br />
It gets notified by the HTTP-Server over the Web-Sockets on a new "choice" of a user.<br />

## Scenes

The application shows "scenes" according to the [scenario](public/images/scene_flow.jpg).<br/>

There are scenes of two "kinds":

- "choice" scene listens to user "choice", and, according to the "choice", switches to one of the pre-defined "connected" scenes
- "connector" scene, which, once called, switches to a single pre-defined connected scene

Every scene has a video to play and a set of messages for user.<br />

### List of scenes

| Scene | Kind      | Choice triads<br />allowed | Scene(s)<br />connected | HTML-file                                         |
| ----- | --------- | -------------------------- | ----------------------- | ------------------------------------------------- |
| Start | Choice    | A-x-x, B-x-x               | A, B                    | [start.html](public/views/start.html)             |
| A     | Choice    | A-B-x, A-F-x               | B2, F                   | [start.html](public/views/start.html)             |
| B1    | Choice    | B-C-x, B-D-x               | C1, D1                  | [sceneB1.html](public/views/sceneB1.html)         |
| B2    | Choice    | A-B-C, A-B-D               | C2, D2                  | [sceneB2.html](public/views/sceneB2.html)         |
| C1    | Choice    | B-C-E                      | E                       | [sceneC1.html](public/views/sceneC1.html)         |
| C2    | Connector | -                          | End                     | [sceneC2.html](public/views/sceneC2.html)         |
| D1    | Choice    | B-D-C, B-D-E               | C2, E                   | [sceneD1.html](public/views/sceneD1.html)         |
| F     | Choice    | A-F-C, A-F-E               | C2, E                   | [sceneF.html](public/views/sceneF.html)           |
| E     | Connector | -                          | End                     | [sceneE.html](public/views/sceneE.html)           |
| End   | Connector | -                          | Start                   | [end.html](public/views/end.html)                 |
| AB2   | Connector | -                          | B2                      | [connectAB2.html](public/views/connectAB2.html)   |
| AF    | Connector | -                          | F                       | [connectAF.html](public/views/connectAF.html)     |
| B1C1  | Connector | -                          | C1                      | [connectB1C1.html](public/views/connectB1C1.html) |
| B1D1  | Connector | -                          | D1                      | [connectB1D1.html](public/views/connectB1D1.html) |
| B2C2  | Connector | -                          | C2                      | [connectB2C2.html](public/views/connectB2C2.html) |
| B2D2  | Connector | -                          | D2                      | [connectB2D2.html](public/views/connectB2D2.html) |
| C1E   | Connector | -                          | E                       | [connectC1E.html](public/views/connectC1E.html)   |
| D1C2  | Connector | -                          | C2                      | [connectD1C2.html](public/views/connectD1C2.html) |
| D1E   | Connector | -                          | E                       | [connectD1E.html](public/views/connectD1E.html)   |
| FC2   | Connector | -                          | C2                      | [connectFC2.html](public/views/connectFC2.html)   |
| FE    | Connector | -                          | E                       | [connectFE.html](public/views/connectFE.html)     |

### Supported "routes"

A "route" is a sequence of "scenes".<br />
Those "connector" scenes, which are demonstrated between "choice" scenes, are omitted here.<br />
_For example, there is the connector scene AB2 that "playing" between the scenes A and B2._

| Main (game) routes    | Sequence of "choice triads" |
| --------------------- | --------------------------- |
| Start->A->B2->D2->End | A-x-x, A-B-x, A-B-D         |
| Start->A->B2->C2->End | A-x-x, A-B-x, A-B-C         |
| Start->A->F->E->End   | A-x-x, A-F-x, A-F-E         |
| Start->A->F-C2->End   | A-x-x, A-F-x, A-F-C         |
| Start->B1->D1-C2->End | B-x-x, B-D-x, B-D-C         |
| Start->B1->D1->E->End | B-x-x, B-D-x, B-D-E         |
| Start->B1-CD1->E->End | B-x-x, B-C-x, B-C-E         |

| Special (dev) routes | choice ID     |
| -------------------- | ------------- |
| Return to Start      | \*-\*-RESTART |
| To previous scene    | \*-\*-BACK    |
| To DEV MENU          | \*-\*-DEV     |

_("\*" - means any choice)_

## Choices

#### Choice IDs

Every _single choice_ are coded with of the following letters:

- A, B, C, D, E, F

_There are also "service" (or dev) choices, coded as RESTART, BACK, HISTORY._

### Choice triads

On a "route", a user is supposed to make 3 consecutive choices.
So it makes sense to deal with the "triad" of choices.<br />
A triad may be complete (if all 3 choices have been made), or incomplete (if the 2nd or 3rd choice is pending).

> The application is coded to react on a "choice triad" rather than on a "single choice".

##### Choice Triad IDs

The _triad of choices_ are coded according to the following template.

- <1st choice>-<2nd choice>-<3rd choice> <br />
  where <xxx choice> is the choice ID, or, for the pending (2nd or 3rd) choice is the char "x".
  > Example:
  > A-B-x - User opted first for A, then for B, and the 3rd choice is yet pending.

### Nicknames for "choices"

In views, choices are shown by its nicknames rather than choice IDs.

| choice ID | Nickname |
| --------- | -------- |
| A         | APPLE    |
| B         | SWEETS   |
| C         | BREAD    |
| D         | TEA      |
| E         | CHILI    |
| F         | EGG      |
