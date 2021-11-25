import React from "react";
import styled from "styled-components";


const RealizationWrapper = styled.div`
    width:80%;
    height: 100%;
    background: red;
    margin: 0 auto;
    border-radius: 50px;
    text-align: center;
`

const RealizationHeader = styled.h2`
`

const RealizationHeroImage = styled.img`
    width: 100%;
    height:10%;
`

const RealizationPreview = ({img, header}) => {
    return(
        <RealizationWrapper>
            <RealizationHeroImage src={img} />
            <RealizationHeader>{header}</RealizationHeader>
        </RealizationWrapper>
    )
}

export default RealizationPreview;