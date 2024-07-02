import i_nodees from "./assets/nodees.png";
import i_reactjs from "./assets/vite.png";
import i_mysql from "./assets/mysql.png";
import i_rest from "./assets/rest.png";
import i_spring from "./assets/springboot.png";
import i_iback from "./assets/b4a.png";
import i_git from "./assets/gitdok.png";
export function Home() {
	return (
		<main>
			<h1 className="text-center pt-4">EZ LOGICS</h1>
			{/* ------------Carousel---------- */}
			<div id="carouselExampleCaptions" className="carousel slide carousel-fade mx-auto mt-4 mb-4 bg-dark bg-opacity-75">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
					
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={i_nodees} className="d-block mx-auto"  height="300" alt="..." />
						</div>
					<div className="carousel-item">
					<img src={i_reactjs} className="d-block mx-auto"  height="300" alt="..." />
					</div>
					<div className="carousel-item">
					<img src={i_mysql} className="d-block mx-auto"  height="300" alt="..." />
					</div>
					<div className="carousel-item">
					<img src={i_rest} className="d-block mx-auto"  height="300" alt="..." />
					</div>
					
					<div className="carousel-item">
					<img src={i_git} className="d-block mx-auto"  height="300" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* ---------fim------------- */}
			<div>
				<table className="table table-striped text-center align-middle m-0">
					<thead className="table-dark">
						<tr className="h2 ">
							<td colSpan="2"></td>
						</tr>
					</thead>
					<tbody className="table-primary fs-5">
						<tr>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td> </td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>

		</main>
	);
}