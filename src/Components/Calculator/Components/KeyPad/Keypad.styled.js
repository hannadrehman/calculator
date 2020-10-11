import styled from 'styled-components';

export const Wrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
	padding-top: 16px `

export const Key = styled.div`
	width: 98px;
	height:70px;
	display:flex;
	align-items:center;
	justify-content:center;
	font-size: 20px;
	margin:1px;
	&:hover {
		cursor:pointer;
	}
	&:last-child{
		width: 297px;
	}
	background-color: ${props=>props.color || '#f9f8f8'}
`
