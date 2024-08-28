import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header/>
        <div>
      <main class="main-content">
          <Link to={"/patent"}>
            <section class="card">
                <h2>Patent</h2>
                <p className='hidden-text'>A legal right granted for an invention, providing exclusive rights to the inventor to make, use, and sell the invention for a specified period.</p>
            </section>
          </Link>

          <Link to={"/researchproject"}>
            <section class="card">
                <h2>Research Project</h2>
                <p className='hidden-text'>A structured investigation aimed at discovering new knowledge or understanding through scientific or scholarly methods.</p>
            </section>
          </Link>

          <Link to={"/intellectualproperty"}>
            <section class="card">
                <h2>Intellectual Property</h2>
                <p className='hidden-text'>Intellectual property: Creations of the mind, such as inventions, literary and artistic works, and symbols, names, and images used in commerce, protected by law.</p>
            </section>
          </Link>

          <Link to={"/funding"}>
            <section class="card">
                <h2>Funding</h2>
                <p className='hidden-text'>Financial support provided for a project or venture, often from grants, investors, or loans.</p>
            </section>
          </Link>

          <Link to={"/patentapplication"}>
            <section class="card">
                <h2>Patent Application</h2>
                <p className='hidden-text'>A formal request submitted to a patent office to obtain a patent, including detailed descriptions and claims of the invention.</p>
            </section>
          </Link>
            
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Home
