import {RiArrowDropDownLine} from "react-icons/ri";
import {useRef, useState} from "react";
import data from "./data";
export default function PokeRules() {
    const AccordionItem = ({ question, answer, isOpen, onClick }) => {
        const contentHeight = useRef();

        return(
            <div className="wrapper" >
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
        const [activeIndex, setActiveIndex] = useState(null);

        const handleItemClick = (index) => {
            setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        };

        return (
            <div className='container'>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
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