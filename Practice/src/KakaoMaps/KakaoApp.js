import React, { useEffect, useRef } from 'react';
import GPDATA from './gapyeongun.json';

function KakaoApp() {
    const container = useRef(null); //훅스로 DOM 레퍼런스

    useEffect( ()=>{
        makeMap();
    },[])
    const makeMap =()=>{
        const { kakao } = window;
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.81452005, 127.5107394), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container.current, options);
        function makeMarker(xy){
            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(xy.location_y, xy.location_x); 
    
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
    
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);        
        }
        GPDATA.map((each) => {
            makeMarker(each);
        })
    }

    return (
        <>
            <div ref={container} id="map" style={{width:"500px", height:"400px"}}> </div>
        </>
    );
}

export default KakaoApp;