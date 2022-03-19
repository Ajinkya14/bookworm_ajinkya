import React from 'react';
import './feedback.css';
const Feedback = () => {
    return (
        <>
            <div className="content">
                <header>
                    <h1>Feel free to drop us your feedback.</h1>

                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/feedback-form-template.svg"
                        alt="A woman is sitting on the floor and working on a laptop (vector illustration)" />
                </header>
                <main mv-app="feedbackForm"
                    mv-storage="#data"
                    mv-source="#source"
                    mv-mode="read">
                    <form mv-multiple="feedback">

                        <label>
                            <h2>
                                How satisfied are you overall with book services.
                            </h2>

                            <div className="tickmarks">
                            <   span>0</span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                                
                            </div>

                            <input className="newclass" property="score"
                                type="range" max="10"
                                 />

                            <div className="legend">
                                <span mv-action="set(score, 0)">
                                    Not at all likely
                        </span>
                                <span mv-action="set(score, 10)">
                                    Extremely likely
                        </span>
                            </div>
                        </label>

                        <textarea property="comment"
                            cols="30" rows="10"
                            placeholder="Please tell us your reasons for giving this score here..."></textarea>

                        

                        <div className="mv-bar">
                            <button className="mv-save">
                                Send Feedback
                            </button>
                        </div>
                    </form>
                </main>
            </div>

        </>
    );
};
export default Feedback;