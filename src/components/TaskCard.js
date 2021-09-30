// We are deconstructing the props object directly in the parentheses of the function
import axios from 'axios'

function TaskCard({ title, description, _id }) {
  // //Hacemos un put porq es modificar

  // const handleSubmitTask= (e) =>{
  //   axios.put('/tasks', updatedTask)
  //   .then(()=>{}) //==> BODY = VALORES DEL INPUT
  // } 

  return (
    <div className="TaskCard card">
      <h3>{title}</h3>
      <h4>Description:</h4>
      <p>{description}</p>
      {/* para hacer un edit de la descripcion hacemos un input 
      <input value ={description}/>
      <button onClick=(handleSubmitTask)> Modificar </button>
      */}
    </div>
  );
}

export default TaskCard;

