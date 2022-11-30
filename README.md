# Team McCuen Arcade 2

Much happier with the _Nextron_ updates which allow me to use Nextjs with Electron.  Config is much easier and there are fewer dependencies to mess with.

## Nextron
No support for Next13 yet, but [it looks like](https://github.com/saltyshiomix/nextron) they are fairly up to data.

- A list of app [templates](https://github.com/saltyshiomix/nextron/tree/main/examples).
- A good [overview](https://blog.logrocket.com/building-app-next-js-electron/#building-a-demo-app).

## Configuration

### Arcade App Config

You can override the default config for the app and the games in `ini` files in the following locations:
* <home-dir>/Public/games/.teamMcCuen
* <home-dir>/Public/games/.roms

Here is a sample override for `.teamMcCuen`.
```ini
romConfigPath=/Users/douglasmccuen/Public/games/
retroArchPath=/Users/douglasmccuen/retroArch
retroArchExec=MacOS/RetroArch
retroArchCorePath=Resources/cores/
retroArchCoreExt=.dylib
mamePath=/Users/douglasmccuen/mame
mameExec=./mame
cwd=./

[keyMap]
back[]=d
back[]=ArrowLeft
forward[]=g
forward[]=ArrowRight
select[]=5
select[]=6
spin[]=e
spin[]=z
```

## Assets/Images

I can simply put the image assets for the UI in the public directory, but that might bloat the size of the app.  Ideally, the assests come from config as fully qualified URLs, and the images are pushed to AWS or other host.  This decouples the ROM config from the application, so new games can be added to the arcade without publishing a new version of the arcade.


### Electron Builder

- [Instructions](https://www.electron.build/configuration/configuration.html) for `electron-builder.yml`.
- [Publish](https://www.electron.build/configuration/publish) instructions.

## Workflows

No automation or basic checks yet, but there is a build and publish step.

### Secrets

You can log into AWS to get these values, or generate new ones.

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

## XArcade TankStick

The buttons on this thing are hard to map, but they trigger mouse and key codes.  When the Emulator is running, the keys have to be mapped in Mame or RetroArch before they will work.  When the Arcade app is running, the keys can be added to the .teamMcCuen config.

| Button | Key     | KeyCode | Mouse Button | Location              |
|--------|---------|---------|--------------|-----------------------|
|Player 1| 1       | 49      |              | white button, center  |
|Player 2| 2       | 50      |              | white button, center  |
|Exit    |         |         |              | red button (broken?)  |
|Select 1|         |         | 0            | left side, first      |
|Select 2| 3       | 51      |              | left side, second     |
|Select 3|         |         | 2            | right side, first     |
|Select 4| 4       | 52      |              | right side, second    |
|P1 L1   | Control | 17      |              | player 1, button 1    |
|P1 R1   | Alt     | 18      |              | player 1, button 2    |
|P1 X    | <SPACE> | 32      |              | player 1, button 3    |
|P1 Y    | Shift   | 16      |              | player 1, button 4    |
|P1 B    | z       | 90      |              | player 1, button 5    |
|P1 A    | x       | 88      |              | player 1, button 6    |
|P1 L2   | c       | 67      |              | player 1, button 7    |
|P1 R2   | 5       | 53      |              | player 1, button 8    |
|P1 L1   | a       | 65      |              | player 2, button 1    |
|P1 R1   | s       | 83      |              | player 2, button 2    |
|P1 X    | q       | 81      |              | player 2, button 3    |
|P1 Y    | w       | 87      |              | player 2, button 4    |
|P1 B    | e       | 69      |              | player 2, button 5    |
|P1 A    | [       | 219     |              | player 2, button 6    |
|P1 L2   | ]       | 221     |              | player 2, button 7    |
|P1 R2   | 6       | 54      |              | player 2, button 8    |