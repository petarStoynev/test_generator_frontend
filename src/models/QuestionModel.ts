class QuestionModel {
    id:number;
    description:string;
    a:string;
    b:string;
    c:string;
    correctAnswer:string;
    subject:string;

    constructor(id:number,description:string,a:string,b:string,c:string,correctAnswer:string,subject:string){
        this.id=id;
        this.description=description;
        this.a=a;
        this.b=b;
        this.c=c;
        this.correctAnswer=correctAnswer;
        this.subject=subject;
    }

}

export default QuestionModel;