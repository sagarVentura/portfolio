/* select box without createportal logic*/


import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import './selectbox.css'

const ChevronDown = (props) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" {...props}>
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>)

};

const CrossIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    )
}
const SelectedInput = ({ searchValue, onChange, isSearchable, setShowMenu }) => {
    return (
        <input
            type="text"
            value={searchValue || ""}
            className=" border-none flex-1 h-full p-2  cursor-pointer"
            onChange={onChange}
            disabled={!isSearchable}
            placeholder="select ..."
            onFocus={() => { setShowMenu(true) }}
        />
    );
};


const CustomSelectbox = ({
    selected,
    list,
    Key,
    isSearchable = true,
    onChange,
}) => {
    // State variables
    const [listArr, setListArr] = useState([]);
    const [showMenu, setShowMenu] = useState(false); // Dropdown visibility
    const cellRef = useRef(null); // Ref for parent container

    const options = function ({ listArr, selected, Key }) {
        return listArr.map((ele) => ({
            value: ele.id,
            searchtext: ele?.[Key], // Add a custom field for search purposes

            label: (
                <div
                    className={`p-2  border-b-2 border-tableborder flex w-full h-full items-center gap- hover-option ${selected == (ele?.id) ? "color-lightOrg" : ""}`} onClick={(e) => {
                        setShowMenu(!showMenu)
                        e.stopPropagation();
                        onChange(ele.id)
                    }}>

                    <div style={{ fontSize: '15px', fontWeight: '600' }}>{`${ele[Key]}`}</div>
                </div>
            ),
        }))
    };


    const renderOption = options({ listArr, selected, Key });
    let selectedOption = useMemo(() => renderOption.find((ele) => ele.value === selected), [selected]);

    const [searchValue, setSearchValue] = useState(''); // Search input value

    useEffect(() => {
        setSearchValue(selectedOption?.searchtext ?? "");
    }, [selected]);

    useEffect(() => {
        setListArr(list);
        // setSearchValue("");
    }, [list])



    // Update dropdown position when opening
    const handleButtonClick = (e) => {
        setShowMenu(!showMenu);

    };

    /*
    Removal of the previous event listener: The cleanup function (return () => { window.removeEventListener("click", handler); })
     removes the event listener added in the previous render cycle of the useEffect.
    
    Addition of a new event listener: A new event listener is added with the updated handler function, which captures the latest state of selectedOption and other variables in its closure.
    */

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (cellRef.current && (!cellRef.current.contains(e.target)) && showMenu) {
                // console.log(" calling due to click")
                setShowMenu(false);
                setListArr(list);
                setSearchValue(selectedOption?.searchtext ?? "")
            }
        };

        // console.log("add listners")

        window.addEventListener("click", handler);
        return () => {
            // console.log("removing")
            window.removeEventListener("click", handler);
        };
    }, [selected, showMenu]);

    // Handle input changes
    const handleInputChange = (e) => {
        e.stopPropagation()
        const value = e.target.value;
        setSearchValue(value);
        setShowMenu(true);
        if (value.trim()) {
            const filteredList = list.filter((item) =>
                item[Key].toLowerCase().includes(value.trim().toLowerCase())
            );
            setListArr(filteredList);
        } else {
            setListArr(list);
        }
    };

const handleCrossClick=()=>{
    onChange(null)


}

    return (
        <div
            className="custom--dropdown-container w-full flex items-center  gap-2 bg-transparent  h-[50px]"
            ref={cellRef}
        >
            <div className="flex-1 h-full flex items-center"  >
                <SelectedInput
                    searchValue={searchValue}
                    selectedOption={selectedOption}
                    onChange={handleInputChange}
                    isSearchable={isSearchable}
                    setShowMenu={setShowMenu}
                />
                { searchValue && <CrossIcon
                    className={`cursor-pointer  text-white font-bold `}
                    width={"20px"}
                    onClick={handleCrossClick}
                    aria-expanded={showMenu}
                /> }
            </div>

            <div className="dropdown-tool px-2 h-full flex items-center bg-[#F7F7F7]  rounded-r-md rounded-l-none " onClick={handleButtonClick} >
                <ChevronDown
                    className={`cursor-pointer  text-black font-bold ${showMenu && "translate"}`}
                    width={"20px"}
                    aria-expanded={showMenu}
                />

            </div>

            {showMenu &&
                <div
                    className="absolute m-2 bg-white border-2 rounded border-tableborder shadow "
                    style={{
                        top: `100%`,
                        zIndex: 9999,
                        width: `100%`,
                        left: '-8px'
                    }}
                >
                    {renderOption.length ? renderOption.map((option, index) => (
                        <div className="dropdown-item" key={index}>{option.label}</div>
                    )) :
                        <div className="p-2 my-1 text-center  border-tableborder">No Option</div>}
                </div>
            }
        </div>
    );
};




export default CustomSelectbox;