import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map;