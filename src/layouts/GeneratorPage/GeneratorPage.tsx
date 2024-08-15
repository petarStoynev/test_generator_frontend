import axios from "axios";
import { useState } from "react";
import './styles/generator-page.css'

export const GeneratorPage = () =>{

    const[subject,setSubject] = useState("Math");
    const[school,setSchool] = useState('');
    const[teacher,setTeacher] = useState('');


    function downloadTest(subject:string){

        console.log(subject);

        fetch(`http://localhost:8080/auth/files/subject=${subject}/teacher=${teacher}/school=${school}`)
        .then(response =>{
            const filename = response.headers.get('Content-Disposition')?.split('filename')[1];
            response.blob().then(blob =>{
                let url : any = window.URL.createObjectURL(blob);
                let a : any = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
            })
        })
    }

    function changeSubject(e:any){
        e.preventDefault();
        setSubject(e.target.value);
    }

    function changeSchool(e:any){
      e.preventDefault();
      setSchool(e.target.value);
    }

    function changeTeacher(e:any){
      e.preventDefault();
      setTeacher(e.target.value);
    }

    return (
      <main className="generator-banner-main">
        <div className="generator_banner">
          <label>School</label>
          <input onChange={changeSchool} type="text" />
 
          <label htmlFor="">Teacher</label>
          <input onChange={changeTeacher} type="text" />

          <label htmlFor="">Subject</label>
          <select onChange={changeSubject} name="Subject" id="subject">
            <option value="Math">Math</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="English">English</option>
            <option value="History">History</option>
          </select>
          <button className="button-6" role="button" onClick={()=> downloadTest(subject)}>
            Generate
          </button>
        </div>
      </main>
    );

}