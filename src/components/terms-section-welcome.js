import React from "react"

export const TermsSectionWelcome = (props) => {

 return (
  <section className={`terms-section`}>
    
    <h1>{props.langChosen ? props.data.LangEN.header : props.data.LangPL.header}</h1>

    <div>{props.langChosen ? props.data.LangEN.content : props.data.LangPL.content}</div>

  </section>
 )
}

export default TermsSectionWelcome



