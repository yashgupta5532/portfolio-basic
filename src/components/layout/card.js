import React from 'react';
import man from '../../Images/man.jpeg';
import tree from '../../Images/tree.jpg';
import sky from '../../Images/sky.jpg';


function Card() {
    return (
        <div className="container d-flex flex-wrap">
            <div className="card m-3" style={{ width: `${21}rem` }}>
                <img src={man} className="card-img-top img-fluid " style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-3" style={{ width: `${21}rem` }}>
                <img src={tree} className="card-img-top img-fluid" style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-3" style={{ width: `${21}rem` }}>
                <img src={sky} className="card-img-top img-fluid" style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-3" style={{ width: `${21}rem` }}>
                <img src={man} className="card-img-top img-fluid " style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-3" style={{ width: `${21}rem` }}>
                <img src={tree} className="card-img-top img-fluid" style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-3" style={{ width: `${21}rem` }}>
                <img src={sky} className="card-img-top img-fluid" style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
export default Card;