import React  from 'react'

const CallbackUse = React.memo(({name,addCart}) => {
    console.log(`${name} - rendering`);
    
  return (
    <> 
    <h1>{name}</h1>
    <button onClick={addCart}>Add</button>
    </>
  )
})

export default CallbackUse