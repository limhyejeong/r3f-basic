import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
// import { useParams } from "react-router-dom";

function Geometry() {
  return (
    <div className="canvas">
      <h3>지오메트리 페이지입니다.</h3>
      <Canvas>
        <MyElement3D />
      </Canvas>
    </div>
  );
}

export default Geometry;
