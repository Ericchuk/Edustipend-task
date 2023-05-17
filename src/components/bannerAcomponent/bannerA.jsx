import './bannerA.css';
import Button from '../button/button'

export default function Banner(){
    return(
        <section className="sub-container">
            <h1>Make your party fun!</h1>
            <p>Create your own custom playlist today</p>
            <Button msg="Create playlist" />
        </section>
    )
}