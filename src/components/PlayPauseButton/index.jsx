import { useDispatch } from "react-redux"
import { playPause } from "../../store.js"

function PlayPauseButton() {
  const dispatch = useDispatch()

  return (
    <button id="player-1" onClick={() => dispatch(playPause())}>
      Pause / Reprendre
    </button>
  )
}

export default PlayPauseButton
