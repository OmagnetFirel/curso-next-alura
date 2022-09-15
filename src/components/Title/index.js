import React from 'react'

function Title({children, as}) {
    const TAG = as;
  return (
    <React.Fragment>
        <TAG>{children}</TAG>
        <style jsx>
            {`
                ${as} {
                    font-size: 2rem;
                    font-weight: 700;
                    color: red;
                    font-family: 'Roboto', sans-serif;
                }
            `}        
        </style>
    </React.Fragment>
  )
}

export default Title