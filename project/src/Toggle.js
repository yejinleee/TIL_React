import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';

const Toggle = () => {
    useEffect(() => {
        axios
          .get(process.env.REACT_APP_DB_HOST + '/api/province/findall')
          .then((response) => {
            console.log(response)
          })
        })
    return(
        <>
        hi
        </>
    )
}
export default Toggle;