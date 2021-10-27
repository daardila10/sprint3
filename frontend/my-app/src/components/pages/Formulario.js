import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Form , Button, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import React from 'react';

// import './App.css';
import './App.css';

function Formulario () {
  const [barcode_add, set_barcode_add] = useState(0);   
  const [description_add, set_description_add] = useState("");
  const [unit_cost_add, set_unit_cost_add]= useState(0);
  const [state_add, set_state_add] = useState("true");

  const add_product_db= () => {
    console.log(barcode_add+description_add+unit_cost_add+state_add)

  const [barcode_update, set_barcode_update] = useState(0);  
  const [description_update, set_description_update] = useState("");
  const [unit_cost_update, set_unit_cost_update]= useState(0);
  const [state_update, set_state_update] = useState("true");
  const [id_update, set_id_update] = useState(0); 

  const [products, set_products] = useState([])

//  M permite aceeder a las variables de estado o dependencia
  useEffect(() => {
    Axios.get('http://localhost:3001/api/v1/product/list').then((res) =>{
      console.log(res.data.products)
      set_products(res.data.products)
  });
  },[])

  const add_product_db = () => {
    console.log(barcode_add+description_add+unit_cost_add + state_add)
    Axios.post('http://localhost:3001/api/v1/product/add',{
      barcode : barcode_add,
      description : description_add,
      unit_cost : unit_cost_add,
      state : state_update
    });
  }
  const delete_product = (_id) => {
     Axios.delete('http://localhost:3001/api/v1/product/delete/'+ _id)
  }


  const update_product = (_id) => {
    console.log(_id)
    Axios.put('http://localhost:3001/api/v1/product/update',{
      _id: _id,
      barcode : barcode_update,
      description : description_update,
      unit_cost : unit_cost_update,
      state : state_update
    });
  }

  return (
  
       <div className="App">
      <header className="App-header">
          <h1>Desarrollando</h1>
      </header>
      <Container>
        <h1>CRUD PRODUCTOS</h1>
{/* inicio formulario productos nuevos */}
        <Form>
  <Form.Group className="mb-3" controlId="formBasicBarcode">
    <Form.Label>Codigo de Barras</Form.Label>
    <Form.Control type="number" placeholder="Ingrese el codigo de barras" onChange = {(e)=> {
      set_barcode_add(e.target.value);
    }}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDescription">
    <Form.Label>Descripcion</Form.Label>
    <Form.Control type="text" placeholder="Ingrese el nombre del productos" onChange = {(e)=> {
      set_description_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUnitCost">
    <Form.Label>Costo por unidad</Form.Label>
    <Form.Control type="number " placeholder="ingrese el costo unitario" onChange = {(e)=> {
      set_unit_cost_add(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUnitCosto"> 
  <Form.Check
  inline
  label = "Disponible"
  name = "estado"
  type = "radio"
  id = '1' onClick = {(e)=> {
    set_state_add("true");
  }}
  />
  <Form.Check
  inline
  label = "Agotado"
  name = "estado"
  type = "radio"
  id = '0' onClick = {(e)=> {
    set_state_add("false");
  }}
  />
  </Form.Group>

  <Button variant="primary"  onClick = {add_product_db}>
    Guardar
  </Button>
</Form>
{/* fin  formulario productos nuevos productos */}

  <hr />

{/* inicio tabla */}
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Codigo de Barras</th>
      <th>Descripcion</th>
      <th>costo unidades</th>
      <th>estado</th>
      <th>actualizar</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((value, key) =>
        <tr>
          <td>{key}</td>
          <td>{value.barcode}</td>
          <td>{value.description}</td>
          <td>{value.unit_cost}</td>
          <td>{value.state.toString()}</td>
          <td>
            <Button variant="warning" onClick = {
              ()=>{
                set_id_update(value._id);
                set_barcode_update(value.barcode);
                set_description_update(value.description);
                set_unit_cost_update(value.unit_cost);
                set_state_update(value.state.toString());

                document.getElementById('barcode_update').defaultValue= value.barcode;
                document.getElementById('description_update').defaultValue= value.description;
                document.getElementById('unit_cost_update').defaultValue= value.unit_cost;
               
              }
          }>Editar</Button>
          </td>

          <td>
            <Button variant="danger"  onClick ={() => delete_product(value._id)
            }>Eliminar
            </Button>
          </td>

        </tr>
      )
    }
    
  </tbody>
</Table>
{/* fin tabla */}
{/* Una lina para separar la tabla de lista del form de editar productos */}
<hr />
{/* aquí inicia el form de editar los productos */}
<Form>
  <Form.Group className="mb-3" controlId="formBasicBarcode">
    <Form.Label>Codigo de baras</Form.Label>
    <Form.Control disabled= 'true' id='barcode_update' type="number" placeholder="aquí va el codebar del prod a" onChange = {(e)=> {
      set_barcode_update(e.target.value);
    }}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDescription">
    <Form.Label>Descripcion</Form.Label>
    <Form.Control id='description_update' type="text" placeholder="aqui va a cargar la descripcion a editar" onChange = {(e)=> {
      set_description_update(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUnitCosto">
    <Form.Label>Costo por unidad</Form.Label>
    <Form.Control id='unit_cost_update' type="number " placeholder="ingrese el costo unitario" onChange = {(e)=> {
      set_unit_cost_update(e.target.value);
    }}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUnitCosto"> 
  <Form.Check
  inline
  label = "Disponible"
  name = "estado"
  type = "radio"
  id = '1' onClick = {(e)=> {
    set_state_update("true");
  }}
  />
  <Form.Check
  inline
  label = "Agotado"
  name = "estado"
  type = "radio"
  id = '0' onClick = {(e)=> {
    set_state_update("false");
  }}
  />
  </Form.Group>

  <Button variant="warning"  onClick ={
   ()=>{
     update_product(id_update)}}>
    Cambiar/actualizar
  </Button>
</Form>
</Container>
</div>
  );
}

export default Formulario;
 