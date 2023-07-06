// import React  from 'react'
import React, { useState } from 'react'

export default function About(props) {//remove the props whenever you used following function "toggleStyle"...

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(71 129 175)' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#042743'


    }




    // ------------------------------------------------------------------------

    // const [mystyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (mystyle.color === 'black') {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"

    //         })
    //         setBtnText("Enable Lite Mode");
    //     }
    //     else {
    //         setMyStyle({

    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }

    // }

    // ------------------------------------------------------------------------




    return (
        <div className='container' >
            <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle} >Browser Compatible This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    )
}
