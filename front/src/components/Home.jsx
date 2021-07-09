import vertical from '../assets/img/group_3.png'


export const Home = () => {

    return (
        <>
        <div className="App container-fluid">        
            <div className="bn-linea">
        <a className="btn btn-lg btn-white-outline btn-block" href="#">   PHP Developer    </a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">JavaScript Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Phyton Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Frontend Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Backend Developer</a>
        <a className="btn btn-lg btn-white-outline btn-block" href="#">Full Stack Developer</a>

            </div>
            <div className="banner-inicio"><img src={vertical} /></div>
        </div>
        </>
    )
}
