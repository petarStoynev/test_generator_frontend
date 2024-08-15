import axios from "axios";
import { useEffect, useState } from "react"
import QuestionModel from "../../../models/QuestionModel"



export const Question: React.FC<{question: QuestionModel}> = (props) =>{

    const[desc,setDesc] = useState(props.question.description);
    const[a,setA] = useState(props.question.a);
    const[b,setB] = useState(props.question.b);
    const[c,setC] = useState(props.question.c);
    const[correctAnswer,setCorrectAnswer] = useState(props.question.correctAnswer);
    
    
    useEffect(() => {
        async function handleUpdate(){

        
            const question = {
                id:props.question.id,
                description: desc,
                a: a,
                b: b,
                c: c,
                correctAnswer: correctAnswer,
                subject: props.question.subject
            }

            axios.put(`http://localhost:8080/auth/questions/${props.question.id}`, question);
            
        }

        handleUpdate();
        
    })

    

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
        setCorrectAnswer(e.target.value);
    }

    return(

        
        <div className="question-desc">
        
            <label>Description: {props.question.description}</label>
            <br />
            <label>A: </label>
            <input onChange={aChange} type="text" defaultValue={props.question.a} />
            <label>B: </label>
            <input onChange={bChange} type="text" defaultValue={props.question.b} />
            <label>C: </label>
            <input onChange={cChange} type="text" defaultValue={props.question.c} />
            <label>Correct: </label>
            <input onChange={correctAnswerChange} type="text" defaultValue={props.question.correctAnswer} />
            <label>Subject: {props.question.subject}</label>

        
        
        </div>
        
        
    )
}