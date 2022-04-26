import React, { useEffect, useRef, useState } from 'react';
import GPDATA from './gapyeongun.json';

function KakaoApp() {
    const container = useRef(null); //훅스로 DOM 레퍼런스
    const [text, setText] = useState('구리역');

    useEffect( ()=>{
        makeMap();
    },[text])

    const [result,setResult] = useState({});
    useEffect(()=>{
        console.log("result",result);

    },[result])
    const makeMap =()=>{

        const { kakao } = window;
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.81452005, 127.5107394), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container.current, options);
        // 검색결과---------
        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(text, placesSearchCB); 

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            setResult(()=>{
                return {...data};    
            });

            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();
                for (var i=0; i<data.length; i++) {
                    makeMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }


        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        //전역으로 선언해두어야 open close 된다!
        function makeMarker(place){
            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(place.y, place.x); 
    
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map:map,
                position: markerPosition
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
                infowindow.close();
                infowindow.open(map, marker);
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            // marker.setMap(map);        
        }
        // GPDATA.map((each) => {
        //     makeMarker(each);
        // })


    }

    const onChange = (e) => {
        e.preventDefault(); 
        setText(e.target.inputvalue.value)
        e.target.inputvalue.value="";
      };

    return (
        <>
            <form onSubmit={onChange}>
                <input name="inputvalue" placeholder="장소입력!"  />
            </form>

            {/* <div>                <b>값: {text}</b>            </div> */}
            <div ref={container} id="map" style={{width:"500px", height:"400px"}}> </div>
            {Object.keys(result).length!==0 &&
            result[0].address_name}
            {/* {result} */}
        </>
    );
}

export default KakaoApp;