import React from 'react';

type Props={
    question:string;
    answer:string[];
    callback:any; 
    userAnswer:any;
    qustionNr:Number;
    totalQuestion:number;
}



const QuestionCart:React.FC<Props> = ({
    question,
    answer,
    callback,
    userAnswer,
    qustionNr,
    totalQuestion,
}) => {
    return(
        <div>
            <p className="number">
                 Quistion {qustionNr} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answer.map((item,index)=>{
                    return(
                        <div key={index+Math.random()}>
                            <button disabled={userAnswer}>
                                <span dangerouslySetInnerHTML={{__html:item}}></span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default QuestionCart