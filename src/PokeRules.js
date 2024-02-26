import {RiArrowDropDownLine} from "react-icons/ri";
import {useRef, useState} from "react";
import data from "./data";
export default function PokeRules() {
    const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
        const contentHeight = useRef();

        return(
            <div className={'wrapper' + (index + 1 ) % 2}>
                <button className={`rule-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                    <pre className='rule-content'>{question}</pre>
                    <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
                </button>

                <div ref={contentHeight} className="answer-container" style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }>
                    <pre className="answer-content">{answer}</pre>
                </div>
            </div>
        )
    }

    const Accordion = () => {
        const [activeIndex, setActiveIndex] = useState([""]);

        const handleItemClick = (index) => {
            let tempIndex = Array.from(activeIndex);
            let location = tempIndex.indexOf(index)
            if (tempIndex.includes(index)) {
                console.log("we found " + index)
                tempIndex.splice(location, location)
                setActiveIndex(tempIndex);
                console.log(activeIndex)

                return;

            }
            tempIndex.push(index)
            setActiveIndex(tempIndex);
            console.log(activeIndex)
        };

        return (
            <div className='container'>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex.includes(index)}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        )
    };

    return (
        <Accordion />
    )
}