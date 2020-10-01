import React, {useEffect} from "react";

import {connect} from "react-redux";

import {setRequestData} from "../../../redux/reducers/appReducer";
import Gallery from "../index";


const mapStateToProps = (({app}) => ({
    data: app.data
}));

export default connect(mapStateToProps, {setRequestData}) ( ({setRequestData, data}) => {

    useEffect( () => {
        setRequestData()
    }, []);

    return <Gallery data={data}/>

})
