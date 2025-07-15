import styled from "styled-components"

export const Tag = () => {
    return (
        <TagWrapper>
            <p style={{fontSize: '11px'}}>⚽️</p>
            <span style={{fontSize: '11px'}}>축구</span>
        </TagWrapper>
    )
}

const TagWrapper = styled.div`
    display: flex;
    padding: 4px 8px;
    gap: 6px;
    border: 1px solid ${({theme}) => theme.colors.main[500]};
    width: fit-content;
    border-radius: 50px;
`;