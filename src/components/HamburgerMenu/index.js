import './styles.scss'
import { useState } from 'react';

function HamburgerMenu(){

    const [closed, setclosed] = useState(true);

    function toggleSideMenu() {
        setclosed(!closed)
    }

    return(
        <div className='burger-wrapper'>
         <div onClick={toggleSideMenu}>
            {closed 
         ? <div className='burger-icon-menu'><img src={process.env.PUBLIC_URL + 'images/Menu.svg'} /></div>
         : <div className='close-icon-menu'><img src={process.env.PUBLIC_URL + 'images/closeIcon.png'} /></div>
         } 
         </div>

            <div className={`side-menu ${!closed ? '' : 'closed-menu'}`} >
                <ul className='main-list-menu'>
                    <li>ΓΥΝΑΙΚΑ</li>
                    <li>ΑΝΔΡΑΣ</li>
                    <li>ΠΑΙΔΙ</li>
                    <li>BRAND</li>
                </ul>
                <hr/>
                <ul className='list-column main'>
                    <li>ΡΟΥΧΑ</li>
                    <li>ΠΑΠΟΥΤΣΙΑ</li>
                    <li>ΑΞΕΣΟΥΑΡ</li>
                    <li>ΟΜΟΡΦΙΑ</li>
                    <li>ΔΗΜΟΦΙΛΕΙΣ ΜΑΡΚΕΣ</li>
                </ul>
                <hr/>
                <ul className='list-column information'>
                    <li>ΝΕΕΣ ΑΦΙΞΕΙΣ</li>
                    <li>BEACHWEAR</li>
                    <li>ΑΠΑΡΑΙΤΗΤΑ ΓΙΑ ΤΗ ΔΟΥΛΕΙΑ</li>
                    <li>ΓΥΝΑΙΚΕΙΑ ΣΕΤ</li>
                    <li>ΤΕΛΕΥΤΑΙΑ ΕΥΚΑΙΡΙΑ</li>
                    <li>FAQ</li>
                </ul>
                <hr/>
                <ul className='list-column user-information'>
                    <li>Σύνδεση / Δημιουργία λογαριασμού</li>
                    <li>Οι παραγγελίες μου</li>
                    <li>Αγαπημένα</li>
                </ul>
            </div>
        </div>

    )
}

export default HamburgerMenu