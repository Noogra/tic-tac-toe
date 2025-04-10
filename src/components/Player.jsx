import { useState } from "react"

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleClick() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)

    if (isEditing) {
      onChangeName(symbol, playerName)
    }
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
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {container}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}
