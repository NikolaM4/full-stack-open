/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const PersonForm = ({ addPerson, writeName, writeNumber }) => {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={writeName} />
        </div>
        <div>
          number: <input onChange={writeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm
