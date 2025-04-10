import { useState } from "react"

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleClick() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let btnCaption = "Edit"
  let container = <span className="player-name">{playerName}</span>

  if (isEditing) {
    container = (
      <input type="text" required value={playerName} onChange={handleChange} />
    )
    btnCaption = "Save"
  }

  return (
    <li>
      <span className="player">
        {container}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}
