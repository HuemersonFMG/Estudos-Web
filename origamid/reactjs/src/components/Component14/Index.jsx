import { useState } from "react"

const Index = () => {
  const [name, setName] = useState();

  return (
    <>
      <h1>Component 14</h1>

      <section>
        <h2>Elementos de Formulário - Input/Text</h2>
        
        <label htmlFor="name">Name</label> {' '}
        <input id="name" type="text" value={name} onChange={({target}) => setName(target.value)} />
        <p>{name}</p>
      </section>
      <br /><hr /><br />
    </>
  )
}

export default Index
