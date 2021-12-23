import React from 'react'
import {Link} from 'react-router-dom'
import './landingpage.css'
export default function Landingpage() {
    return (
      <div className="landingpage">
        <div>
          <img src="https://images.unsplash.com/photo-1593704212686-6d52058fb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhJTIwbGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"></img>
        </div>
        <div>
          <Link to="./postveiw">
            <button>Get started</button>
          </Link>
        </div>
      </div>
    );
}
