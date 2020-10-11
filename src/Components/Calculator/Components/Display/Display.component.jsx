import React from 'react';
import {Wrapper,MainText,SubText} from './Display.styled';

function Display({value, upperValue}){
 return (
	 <Wrapper>
		 <SubText>{upperValue}</SubText>
		 <MainText>{value === ''? '0' : value}</MainText>
	 </Wrapper>
 )
}

export default Display
