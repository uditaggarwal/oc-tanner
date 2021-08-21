import React from 'react';

const Mystatic=()=>{

    return(<>
    <div className="statics">
        
    <section className="  p-4">
        <h4>Statics</h4>
        <hr />
        <div className="row g-0 mx-auto">
            <div className="col-md-3 p-2 m-2 rounded" style={{'backgroundColor': 'rgb(44, 23, 240)','color':'white'}} >
                <article >
                    <h3 className="display-5">Visits</h3>
                    <p className="text-center display-4">500</p>
                    <p className="text-center">Raating</p>
                </article>
            </div>
            <div className="col-md-3 p-2 rounded m-2" style={{'backgroundColor': 'rgb(240, 153, 23)','color':'white'}} >
                <article >
                    <h3 className="display-5">Buys</h3>
                    <p className="text-center display-4">50+</p>
                    <p className="text-center">Raating</p>
                </article>
            </div>
            <div className="col-md-3 p-2 rounded m-2" style={{'backgroundColor':'rgb(240, 23, 142)','color':'white'}} >
                <article >
                    <h3 className="display-5">Customers</h3>
                    <p className="text-center display-4">250+</p>
                    <p className="text-center">Raating</p>
                </article>
            </div>
            
        </div>
        
    </section>
    <section className=" p-4 m-4" style={{"backgroundColor": "darkslategrey"}}>
        <h4 className="text-white">Rankings</h4>
        <hr />
        <div className="row g-0 mx-auto">
            <div className="col-md-3 p-2 m-4 rounded" style={{"backgroundColor": 'rgb(240, 240, 243)','color':'rgb(29, 28, 28)','transform':'rotate(-7deg)'}} >
                <article >
                    <h3>Earning</h3>
                    <p className="text-center display-4">1200+ </p>
                    <p className="text-center">Raating</p>
                </article>
            </div>
            <div className="col-md-3 p-2 rounded m-4" style={{"backgroundColor": 'rgb(240, 23, 186)','color':'white','transform':'rotate(10deg)'}} >
                <article >
                    <h3>Today</h3>
                    <p className="text-center display-4">Appr. 10</p>
                    <p className="text-center">Raating</p>
                </article>
            </div>
            <div className="col-md-3 p-2 rounded m-4" style={{"backgroundColor": 'rgb(6, 243, 112)','color':'white','transform':'rotate(-15deg)'}} >
                <article >
                    <h3>InOrder</h3>
                    <p className="text-center display-4">90+</p>
                    <p className="text-center">Raating</p>
                </article>
            </div>
            
        </div>
        
    </section>

</div>
    </>

    )
}

export default Mystatic;