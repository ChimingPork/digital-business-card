export default function Header () {
    return (
        <header className="Header">
            <div className="Header-image">    
                <img className="Header-headshot" src="./headshot-jpg.jpg" alt="headshot"/>
            </div>
            <div className="Header-intro">
                <h1>Josh Bellingham</h1>
                <h3>Frontend Developer / Google Analytics Consultant</h3>
            </div>
            <div className="Header-buttons">
                <ul class="wrapper">
                    <a href="mailto:jbellingham35@gmail.com">
                    <li class="Header-icon email">
                        <span><i class="fa-solid fa-inbox"></i> Email </span>
                    </li>
                    </a>
                </ul>
            </div>
        </header>
    )
}
