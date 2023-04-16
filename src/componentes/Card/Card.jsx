import styled from '@emotion/styled'

const DivEstilizada = styled.div`
padding: 32px;
background: #EBEAF9;
border: 1px solid #5754ed;
border-radius: 32px;

`

export const Card = ({children}) =>{
    return(<DivEstilizada>
        {children}
    </DivEstilizada>)
}