import { Button } from 'react-bootstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <section className='container-md'>

      <div className="container-fluid">
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <link className="navbar-brand" to="/">CATALOGO DE POLERAS</link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <link className="nav-link" aria-current="page" to="pag/deporte.htm">EQUIPAMIENTO DEPORTIVO</link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="pag/interes.html">ROPA DEPORTIVA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="pag/bio.html">DESCUENTOS Y MAS!!!</a>
                            </li>
                        </ul>
            
                    </div>
                </div>
            </nav>
        </div>
    </div>

      <h1 className="abc">TIENDA DE ROPA DEPORTIVA "{props.titulop}"</h1>
      <div className="foto">
        <img  className="Imag1" src={props.imgtitulo}/>
        <img  className="Imag1" src={props.imgtitulo2}/>



      </div>
      <p>Se ofrece diferentes indumentarias para todo tipo de deporte y ejerciccio fisico, desde los buzos de entramiento, chamarras, poleras, calzado, camisetas, etc. Ademas del
        equipamiento deportivo requerido para la competicion o entrenamiento en las diferentes areas como la pelota, traje de red, cuerdas, equipos de protecion, etc.
        Para mas informacion no olvides contactarnos a:
      </p>
      <p1>Correo:{props.correo}</p1>
      <p2>Telefono:{props.numero} o Visita nuestra pagina:{props.pagina}</p2>
      

        
      <h1>Hello Wordl!!!</h1>
      <Button variant="primary">Aceptar</Button>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      </section>
      
        
    </div>
  );
}

export default App;
