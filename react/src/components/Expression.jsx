import React from 'react'

const Expression = () => {
    const name = "Vijay"
    const multiply = (a, b) => a * b;
    const specialClass = 'simple-class'
  return (
    <section>
        <p>2+2</p> // output will be 2 + 2
        <p>{2 + 2}</p> {/* output will be 4 */}
        <p>{name}</p> {/* output will be Vijay */}
        <p>{`Hello ${name}`}</p> {/* output will be Hello Vijay */}

        <p>{multiply(2, 3)}</p> {/* output will be 6 */}
        <p>{multiply(2, 3) + 5}</p> {/* output will be 11 */}
        <p>{multiply(2, 3) + 5 > 10 ? "Greater than 10" : "Less than or equal to 10"}</p> {/* output will be Greater than 10 */}
        <p>{multiply(2, 3) + 5 > 10 ? <span>Greater than 10</span> : <span>Less than or equal to 10</span>}</p> {/* output will be Greater than 10 */}


        <p className={specialClass}> This is a special class</p> 
        
    </section>
  )
}

export default Expression