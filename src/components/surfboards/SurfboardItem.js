import React, { useContext } from 'react';
import surfboardsHome from '../../img/surfboardsHome.jpg';
import surfboardsHome2 from '../../img/surfboardsHome2.jpg';
import SurfboardContext from '../../surfboardContext/surfboardContext';

const SurfboardItem = () => {
    const surfboardContext = useContext(SurfboardContext);
    const { surfboard, clearSurfboard } = surfboardContext;

    const onClickClear = (e) => clearSurfboard();

    return (
        (surfboard === null || surfboard === undefined || surfboard === 'select')  ? (
            <div className="grid-2" style={{ marginTop: '5%'}}>
                <div className="p-2 all-center">
                    <img src={surfboardsHome} alt="surfboards" style={{ width: '100%', border: '#333 2px solid' }} /> 
                </div>
                <div className="p-2 all-center">
                    <img src={surfboardsHome2} alt="surfboards" style={{ width: '100%', border: '#333 2px solid' }} /> 
                </div>
            </div>
        ) : (
            <div className="all-center" >
                <button className="btn-primary btn" style={{ marginTop: '2%', fontWeight: '500' }}onClick={onClickClear}>Clear Surfboard</button>
                <div className="card all-center" style={{ marginTop: '5%', width: '100%', backgroundColor: '#fff' }}>
                    <h1 style={{ marginBottom: '3%' }}>{surfboard.name}</h1>
                    <p>{surfboard.about}</p>
                </div>
                <div className="grid-2 all-center" style={{ marginBottom: "5%", marginTop: "5%" }} >
                    <span className="all-center card" style={{ marginTop: '20px', width: '75%', backgroundColor: '#fff' }}>
                        <img style={{ marginBottom: '3%' }} src={surfboard.photo_URL} alt={`${surfboard} style surfboard`}  />
                        <img src={surfboard.photo_URL2} alt={'Surfer'} /> 
                    </span>
                    <div className="all-center" >
                        <div className="card all-center" style={{ marginTop: '20px', width: '75%', backgroundColor: '#fff' }}>
                            <div className="nose">
                                <h1>Nose</h1>
                                <br></br>
                                <p>{surfboard.noseDescription}</p>
                                <br></br>
                            </div>
                            <div className="tail">
                                <h1>Tail</h1>
                                <br></br>
                                <p>{surfboard.tailDescription}</p>
                                <br></br>
                            </div>
                            <div className="rails">
                                <h1>Rails</h1>
                                <br></br>
                                <p>{surfboard.railsDescription}</p>
                                <br></br>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    )
}

export default SurfboardItem;
