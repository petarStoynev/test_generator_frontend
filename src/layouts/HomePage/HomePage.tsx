import "./styles/home-page.css"
import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'


export const HomePage = () =>{
    return(
        <>
        <main>
        <section className="home__banner">
        <div className="banner__text__div">
            <h2>Powerful online test maker</h2>
            <p>Create, send and analyze your tests for free</p>
            <br/>
            <a href="generator.html">Start Here</a>
        </div>

        <div className="img__div">
            <img src={require("./styles/exam.png")} alt="React Image"/>
        </div>
         </section>

         <section className="icons__banner">

<article className="card__one">
    <div className="icon__div">
        <a ><FontAwesomeIcon icon={faBook} /></a>

    </div>

    <div className="text__div">
        <h2>Create</h2>
    <p>Quickly create great looking tests using multiple question types and formatting options.</p>
    </div>
    
</article>

<article className="card__two">
    <div className="icon__div">
        <a ><FontAwesomeIcon icon={faDownload} /></a>

    </div>

    <div className="text__div">
        <h2>Download</h2>
        <p>Download your test as a pdf file</p>
    </div>
    
</article>

</section>
<script src="https://kit.fontawesome.com/a873988596.js" crossOrigin="anonymous"></script>

        </main>
        </>
    )
}