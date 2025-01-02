import { useEffect, useState } from "react"
import CustomSelectbox from "./SelectBox";

function SelectBoxComponent() {

    const [option, setOption] = useState([
        {
            name: "E learning project",
            id: "1",
            task: [{
                name: "Development",
                id: "a",
            },
            {
                name: "Animation",
                id: "b",
            },
            {
                name: "QA",
                id: "c",
            },
            {
                name: "Project management",
                id: "d",
            },
            {
                name: "Project Meetings",
                id: "e"
            }
            ]
        },
        {
            name: "Software Development project",
            id: "2",
            task: [
                {
                    name: "Requirement Gathering",
                    id: "a",
                },
                {
                    name: "Development",
                    id: "b",
                },
                {
                    name: "QA",
                    id: "c",
                },
                {
                    name: "Delivery",
                    id: "d",
                },

            ]
        },
        {
            name: "Translation project",
            id: "3",
            task: [
                {
                    name: "Work Gathering",
                    id: "a",
                },
                {
                    name: "GD",
                    id: "b",
                },
                {
                    name: "Translation",
                    id: "c",
                },
                {
                    name: "QA",
                    id: "d",
                },


            ]
        }
    ])

    const [project,setProject]=useState(null);
    const [taskList,setTaskList]=useState([]);

    const[task,setTask]=useState(null);



    useEffect(()=>{
        if(project){
            setTaskList(()=>{
               return option.find((projectObj)=>projectObj.id==project).task;
            });
            setTask(null)
        }
    },[project])

    const onChangeSelect=(project)=>{
        setProject(project)
    }

    const onChangetask=(task)=>{
        setTask(task)
    }
    return (
        <div className="flex flex-wrap gap-10 justify-center items-center" >
            <CustomSelectbox
                placeHolder='Please select...'
                onChange={onChangeSelect}
                list={option}
                selected={project}
                isSearchable
                isMulti
                Key="name"
            />

<CustomSelectbox
                placeHolder='Please select...'
                onChange={onChangetask}
                list={taskList}
                selected={task}
                isSearchable
                isMulti
                Key="name"
            />
        </div>
    )
}
export default SelectBoxComponent