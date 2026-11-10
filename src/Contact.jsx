import { useState } from "react"

export default function Contact() {
  const[nom,setNom]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");

  function affiche(e){
    e.preventDefault();
    alert("Votre message a été envoyé avec succès !");
    setNom("");
    setEmail("");
    setMessage("");

  }

  return (
    <>
    <div id="contact" className="container-fluid py-2 px-4"style={{ backgroundColor: '#fef7ee' }}>

      <div className="text-center mb-3">
        <span className="rounded-pill px-3 py-1" style={{ backgroundColor: '#f3e8ff', color: '#7c5aa6' }}>
          Contactez-moi
        </span>
        <h1 className="fw-bold mt-2" style={{ color: '#2e1a47' }}>
          Restons en contact
        </h1>
        <p className="text-secondary mb-2">
          N'hésitez pas à me contacter pour toute opportunité ou collaboration.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="p-4 rounded-4 border" style={{ backgroundColor: '#fffaf3', borderColor: '#e9ddf5'}}>
           <h3 className="fw-bold mb-4" style={{ color: '#2e1a47' }}>
              Mes informations
            </h3>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: '#7c5aa6' }}>
               Nom complet
              </h6>
              <p className="text-secondary">
                Edahba Elmoussameh
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: '#7c5aa6' }}>
                 Email
              </h6>
              <p className="text-secondary">
                edahbaelmoussameh@gmail.com
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: '#7c5aa6' }}>
                 Localisation
              </h6>
              <p className="text-secondary">
                Laâyoune
              </p>
            </div>

            <div className="mt-5 p-3 rounded-4" style={{ backgroundColor: '#f3e8ff' }}>
              <h6 className="fw-bold" style={{ color: '#2e1a47' }}>
                Disponible pour opportunités
              </h6>
              <p className="mb-3" style={{ color: '#6a4a8a' }}>
                Je suis ouverte aux projets et aux collaborations dans le développement web.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-3 rounded-4 border mx-auto" style={{   backgroundColor:'#fffaf3',borderColor:'#e9ddf5' }}>
            <h3 className="fw-bold mb-4" style={{ color: '#2e1a47' }}>Envoyez-moi un message</h3>

            <form onSubmit={affiche}>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Nom complet
                </label>
                <input type="text" className="form-control rounded-3 py-2" placeholder="Entrez votre nom complet" value={nom} onChange={(e)=>setNom(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email
                </label>
                <input type="email" className="form-control rounded-3 p-3" placeholder="Entrez votre email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Message
                </label>

                <textarea className="form-control rounded-3 p-2" rows="3" placeholder="Écrivez votre message ici..." value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
              </div>

              <button type="submit" className="btn rounded-pill px-5 py-1 text-white" style={{ backgroundColor: '#7c5aa6'}}>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center mt-5 small" style={{ color: '#6a4a8a' }}>
        © 2026 Edahba Elmoussameh • Développeuse Full Stack
      </p>
    </div>
    </>
  )
}
