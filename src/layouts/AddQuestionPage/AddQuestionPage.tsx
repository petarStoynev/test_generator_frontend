import axios from 'axios';
import { useState } from 'react'
import QuestionModel from '../../models/QuestionModel';
import './style/add-question.css'

export const AddQuestionPage = () => {

    const [desc,setDesc] = useState(""),
        [a,setA] = useState(""),
        [b,setB] = useState(""),
        [c,setC] = useState(""),
        [corrAnswer,setCorrAnswer] = useState(""),
        [subject,setSubject] = useState("Math");

        function descChange(e:any){
            e.preventDefault();
            setDesc(e.target.value)
        }

        function aChange(e:any){
            e.preventDefault();
            setA(e.target.value);
    
        }
    
        function bChange(e:any){
            e.preventDefault();
            setB(e.target.value);
    
        }
    
        function cChange(e:any){
            e.preventDefault();
            setC(e.target.value);
    
        }
        
        function correctAnswerChange(e:any){
            e.preventDefault();
            setCorrAnswer(e.target.value);
        }

        function subjectChange(e:any){
            e.preventDefault();
            setSubject(e.target.value);
        }
    
        async function createQuestion(){

            const question: Object = {
                description: desc,
                a:a,
                b:b,
                c:c,
                correctAnswer: corrAnswer,
                subject: subject

            };

    
            axios.post(`http://localhost:8080/auth/questions`, question);
            
        }



    return(
    <main className='add-question-main'>
        <form action="" onSubmit={createQuestion}>
        <section className='add-question-section'>
            <label htmlFor="">Description:</label>
            <input onChange={descChange} type="text" name="submit_desc" id="" placeholder='enter description here'/>

            <label htmlFor="">Answer A:</label>
            <input onChange={aChange} type="text" placeholder='enter answer a:'/>

            <label htmlFor="">Answer B:</label>
            <input onChange={bChange} type="text" placeholder='enter answer b:'/>

            <label htmlFor="">Answer C:</label>
            <input onChange={cChange} type="text" placeholder='enter answer c:'/>

            <label htmlFor="">Correct Answer:</label>
            <input type="text" onChange={correctAnswerChange} />

            <label htmlFor="">Enter Subject:</label>
            <select onChange={subjectChange} name="subject" id="">
                <option value="Math">Math</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="English">English</option>
            </select>

            <button  type="submit" >Add Question</button>
        </section>
        </form>

    </main>

    )
}