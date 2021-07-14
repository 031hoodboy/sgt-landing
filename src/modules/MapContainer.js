
import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
      const container = document.getElementById('myMap');
      const markers = {position: new kakao.maps.LatLng(36.867091766051, 127.12488130338)};

      const options = {
        center: new kakao.maps.LatLng(36.867091766051, 127.12488130338),
        level: 3,
        marker: markers
      };
        const map = new kakao.maps.Map(container, options);
        
        
    }, []);

    return (
        <div id='myMap' style={{
            width: '100%', 
            height: '100%'
        }}></div>
    );
}

export default MapContainer; 