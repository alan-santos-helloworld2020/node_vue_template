const Navegador = {
    props:[
      'title'
    ],
    template:`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/#">{{title}}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
                <RouterLink class="nav-link" to="/sobre">Sobre</RouterLink>
            </div>
        </div>
    </div>
    </nav>   
    
    `   
}

export default Navegador;