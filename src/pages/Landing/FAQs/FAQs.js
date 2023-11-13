import React from "react";
import "./FAQs.scss";
import { FAQItem } from "./FAQItem/FAQItem";

const questionsLeft = [{
  question: 'What is Quantum Chat?',
  answear: 'QuantumChat is a tool that creates AI chat assistants. By training QuantumChat with your information and adding a chat feature to your site, you can simply upload a document or provide a website link. This allows the chat assistant to address queries related to that content.'
},
{
  question: 'What are sources of data I can upload?',
  answear: 'Right now, you can either upload single or multiple files (like .pdf, .txt, .doc, .docx), input text directly, or provide a website link for data extraction. Alternatively I can upload questions and answers one by one.'
},
{
  question: 'Can I change my chatbot base behavior?',
  answear: 'Absolutely, you can modify the starting message, personalize your chatbot with a unique name and characteristics, and guide it on how to respond to queries, such as instructing it to reply only in Spanish.'
}
]

const questionsRight = [

]

export const FAQs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-content">
        <h2 className="faqs-title title">FAQs</h2>
        <div className="faqs-questions">
        <div className="question-block">
          {questionsLeft.map(({question, answear}, index) => {
            return <FAQItem key={index} question={question} answear={answear}/>
          })}
        </div>
        {/* <div className="question-block">
        {questionsRight.map(({question, answear}, index) => {
            return <FAQItem key={index} question={question} answear={answear}/>
          })}
        </div> */}
        </div>
      </div>
    </section>
  );
};
