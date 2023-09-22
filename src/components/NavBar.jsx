import { Link} from "react-router-dom"

function NavBar() {

	return (
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<h2>
					<Link to="/">Ruan Kenned | Curriculum Vitae</Link>
				</h2>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<Link class="nav-link main-menu" to="/">Sobre</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link main-menu" to="/projetos">Projetos</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link main-menu" to="/clientes">Clientes</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link main-menu" to="/contato">Contato</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar