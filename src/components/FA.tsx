'use client';

import React, { useState } from 'react';

function FA() {
  const [answersVisible, setAnswersVisible] = useState<boolean[]>([]);

  const toggleAnswer = (index: number) => {
    const newAnswersVisible = [...answersVisible];
    newAnswersVisible[index] = !newAnswersVisible[index];
    setAnswersVisible(newAnswersVisible);
  };

  const faqs = [
    { questionID: 'q1', question: 'What exactly is Data Analysis, and why is it important for my business?', answer: 'Data Analysis is the process of examining, cleaning, transforming, and modeling data with the goal of identifying patterns, trends, and insights that can inform decision-making. It is essential for businesses because it helps make informed decisions, improve operational efficiency, identify growth opportunities, and better understand customers.' },
    { questionID: 'q2', question: 'What are the main steps involved in Data Analysis?', answer: 'The main steps in Data Analysis include data collection, data cleaning and preparation, exploratory analysis, statistical modeling, interpretation of results, and communication of insights.' },
    { questionID: 'q3', question: 'What types of data can be analyzed, and how are they collected?', answer: 'Data from different sources can be analyzed, including structured data (e.g., databases) and unstructured data (e.g., social media). They can be collected through sensors, surveys, transaction records, and other sources, depending on the context.' },
    { questionID: 'q4', question: 'What are the common tools used in Data Analysis?', answer: 'Some common tools include programming languages like Python and R, databases, data visualization tools like Tableau and Power BI, and cloud-based data analysis platforms like AWS, Google Cloud, and Azure.' },
    { questionID: 'q5', question: 'What are the benefits of outsourcing Data Analysis services instead of building an in-house team?', answer: ' Outsourcing Data Analysis services can be more cost and time-efficient. Companies specializing in Data Analysis have expertise, access to advanced technologies, and can provide insights quickly, allowing you to focus on your core business. Additionally, it eliminates the need to hire and train an internal team.' },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <div className="faq" key={faq.questionID}>
          <div className="question-container">
            <div className="question clickable" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </div>
            <div
              className={`arrow clickable ${answersVisible[index] ? 'up' : 'down'}`}
              onClick={() => toggleAnswer(index)}
            >
              &#9654; {/* Use um ícone de seta para representar a direção */}
            </div>
          </div>
          {answersVisible[index] && <div className="answer">{faq.answer}</div>}
          {index !== faqs.length - 1 && (
            <hr className="my-6 w-8/10 border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}

export default FA;
