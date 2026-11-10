
export default function Information() {
  return (
    <div className="container-fluid min-vh-100 p-4" style={{ backgroundColor: '#fef7ee'}}>
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div className="h-100 p-4 p-md-5 rounded-4 border"style={{ backgroundColor: '#fffaf3', borderColor: '#f0e6ff' }} >
            <span className="rounded-pill px-3 py-2" style={{ backgroundColor: '#f3e8ff', fontSize: '11px' }}>
              Disponible pour opportunités • Freelance
            </span>

            <h1 className="fw-bold mt-3" style={{ fontSize: '42px', color: '#2e1a47' }}>
              Edahba Elmoussameh
            </h1>

            <h3 style={{ color: '#8a6aa8', fontSize: '24px' }}>
              Développeuse Full Stack
            </h3>

            <p className="mt-3" style={{ color: '#555', fontSize: '14px' }}>
              Je conçois et développe des applications web modernes, performantes et responsives. Passionnée par le code propre, l'expérience utilisateur et les technologies JavaScript.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#parcours" className="btn rounded-pill px-4 py-2 text-white" style={{ backgroundColor: '#7c5aa6' }}>
                Voir mon parcours
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="position-relative" style={{ height: '420px',}}>

            <div
              className="position-absolute top-0 end-0 p-3 rounded-4 border"
              style={{width: '85%',backgroundColor: '#f8f0ff',borderColor: '#d8c2ff',boxShadow: '0 10px 30px rgba(124, 90, 166, 0.15)',transform: 'rotate(2deg)'}}>
              <div className="fw-bold mb-2" style={{ fontSize: '12px', color: '#7c5aa6' }}>📁 HeroSection.tsx</div>
              <div className="rounded-3 p-3 text-light" style={{ backgroundColor: '#2e1a47', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                {`const Portfolio = () =>{
                      return {<Section>
                       <Hero />
                      </Section>};};`}
              </div>
            </div>

            <div
              className="position-absolute p-3 rounded-4 border"
              style={{top: '140px',left: '0px',width: '85%',backgroundColor: '#f8f0ff',borderColor: '#d8c2ff',boxShadow: '0 10px 30px rgba(124, 90, 166, 0.15)',transform: 'rotate(-2deg)'  }}>
              <div className="fw-bold mb-2" style={{ fontSize: '12px', color: '#7c5aa6' }}>
                ⚙️ useTheme.ts
              </div>

              <div className="rounded-3 p-3 text-light" style={{ backgroundColor: '#2e1a47', fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                {`export const useTheme = () => {const [theme, setTheme] = useState('dark');useEffect(() => {  document.body.dataset.theme = theme;}, [theme]);return { theme, setTheme };};`}
              </div>
            </div>

            <div
              className="position-absolute p-3 rounded-4 border"
              style={{top: '285px',right: '10px',width: '75%',backgroundColor: '#f8f0ff',borderColor: '#d8c2ff',boxShadow: '0 10px 30px rgba(124, 90, 166, 0.15)',transform: 'rotate(1deg)'}}>
              <div className="fw-bold mb-2" style={{ fontSize: '12px', color: '#7c5aa6' }}>
                🎨 styles.js
              </div>

              <div className="rounded-3 p-3 text-light" style={{ backgroundColor: '#2e1a47', fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                {`const styles = {card: {backdropFilter: 'blur(12px)',background: 'rgba(46, 26, 71, 0.6)',borderRadius: '16px'}};`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="parcours"className="p-4 rounded-4 border mt-5"style={{ backgroundColor: '#fffaf3', borderColor: '#e9ddf5' }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#2e1a47' }}>Parcours Académique</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="border rounded-4 p-3 p-md-4 h-100 bg-white" style={{ borderColor: '#c9b3e8' }}>
              <h5 className="fw-bold" style={{ color: '#2e1a47' }}>Formation en Développement Digital — Option Full Stack</h5>
              <p style={{ color: '#8a6aa8', fontSize: '14px' }}>Cité des Métiers et des Compétences de Laâyoune</p>
              <p className="small"><strong>2026 — 2027</strong> • Formation pratique : développement web full stack, projets réels, travail en équipe, déploiement et bonnes pratiques.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rounded-4 p-3 p-md-4 h-100" style={{ backgroundColor: '#fffaf3' }}>
              <h5 style={{ color: '#2e1a47' }}>Compétences</h5>
              <p className="fw-bold small">Frontend</p>

              <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#d8c2ff', fontSize: '12px' }}>React.js</span>
                <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#d8c2ff', fontSize: '12px' }}>JavaScript</span>
                <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#e9ddf5', fontSize: '12px' }}>HTML5</span>
                <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#e9ddf5', fontSize: '12px' }}>CSS3</span>
                <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#e9ddf5', fontSize: '12px' }}>Bootstrap</span>
              </div>

              <div className="d-flex flex-wrap gap-4">

                <div>
                  <p className="fw-bold small">Backend</p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#d8c2ff', fontSize: '12px' }}>SQL</span>
                    <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#d8c2ff', fontSize: '12px' }}>Laravel</span>
                  </div>
                </div>

                <div>
                  <p className="fw-bold small">Outils</p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#d8c2ff', fontSize: '12px' }}>GitHub</span>
                    <span className="rounded-3 px-2 py-1" style={{ backgroundColor: '#e9ddf5', fontSize: '12px' }}>Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center mt-5 small" style={{ color: '#6a4a8a' }}>
        © 2026 Edahba Elmoussameh • Développeuse Full Stack
      </p>
      </div>
    </div>
  );
}


