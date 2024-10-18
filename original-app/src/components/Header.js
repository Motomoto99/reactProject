import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div>
                <h3>オリジナルプログラムスペース</h3>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/lifespan">寿命計算機</Link></li>
                </ul>
            </nav>
        </header>
    )
}
