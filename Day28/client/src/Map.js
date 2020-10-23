import * as React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listLogEntries } from './API';
import LogEntry from './LogEntry';
import LogEntryForm from './LogEntryForm';

const Map = () => {
    const [logEntries, setLogEntries] = React.useState([]);
    const [showPopup, setShowPopup] = React.useState({});
    const [addEntryLocation, setAddEntryLocation] = React.useState(null);
    const [viewport, setViewport] = React.useState({
        width: '100vw',
        height: '100vh',
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 4
    });

    const getEntries = async () => {
        const entries = await listLogEntries();
        setLogEntries(entries);
    };

    React.useEffect(() => {
        getEntries();
    }, []);

    const showAddMarkerPopup = (e) => {
        const [longitude, latitude] = e.lngLat;
        setAddEntryLocation({
            latitude,
            longitude
        });
    }

    return (
        <ReactMapGL
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            onDblClick={showAddMarkerPopup}
        >
            {
                logEntries.map(entry => (
                    <React.Fragment key={entry._id}>
                        <Marker

                            latitude={entry.latitude}
                            longitude={entry.longitude}
                        >
                            <svg
                                onClick={() => setShowPopup({
                                    [entry._id]: true
                                })}
                                className="marker"
                                style={{
                                    height: `${3 * viewport.zoom}px`,
                                    width: `${3 * viewport.zoom}px`
                                }}
                                viewBox="0 0 384 512">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                        </Marker>
                        {
                            showPopup[entry._id] && (
                                <Popup
                                    latitude={entry.latitude}
                                    longitude={entry.longitude}
                                    closeButton={true}
                                    closeOnClick={false}
                                    dynamicPosition={true}
                                    onClose={() => setShowPopup({})}
                                    anchor="top"
                                >
                                    <LogEntry entry={entry} />
                                </Popup>
                            )
                        }
                    </React.Fragment>
                ))
            }

            {
                addEntryLocation && (
                    <>
                        <Marker
                            latitude={addEntryLocation.latitude}
                            longitude={addEntryLocation.longitude}
                        >
                            <svg
                                className="newMarker"
                                style={{
                                    height: `${3 * viewport.zoom}px`,
                                    width: `${3 * viewport.zoom}px`
                                }}
                                viewBox="0 0 384 512">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                        </Marker>

                        <Popup
                            latitude={addEntryLocation.latitude}
                            longitude={addEntryLocation.longitude}
                            closeButton={true}
                            closeOnClick={false}
                            dynamicPosition={true}
                            onClose={() => setAddEntryLocation(null)}
                            anchor="top"
                        >
                            <LogEntryForm
                                onClose={() => {
                                    setAddEntryLocation(null);
                                    getEntries();
                                }}
                                location={addEntryLocation}
                            />
                        </Popup>
                    </>
                )
            }
        </ReactMapGL>
    );
}

export default Map;