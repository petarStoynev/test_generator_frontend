import { useState } from "react"
import { QuestionSection } from "./components/QuestionSection"
import "./style/question-page.css"

export const QuestionPage = () =>{

    const[search,setSearch] = useState("");
    const[subject,setSubject] = useState(1);

    function searchChange(e:any){
        e.preventDefault();
        setSearch(e.target.value);
    }

    function subjectChange(e:any){
        e.preventDefault();
        setSubject(e.target.value);
    }

    

    return(
        <main className="question-main">
            <section className="search_banner">
                <input type="text" onChange={searchChange} placeholder="Search your question here:"/>

                <label >Choose the subject:</label>
                <select onChange={subjectChange} name="subject" id="subject_select">
                    <option value="1">Math</option>
                    <option value="2">English</option>
                    <option value="3">Bulgarian</option>

                </select>
                <a className="add-question-href" href="/add-question">Add Question</a>
            </section>
            <QuestionSection search={search} subject={subject}/>
        </main>
    )
}