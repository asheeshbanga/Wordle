import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className="modal">
        {isCorrect && turn === 1 && (
            <div>
                <h1>You Win!</h1>
                <p className="solution">Word: {solution}</p>
                <p>You found the solution in {turn} guess</p>
            </div>
        )}
        {isCorrect && turn > 1 && (
            <div>
                <h1>You Win!</h1>
                <p className="solution">Word: {solution}</p>
                <p>You found the solution in {turn} guesses</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Unluckeeee</h1>
                <p className="solution">Word: {solution}</p>
                <p>Better luck next time...</p>
            </div>
        )}
    </div>
  )
}
