import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { TiTree } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
export default function MapDisplay({ handleStarClick, parkData }) {
  const [selectedPark, setSelectedPark] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 53.55293568997971,
    longitude: 10.007432910156012,
    height: "100vh",
    width: "100vw",
    zoom: 11,
  });

  let { mapID } = useParams();
  mapID = selectedPark?.coordinates[0].replace(/\./g, "-");
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoidHJpeDI3MDUiLCJhIjoiY2tvOGV4NnF5Mm1lZDJwcGd2cThxcWZhbCJ9.5YJMb_ZfjMrG0yCbYyFj5w"
      }
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/trix2705/cko8hkfyn0sm617o9ek7qmkiq"
    >
      {
        // parkData > 0 &&
        parkData.map((park) => (
          <Marker
            key={park.coordinates[0]}
            latitude={Number(park.coordinates[0])}
            longitude={Number(park.coordinates[1])}
          >
            <TiTree
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            />
            <BsFillCircleFill
              className={park.isStarred ? "red-dot" : "hidden"}
            />
          </Marker>
        ))
      }
      {selectedPark ? (
        <Link to={`/single-park/${mapID}`}>
          <Popup
            className="popup"
            latitude={Number(selectedPark.coordinates[0])}
            longitude={Number(selectedPark.coordinates[1])}
            onClose={() => {
              setSelectedPark(null);
            }}
            closeOnClick={false}
          >
            <div>
              <h3>{selectedPark.name}</h3>
              <p>{selectedPark.address}</p>
            </div>
            <AiFillStar
              onClick={(e) => {
                e.preventDefault();
                handleStarClick(selectedPark.name);
              }}
              className={
                selectedPark.isStarred ? "park-gold-star" : "park-dull-star"
              }
            />
          </Popup>
        </Link>
      ) : null}
    </ReactMapGL>
  );
}
