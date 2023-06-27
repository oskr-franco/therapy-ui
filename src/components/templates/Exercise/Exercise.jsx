import React from 'react'

function Exercise({ exercise }) {
  return (
    <div>
      Exercise {exercise.id}
      <pre>{ JSON.stringify(exercise)}</pre>
    </div>
  )
}

export default Exercise;
