import React from 'react'

export default function Buttons() {
  return (
        <div className={"buttons"}>
          <ul>
              <a href="/">
                  <li className="Home">Home</li>
              </a>
              <a href="experiences/">
                  <li className="Experiences">Experiences</li>
              </a>
              <a href="https://github.com/rusisg?tab=repositories" target={"_blank"}>
                  <li className="github">github</li>
              </a>
            </ul>
      </div>
  )
}