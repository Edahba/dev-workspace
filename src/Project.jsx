
export default function Project() {
  return (
   
    <div className="container-fluid px- pb-4" style={{   backgroundColor: '#fef7ee', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge rounded-pill px-4 py-2 fw-semibold" style={{   backgroundColor: '#f3e8ff',   color: '#7c5aa6' }}>
            Mes réalisations
          </span>

          <h2  className="fw-bold mt-3"style={{ color: '#2e1a47', fontSize:'2.4rem'}}>
            Mes Projets
          </h2>
          <p className="text-secondary">
            Découvrez quelques-uns de mes projets réalisés.
          </p>
        </div>
        <div className="row g-4 justify-content-center">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 rounded-4 shadow-sm border-0 p-3" style={{ backgroundColor: '#fffaf3' }}>
              <img src="/image/cmc.png" className="card-img-top rounded-3" style={{ height: '190px', objectFit: 'cover' }} alt="CMC"/>

              <div className="card-body d-flex flex-column px-1">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#f3e8ff', color: '#7c5aa6' }}>
                    HTML / CSS / Bootstrap
                  </span>
                  <span className="badge rounded-pill bg-light text-secondary border px-3 py-2">
                    Statique
                  </span>
                </div>

                <h5 className="card-title fw-bold" style={{ color: '#2e1a47' }}>
                  Site Web - CMC
                </h5>

                <p className="card-text small text-secondary flex-grow-1">
                 Site statique réalisé pour CMC Laâyoune.
                 Présentation de l'ensemble des filières et des formation proposées.
                </p>

                <a
                  href="https://edahbacmc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn rounded-pill px-4 py-2 text-white align-self-start"
                  style={{ backgroundColor: '#7c5aa6' }}
                >
                  Voir le site
                </a>
              </div>
            </div>
          </div>

     
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card h-100 rounded-4 shadow-sm border-0 p-3"
              style={{ backgroundColor: '#fffaf3' }}
            >
              <img
                src="/image/ecommerce.jpg"
                className="card-img-top rounded-3"
                style={{ height: '190px', objectFit: 'cover' }}
                alt="E-commerce"
              />

              <div className="card-body d-flex flex-column px-1">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{ backgroundColor: '#f3e8ff', color: '#7c5aa6' }}
                  >
                    React / JSON / API
                  </span>
                  <span className="badge rounded-pill bg-light text-secondary border px-3 py-2">
                    Dynamique
                  </span>
                </div>

                <h5 className="card-title fw-bold" style={{ color: '#2e1a47' }}>
                  E-commerce Beauty
                </h5>

                <p className="card-text small text-secondary flex-grow-1">
                  Boutique dynamique avec des produits (Mascara, Lipstick,
                  Parfum). Prix, stock et discount depuis API.
                </p>

                <button
                  className="btn rounded-pill px-4 py-2 text-white align-self-start"
                  style={{ backgroundColor: '#7c5aa6' }}
                >
                  Voir
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card h-100 rounded-4 shadow-sm border-0 p-3"
              style={{ backgroundColor: '#fffaf3' }}
            >
              <img
                src="/image/storybook.jpg"
                className="card-img-top rounded-3"
                style={{ height: '190px', objectFit: 'cover' }}
                alt="Story Book"
              />

              <div className="card-body d-flex flex-column px-1">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{ backgroundColor: '#f3e8ff', color: '#7c5aa6' }}
                  >
                    React / JSON / Filter
                  </span>
                  <span className="badge rounded-pill bg-light text-secondary border px-3 py-2">
                   Livres
                  </span>
                </div>

                <h5 className="card-title fw-bold" style={{ color: '#2e1a47' }}>
                  Biblio - Story Book
                </h5>

                <p className="card-text small text-secondary flex-grow-1">
                  Bibliothèque des livres avec filtre par genre et
                  disponibilité.
                </p>

                <button
                  className="btn rounded-pill px-4 py-2 text-white align-self-start"
                  style={{ backgroundColor: '#7c5aa6' }}
                >
                  Voir
                </button>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center mt-5 small" style={{ color: '#6a4a8a' }}>
        © 2026 Edahba Elmoussameh • Développeuse Full Stack
        </p>

      </div>
    </div>
  )
}