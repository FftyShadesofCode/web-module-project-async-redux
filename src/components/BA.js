
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { cat } from "../actions/actions";
import styled from "styled-components"

const StyledCat = styled.div` {
    background: url("https://image.shutterstock.com/image-vector/frame-cat-background-260nw-1827515063.jpg") no-repeat center center;
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin: auto;
    max-width: 75%;
    height: auto;
    }

    h2{
        text-align: center;
    }

    p{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-top: 24%;
        margin-right: 35%;
        margin-left: 35%;
        
    }

    button{
        margin-top: 15%;
        margin-left: 37%;
    }
`


const CatFact = (props) => {
    useEffect(() => {
        props.cat();
    }, []);

    return (
        <>
            <StyledCat>
            <h2>Cat Fact </h2>
            <p>{props.fact}</p>
            <button onClick={() => props.cat()}>Puuuurrrrrrrrfect! Tell me more about "cats"</button>
            </StyledCat>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        fact: state.fact,
        error: state.error,
    }
}

const mapDispatchToProps = {cat}

export default connect(mapStateToProps,mapDispatchToProps)(CatFact);