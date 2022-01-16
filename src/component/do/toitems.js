import React ,{Component} from 'react'
import"./toitems.css"
const Todoitems=(props)=>{
  const {items}=props
  const deleteitem=props.delete
  const length=items.length
  const listitem=length?(
  items.map(e=>{

    return(
      <div key={e.id}>
         <span className="name">{e.name}</span>
         <span className="age">{e.age}</span>
        <span className="action icon" onClick={()=>deleteitem(e.id)}>&times;</span>

      </div>
)
})
  ):(

      <div>there is no item to show</div>
    )

  return(

    <div className="listitems">
    <span className="name title">name</span>
    <span className="age title">age</span>
    <span className="action title">action</span>
    {listitem}
    </div>
  )
}
export default Todoitems
