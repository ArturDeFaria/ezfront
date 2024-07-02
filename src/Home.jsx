import i_nodees from "./assets/nodees.png";
import i_reactjs from "./assets/vite.png";
import i_mysql from "./assets/mysql.png";
import i_rest from "./assets/rest.png";
import i_spring from "./assets/springboot.png";
import i_iback from "./assets/b4a.png";
import i_git from "./assets/gitdok.png";
import i_delivery from "./assets/delivery-truck.png";
export function Home() {
	return (
	  <main className="container py-5">
		<h1 className="text-center display-4 mb-4">EZ Logics: Otimizando Sua Cadeia de Suprimentos</h1>
  
		{/* Carousel (Optional) */}
		<div id="carouselExampleCaptions" className="carousel slide carousel-fade mx-auto mt-4 mb-4 bg-dark bg-opacity-75">
		  <div className="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  </div>
		  <div className="carousel-inner">
			<div className="carousel-item active">
			  <img src={i_delivery} className="d-block mx-auto" height="300" alt="Caminhão de Entrega EZ Logics" />
			</div>
			{/* Add more carousel items if needed */}
		  </div>
		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Anterior</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Próximo</span>
		  </button>
		</div>
  
		<div className="row mb-5">
		  <div className="col-md-6">
			<h2 className="h2 mb-3">Soluções Logísticas Eficientes</h2>
			<p className="lead">
			  Na EZ Logics, entendemos a importância de uma cadeia de suprimentos fluida e eficiente. Oferecemos uma gama completa de serviços de logística para ajudar empresas de todos os portes a otimizar suas operações e colocar seus produtos no mercado com mais rapidez.
			</p>
			<ul className="list-group list-group-flush">
			  <li className="list-group-item">Armazenamento e Distribuição</li>
			  <li className="list-group-item">Gerenciamento de Transporte</li>
			  <li className="list-group-item">Gerenciamento de Estoques</li>
			  <li className="list-group-item">Fulfillment de Pedidos</li>
			</ul>
		  </div>
		  <div className="col-md-6">
			<img src={i_delivery} className="img-fluid rounded-3 mx-auto" alt="Caminhão de Entrega EZ Logics" />
		  </div>
		</div>
  
		<div className="text-center">
		  <a href="" className="btn btn-primary btn-lg px-4">Solicite um Orçamento Gratuito Hoje!</a>
		</div>
	  </main>
	);
  }
  
