const roms = {
  roms: [
    {
      game: 'alpinerd',
      name: 'Alpine Racer',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/alpineracer.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/22298-ingame-Alpine-Racer.jpg',
      rating: 5,
      description: 'This game is pretty cool, but it needs a computer faster than our little PC to run the super advanced animation.'
    },
    {
      game: 'boogwing',
      name: 'Boogie Wings',
      emulator: 'mame',
      image: '/images/better/boogiewings.png',
      preview: '/images/boogie-preview.png',
      rating: 5,
      description: 'Ragtime meets Steampunk?  Who knew this was a thing?  Your goal is to find the Santa level.'
    },
    {
      game: 'btimem',
      name: 'Burger Time',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/burgertime.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/BTIME.png',
      rating: 5,
      description: 'They were putting eggs on burgers before it was cool.  Don\'t forget to use your pepper.'
    },
    {
      game: 'cninja',
      name: 'Caveman Ninja',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/cninja.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/cninja.png',
      rating: 5,
      description: 'The objective of the game is to rescue the "Cave Babes" who were kidnapped by a rival tribe of cavemen.'
    },
    {
      game: 'centiped',
      name: 'Centipede',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/centepede.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/centipede.jpg',
      rating: 5,
      description: 'One of the most commercially successful games from the golden age of arcade video games.'
    },
    {
      game: 'crusnusa',
      name: "Cruis'n USA",
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/cruisinusa.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/15633-ingame-Cruisn-USA.jpg',
      rating: 5,
      description: 'Way, way back when the internet was delivered by telephone, we had to use a lot of imagination.'
    },
    {
      game: 'xmas_daze.sfc',
      name: 'Daze Before Christmas',
      emulator: 'retro',
      core: 'snes9x_libretro',
      image: '/images/better/daze_b4_xmas.jpeg',
      preview: '/images/daze-preview.jpeg',
      rating: 5,
      description: 'Ho, Ho, Ho.  Tis the season of playing games, and this is the best XMas game I found.'
    },
    {
      game: 'defenderb',
      name: 'Defender',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/defender.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/defender.png',
      rating: 3,
      description: 'I think the image says it all... there isn\'t much going on in this game.'
    },
    {
      game: 'digdug',
      name: 'Dig Dug',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/digdug.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9512-ingame-Dig-Dug.jpg',
      rating: 5,
      description: 'The player controls protagonist Dig Dug (Taizo Hori) to eliminate each screen\'s enemies.'
    },
    {
      game: 'dkong',
      name: 'Donkey Kong',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/dkong.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/dkong.png',
      rating: 5,
      description: 'Dad\'s favorite game of all time... Not sure he\'s seen anything beyond level 3.'
    },
    {
      game: 'doom.smc',
      name: 'Doom',
      emulator: 'retro',
      core: 'snes9x_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/doom.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/doom.jpg',
      rating: 5,
      description: 'The original first-person zombie shooter...'
    },
    {
      game: 'excitebk',
      name: 'Excite Bike',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/excitbkj.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/excitbkj.png',
      rating: 5,
      description: 'I still love the way they walk to get their bikes after a crash.  It must have hurt.'
    },
    {
      game: 'frogger',
      name: 'Frogger',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/frogger.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/frogger.png',
      rating: 5,
      description: 'Will frogger find love?  Don\'t let him down.'
    },
    {
      game: 'galaga',
      name: 'Galaga',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/galaga.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/galaga.jpg',
      rating: 5,
      description: 'All hail Galaga.  There is no Galaxian.'
    },
    {
      game: 'galaxian',
      name: 'Galaxian',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/galaxian.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/galaxian.png',
      rating: 4,
      description: 'There is no Galaga.  Only Galaxian.  (see what I did there?)'
    },
    {
      game: 'gauntlet.zip',
      name: 'Gauntlet',
      emulator: 'retro',
      core: 'mame_libretro',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/gauntletpreview.jpg',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/gauntlet.jpg',
      rating: 5,
      description: 'Warrior needs food, badly... I still say this at lunchtime.'
    },
    {
      game: 'gt2k.zip',
      name: 'Golden Tee 2K',
      emulator: 'retro',
      core: 'mame_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/goldentee2kpreview.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/goldentee2k.png',
      rating: 5,
      description: 'This golf game is really good.  Much better than the real thing.'
    },
    {
      game: 'indytemp',
      name: 'Indiana Jones',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/indianjones.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9812-title-Indiana-Jones-and-the-Temple-of-Doom.jpg',
      rating: 5,
      description: 'Cashing in.  They want your movie money, and all you\'re quarters.'
    },
    {
      game: 'joust',
      name: 'Joust',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/joust.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/joust.png',
      rating: 5,
      description: 'The developers of this game drive conversion vans with crazy paint jobs.'
    },
    {
      game: 'kungfum',
      name: 'Kung-fu Master',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/kungfumaster.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9894-ingame-Kung-Fu-Master.jpg',
      rating: 5,
      description: 'One of the many post-swim-practice video games at the YMCA.'
    },
    {
      game: 'Maelstrom.exe -fullscreen',
      name: 'Maelstrom',
      emulator: 'none',
      image: '/images/better/maelstrom.jpeg',
      preview: '/images/maelstrom-preview.jpeg',
      rating: 5,
      description: 'And here we have my Senior year in college.  Like Asteroids, but spicier.  The game, not my senior year.'
    },
    {
      game: 'marble',
      name: 'Marble Madness',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/marble.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/marble.png',
      rating: 5,
      description: 'Harder to play than I remember.  I may need a cheat code.'
    },
    {
      game: 'mpatrol',
      name: 'Moon Patrol',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mpatrol.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/mpatrol.png',
      rating: 5,
      description: 'Who is planting mines on the moon?  Nazis.'
    },
    {
      game: 'mwalk',
      name: 'Moonwalker',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mwalk.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/moonwalker.png',
      rating: 5,
      description: 'Finding an image for this game that wasn\'t an animated gif was hard.  There is just too much awesome to describe here.'
    },
    {
      game: 'mspacman',
      name: 'Ms Pacman',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mspacman.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/mspacman.jpg',
      rating: 5,
      description: 'And yet, she persisted.'
    },
    {
      game: 'pacman',
      name: 'Pacman',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/pacman.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/pacman.png',
      rating: 5,
      description: 'I find myself rooting for the ghosts.'
    },
    {
      game: 'paperboyr2',
      name: 'Paperboy',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/paperboy.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/paperboy.png',
      rating: 5,
      description: 'This game didn\'t have a joystick.  It had handlebars.  A literal game-changer.'
    },
    {
      game: 'Prince\\PRINCE.exe',
      name: 'Prince Of Persia',
      emulator: 'retro',
      core: 'dosbox_core_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/princeofpersia.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/princeofpersia.png',
      rating: 5,
      description: 'This was my Freshman year in college.  I\'d come back from class and find people in my room playing it on my computer.  Honest.  I went to class.'
    },
    {
      game: 'rampage',
      name: 'Rampage',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/rampage.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/rampage.png',
      rating: 5,
      description: 'Did the Rock make a movie about this game?'
    },
    {
      game: 'shinobi',
      name: 'Shinobi',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/shinobi.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/shinobi.png',
      rating: 5,
      description: 'The player controls ninja Joe Musashi, to stop the Zeed terrorist organization from kidnapping students of his clan.'
    },
    {
      game: 'spidman',
      name: 'Spiderman',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/spiderman.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10993-menu-Spider-Man-the-Videogame.jpg',
      rating: 5,
      description: 'For those of you unfamiliar with comic books, the "Spider Man" is a super hero who slings webs.'
    },
    {
      game: 'splatter',
      name: 'Splatter House',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/splatterhouse.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10630-ingame-Splatter-House.jpg',
      rating: 5,
      description: 'You must be this tall to play this game... Jamin, go ask your dad if it is ok.'
    },
    {
      game: 'spyhunt',
      name: 'Spy Hunter',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/spyhunter.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/spyhunt.png',
      rating: 5,
      description: 'Dante\'s Pizzaria in New Cumberland, PA.  Pizza, Coke, and this game!!!'
    },
    {
      game: 'sf2',
      name: 'Street Fighter 2',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/streetfighter2.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/sf2.jpg',
      rating: 5,
      description: 'I understand the kids like this game.'
    },
    {
      game: 'ssridersubc',
      name: 'Sunset Riders',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/sunsetriders.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10674-ingame-Sunset-Riders.jpg',
      rating: 5,
      description: 'Four bounty hunters named Steve, Billy, Bob, and Cormano are out to claim rewards for the most wanted outlaws in the West.'
    },
    {
      game: 'supermariobros.nes',
      name: 'Super Mario Bros',
      emulator: 'retro',
      core: 'nestopia_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariobrospreview.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariobros.jpg',
      rating: 5,
      description: 'A classic, and still fun to play.  I wish I knew all the cheats.'
    },
    {
      game: 'supermariokart.smc',
      name: 'Super Mario Kart',
      emulator: 'retro',
      core: 'snes9x_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariokartpreview.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariokart.jpg',
      rating: 5,
      description: 'The Wii really raised the bar for this game, but the original is still pretty fun.'
    },
    {
      game: 'supermarioworld.zip',
      name: 'Super Mario World',
      emulator: 'retro',
      core: 'snes9x_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermarioworlpreview.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermarioworld.png',
      rating: 5,
      description: 'I guess this is cooler that Super Mario Bros, but I never made it here.  Maybe someday...'
    },
    {
      game: 'superpunchout.smc',
      name: 'Super Punch Out!!',
      emulator: 'retro',
      core: 'snes9x_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/superpunchout.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/SuperPunchOut.jpg',
      rating: 5,
      description: 'Sorry, this is not the Mike Tyson version, but you might have fun anyway.'
    },
    {
      game: 'tmnt',
      name: 'Teenage Mutant Ninja Turtles',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/tmnt.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10754-ingame-Teenage-Mutant-Ninja-Turtles.jpg',
      rating: 5,
      description: 'The words Teenage and Mutant suck so much coolness out of the word Ninja, that it doesn\'t matter what follows.'
    },
    {
      game: 'atetris',
      name: 'Tetris',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/tetris.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/tetris.png',
      rating: 1,
      description: 'Hello, Sophmore year in college.'
    },
    {
      game: 'simpsons2p2',
      name: 'The Simpsons',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/simpsons.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10529-ingame-Simpsons-The.jpg',
      rating: 5,
      description: 'Eventually, you battle the bosses: Will Wright and Matt Groening.  I\'ve always wanted to hit Will with a vaccuum.'
    },
    {
      game: 'trackfld',
      name: 'Track and Field',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/trckfld.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/trackfld.png',
      rating: 5,
      description: 'Swim Camp at Shippensburg University.  We beat the snot out of those buttons.'
    },
    {
      game: 'zombies.smc',
      name: 'Ultimate Zombies Ate My Neighbors',
      emulator: 'retro',
      core: 'snes9x_libretro',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/Zombiepreview.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/ZombieAteMy02.jpg',
      rating: 5,
      description: 'LucasArts developed this game.  Seems like a slight diversion for the brand.'
    },
    {
      game: 'zaxxon',
      name: 'Zaxxon',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/zaxxon.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/zaxxon.png',
      rating: 5,
      description: 'We had this game on a 6 inch floppy disk, and the internet was a decade away.'
    },
  ]
}

export default roms
