import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { TiTree } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import useParks from "../../hooks/useParks";

export default function MapDisplay() {
  const [selectedPark, setSelectedPark] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 53.55293568997971,
    longitude: 10.007432910156012,
    height: "100vh",
    width: "100vw",
    zoom: 11,
  });

  let { mapID } = useParams();
  mapID = selectedPark?.id;

  const [parkData, setParkData] = useParks();

  function handleStarClick(name) {
    const [searchedPark] = parkData.filter((park) => park.name === name);
    const index = parkData.findIndex((park) => {
      return park.name === name;
    });
    searchedPark.isStarred = !searchedPark.isStarred;
    const veryNewParks = [
      ...parkData.slice(0, index),
      searchedPark,
      ...parkData.slice(index + 1),
    ];
    setParkData(veryNewParks);
  }

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
      {parkData &&
        parkData.map((park) => (
          <Marker
            key={park.id}
            latitude={Number(park.coordinates[0])}
            longitude={Number(park.coordinates[1])}
          >
            <TiTree
              className="markers-on-map"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            />
            <BsFillCircleFill
              className={park.isStarred ? "red-dot" : "hidden"}
            />
          </Marker>
        ))}
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
              <p className="selected-park-name">{selectedPark.name}</p>
              <p className="selected-park-address">{selectedPark.address}</p>
            </div>
            <AiFillStar
              onClick={(e) => {
                e.preventDefault();
                handleStarClick(selectedPark.name);
              }}
              className={
                selectedPark.isStarred
                  ? "park-gold-star light-up"
                  : "park-dull-star"
              }
            />
          </Popup>
        </Link>
      ) : null}
    </ReactMapGL>
  );
}
