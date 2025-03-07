import React from 'react'

function NameList() {
    const persons=[
        {
          id: 1,
          name: 'Manoj',
          age: 25,
          skill: 'JavaScript'
        },
        {
          id: 2,
          name: 'Bharath',
          age: 30,
          skill: 'Python'
        },
        {
          id: 3,
          name: 'Aasim',
          age: 22,
          skill: 'React'
        },
        {
          id: 4,
          name: 'Ravi',
          age: 28,
          skill: 'Java'
        }
      ]
    let parsed=persons.map(({id,name,age,skill})=><tr key={id}>
    <td><h2>{id}</h2></td>
    <td><h2>{name}</h2></td>
    <td><h2>{age}</h2></td>
    <td><h2>{skill}</h2></td>
</tr>)
  return (
    <div align="center" >
        <table style = {{width:"100%"}}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Skill</th>
            </tr>
            </thead>
            <tbody>{parsed}</tbody>
        </table>
    </div>
  )
}

export default NameList