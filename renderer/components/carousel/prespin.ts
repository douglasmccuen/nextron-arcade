//import roulettewheel from './sound/roulettewheel.mp3'

const roulettewheel = '/audio/roulettewheel.mp3'

const prespin = (length: number) => {
  const sound = new Audio(roulettewheel)
  const play = sound.play.bind(sound);
  setTimeout(play, 100)
  
  const idx = Math.round(Math.random() * length);
  return Promise.resolve(idx)
}

export default prespin
