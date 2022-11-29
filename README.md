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

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
