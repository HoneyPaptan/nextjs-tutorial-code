"use client"
function ManageError({error, reset}) {
  return (
    <div>{error.message} <button onClick={reset}>Try again</button> </div>
  )
}

export default ManageError