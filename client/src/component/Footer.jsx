import React from 'react'

export const Footer=()=> {
  return (
   <footer className="bg-dark text-light py-3 mt-auto">
        <div className= "container text-center">
            <span>
                &copy; {new Date().getFullYear()} | Earthquake Visualizer | Data Source: USGS | <span style={{color: "#7655e2ff"}}>❤</span> Developed by Pradnesh Patil |
            </span>

            

        </div>

   </footer>
  )
}
