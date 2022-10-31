import "./Home.css";
import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="row">
            <div className="col-6 ">
                <div className="col-12 taste pb-0">The Taste You'll</div>
                <div className="col-10 rem taste p-0 text-center">Remember!</div>
                <p className="col-12 taste-btm">Dried fruit is rich in fiber, vitamins and minerals. It is also high in phenolic antioxidants, which have numerous health benefits.</p>
                <p className="col-10 taste-btm btm">Eating dried fruit has been linked to an increased intake of nutrients and a reduced risk of obesity.</p>
            </div>
            <div className="col-6"></div>
        </div>
    </div>
  )
}

export default Home