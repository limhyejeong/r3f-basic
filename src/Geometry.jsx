import "./App.css";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import BoxGeometry from "./BoxGeometry";
import MyElement3D from "./MyElement3D";
import { useParams, BrowserRouter, Routes, Route  } from "react-router-dom";
import { Data } from './data.json'

function Geometry(props) {

  // const {id} = useParams();

  // let findId = props.shoes.find((item) => {
  //   return item.id == id;
  // })

  return (
    <div className="canvas">
      {/* <h3>{findId.id} 페이지입니다.</h3> */}
      {/* <p>{findId.description}</p> */}

      <Canvas>
        <Routes>
          <Route path="/" element={<></>}></Route>
          
          <Route path="box" element={<BoxGeometry />}></Route>
          <Route path="sphere" element={<MyElement3D />}></Route>
        </Routes>
      </Canvas>


    </div>
  );
}

export default Geometry;
