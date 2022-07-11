import { useSelector } from "react-redux"

function Display() {
  const gameIsPlaying = useSelector((state) => state.playing)

  return <p>{gameIsPlaying ? "Jeu en cours" : "c'est en pause"}</p>
}

export default Display
