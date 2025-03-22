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

    const [project, setProject] = useState(null);
    const [taskList, setTaskList] = useState([]);

    const [task, setTask] = useState(null);



    useEffect(() => {
        if (project) {
            setTaskList(() => {
                return option.find((projectObj) => projectObj.id == project).task;
            });
            setTask(null)
        }
        else{
         setTaskList([]);
         setTask(null)

        }
    }, [project])

    const onChangeSelect = (project) => {
        setProject(project)
    }

    const onChangetask = (task) => {
        setTask(task)
    }
    return (
        <>

        <div className="flex flex-wrap gap-10 justify-start items-start about active outlet flex-col sm:flex-row border-2  p-2 h-full" >

        <div className=" w-full">
                <label className="label font-bold text-xl" htmlFor="endDate">Select Box</label>

               
            </div>

            <div className=" flex flex-col flex-1 w-full">
                <label className="required-label" htmlFor="endDate">Project Type</label>

                <CustomSelectbox
                    placeHolder='Please select...'
                    onChange={onChangeSelect}
                    list={option}
                    selected={project}
                    isSearchable
                    isMulti
                    Key="name"
                />
            </div>

            <div className="flex flex-col flex-1 w-full">
                <label className="" htmlFor="endDate">Tasklist</label>
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

        </div>
        </>
    )
}
export default SelectBoxComponent