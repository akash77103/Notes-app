import React from 'react'

export const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <div>
        <footer>
            <p>© Copyright {year}</p>
        </footer>
    </div>
  )
}
