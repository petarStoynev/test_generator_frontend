import axios from "axios";
import {useEffect, useState} from "react";
import QuestionModel from "../../../models/QuestionModel";
import { Question } from "./Question";



export const QuestionSection:React.FC<{search:string,subject:number}> = (props) =>{

    const[questions,setQuestions] = useState<QuestionModel[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const[httpError,setHttpError] = useState(null);
    const[visible,setVisible] = useState(true);
    

    useEffect(() =>{

        const fetchQuestions = async () =>{
            let baseUrl: string = `http://localhost:8080/auth/questions/search=${props.search}/subject=${props.subject}`;

            baseUrl = baseUrl.replaceAll("?","");
            
            console.log('reload');

            axios.get(baseUrl)
            .then((response) =>{
                const responseData =response.data;


                const loadedQuestions: QuestionModel[] = [];
    
                for(const key in responseData){
                    loadedQuestions.push({
                        id: responseData[key].id,
                        description: responseData[key].description,
                        a: responseData[key].a,
                        b: responseData[key].b,
                        c: responseData[key].c,
                        correctAnswer: responseData[key].correctAnswer,
                        subject: responseData[key].subject
    
                    });
                }
    
                setQuestions(loadedQuestions);
                setIsLoading(false);
            }) 
        }           

           
        fetchQuestions().catch((error:any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    },[props,visible]);

    

     function remove(id:number){
        
      
        axios.delete(`http://localhost:8080/auth/questions/delete=${id}`);

        setQuestions((current) =>current.filter((question) => question.id != id));
        

        console.log(id);
        
        
        
        }

    if(isLoading){
        return(
            <div className="container">
                    <p>Loading...</p>
            </div>
        )
    }

    if(httpError){
        return(
            <div className="container">
                <p>{httpError}</p>
            </div>
        )
    }

    return(
        <section>
            {questions.map(question =>(
                <div>
                    <Question question={question} key={question.id}/>
                    <button type="button" onClick={() => remove(question.id)}>Delete</button>

                </div>
            ))}
        </section>
    )
   
}