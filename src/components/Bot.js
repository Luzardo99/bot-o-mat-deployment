import React, { useState, useEffect } from "react";


function Bot(contents){

    const{
        name,
        type,
        id
    } = contents;
    //holds tasks robots will do
    const [task1, setTask1] = useState("");
    const [task2, setTask2] = useState("");
    const [task3, setTask3] = useState("");
    const [task4, setTask4] = useState("");
    const [task5, setTask5] = useState("");
    //holds status of task completion
    const [complete1, setComplete1] = useState(true);
    const [complete2, setComplete2] = useState(true);
    const [complete3, setComplete3] = useState(true);
    const [complete4, setComplete4] = useState(true);
    const [complete5, setComplete5] = useState(true);
    const [completeAll, setCompleteAll] = useState(true);
    //tasks are allocated to robots
    useEffect(() => {
        if (type === "Unipedal" || type === "Aeronautical") {
            setTask1("do the dishes (1s)");
            setTask2("sweep the house (3s)");
            setTask3("do the laundry (10s)");
            setTask4("take out the recycling (4s)");
            setTask5("make a sammich (7s)");
        } else if (type === "Bipedal" || type === "Radial") {
            setTask1("mow the lawn (20s)");
            setTask2("rake the leaves (18s)");
            setTask3("give the dog a bath (14.5s)");
            setTask4("bake some cookies (8s)");
            setTask5("wash the car (20s)");
        } else if (type === "Quadrupedal" || type === "Arachnid") {
            setTask1("do the dishes (1s)");
            setTask2("do the laundry (10s)");
            setTask3("make a sammich (7s)");
            setTask4("rake the leaves (18s)");
            setTask5("bake some cookies (8s)");
        }
    }, []); 
    //Do tasks in a certain amount of time
    async function doTask (task, id) {
        //setLoading(id);
        if (task === "do the dishes (1s)"){
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 1000);
            });
        }else if (task === "sweep the house (3s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 3000);
            });
        } else if (task === "do the laundry (10s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 10000);
            });
        } else if (task === "take out the recycling (4s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 4000);
            });
        } else if (task === "make a sammich (7s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 7000);
            });
        } else if (task === "mow the lawn (20s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 20000);
            });
        } else if (task === "rake the leaves (18s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 18000);
            });
        } else if (task === "give the dog a bath (14.5s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 14500);
            });
        } else if (task === "bake some cookies (8s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 8000);
            });
        } else if (task === "wash the car (20s)") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log(task);
                    setComplete(id);
                    resolve();
                }, 20000);
            });
        }
    }
    //Lets system know that task is completed
    const setComplete = (id) => {
        if(id === 1){
            setComplete1(false);
        }else if(id === 2){
            setComplete2(false);
        }else if(id === 3){
            setComplete3(false);
        }else if(id === 4){
            setComplete4(false);
        }else if(id === 5){
            setComplete5(false);
        }
    }
    //makes sure tasks are done one at a time
    async function completeAllTask() {
        function taskOne(){
            return doTask(task1, 1);
        }
        function taskTwo(){
            return doTask(task2, 2);
        }
        function taskThree(){
            return doTask(task3, 3);
        }
        function taskFour(){
            return doTask(task4, 4);
        }
        function taskFive(){
            return doTask(task5, 5);
        }

        taskOne().then(taskTwo).then(taskThree).then(taskFour).then(taskFive);
        setCompleteAll(false);
    }

    return (
        <div className="Bot">
            <h1>{name}</h1>
            <h1>{type}</h1>

            {completeAll &&
                <button class="completeAllButton" onClick={() => {completeAllTask()}}>finish every task</button>
            }
            <br></br>

            <div>
                <label>{task1}</label>
                {complete1
                    ?  
                    <button class={"taskButton"} onClick={()=>{doTask(task1, 1)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>

            <div>
                <label>{task2}</label>
                {complete2
                    ?  <button class={"taskButton"} onClick={()=>{doTask(task2, 2)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>
            <div>
                <label>{task3}</label>
                {complete3
                    ?  <button class={"taskButton"} onClick={()=>{doTask(task3, 3)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>
            <div>
                <label>{task4}</label>
                {complete4
                    ?  <button class={"taskButton"} onClick={()=>{doTask(task4, 4)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>
            <div>
                <label>{task5}</label>
                {complete5
                    ?  <button class={"taskButton" } onClick={()=>{doTask(task5, 5)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>




        </div>
    );

    
}
export default Bot;