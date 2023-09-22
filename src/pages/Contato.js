function Contato() {

	return (
		<div class="card" id="container">
			<div class="card-body">
				<h1 class="card-title">Contato</h1>
				<div class="top-divider"></div>
				<div class="row content">

					<div class="col-6">

						<form>
							<div class="form-group mb-3">
								<label for="exampleInputName" class="text-projetos">Nome</label>
								<input type="text" class="form-control" id="exampleInputName"/>
							</div>

							<div class="form-group mb-3">
								<label for="exampleInputEmail1" class="text-projetos">Endereço de email</label>
								<input type="email" class="form-control" id="exampleInputEmail1"/>
							</div>

							<div class="form-group mb-3">
								<label for="exampleInputMessage" class="text-projetos">Mensagem</label>
								<textarea rows="4" class="form-control" id="exampleInputMessage"></textarea>
							</div>

							<button type="submit" class="btn btn-warning">Enviar</button>
						</form>

					</div>

					<div class="about col-6">
						<div id="social-footer">
							<h2>Fale Comigo:</h2>
							<p>Conecte-se comigo através do: GMAIL, ZAP ZAP, TELEFONE CELULAR, INSTA,
								E FACEBOOK.</p>
							<ul id="sm-links">
								<li><a href="https://www.facebook.com/ruan.kenned.18" target="_blank" rel="noreferrer" class="facebook">Facebook</a></li>
								<li><a href="mailto:ruankennedm@gmail.com" target="_blank" rel="noreferrer" class="gmail">Gmail</a></li>
								<li><a href="https://www.instagram.com/ruankennedm/?hl=pt-br" target="_blank" rel="noreferrer" class="insta">Dribble</a></li>
								<li><a href="https://web.whatsapp.com/send?phone=553189172362" target="_blank" rel="noreferrer" class="zap">Vimeo</a></li>
								<li><a href="https://www.linkedin.com/in/ruan-kenned-b91151225/" target="_blank" rel="noreferrer" class="linkedin">LinkedIn</a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Contato