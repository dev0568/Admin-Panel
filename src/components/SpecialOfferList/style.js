import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 24px;
    background: #fff;
    @media screen and (max-width:767px){
        overflow:auto;
    }
`
export const Title = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #8C8C8C;
    padding-top: 24px;
`
export const TableWrap = styled.table`
    width: 100%;
    table-layout: fixed;
`
export const TableRow = styled.tr`
    border-bottom: 1px solid #dddddd69;
`

export const TableHeadingFirst = styled.th`
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 237px;
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    color: #1C1C1C;

`
export const TableHeadingSecond = styled.th`
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 237px;
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    color: #1C1C1C;

`
export const TableHeadingThird = styled.th`
    text-align: left;
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 110px; 
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    color: #1C1C1C;

`
export const TableHeadingFourth = styled.th`
    text-align: left;
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 105px; 
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px; 
    color: #1C1C1C;

`

export const TableData = styled.td`
    padding: 17px 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    svg{
        color: #1890FF;
        width: 24px;
        height: 24px;
        float: left;

    }
    .LastOne{
        width: 50%;
        text-align: right;
    }
`
export const TableDataEdit = styled.td`
    padding: 17px 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #CCA200;
`
export const Image = styled.img`
    
`
export const Span = styled.span`
    background: green;
    border-radius: 50%;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 7px;
    vertical-align: middle;
`

export const Anchor = styled.a`
    text-decoration: none;
    color: #CCA200;
    :hover{
        color: #CCA200;

    }
`