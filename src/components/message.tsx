import styled from "styled-components";
import { Text } from "./Text";

interface MessageProps {
    isMine: boolean;
    children: React.ReactNode;
    marginTop?: number;
  }

export const Message = ({ isMine, children, marginTop = 16 }: MessageProps) => {
    return (
        <MessageWrapper $isMine={isMine} $marginTop={marginTop}>
          <MessageBox $isMine={isMine}>
            <Text variant="Caption" color={isMine ? "white" : undefined}>
              {children}
            </Text>
          </MessageBox>
        </MessageWrapper>
    );
}

const MessageWrapper = styled.div<{$isMine: boolean; $marginTop: number}>`
    display: flex;
    justify-content: ${({ $isMine }) => ($isMine ? "flex-end" : "flex-start")};
    width: 100%;
    margin-top: ${({ $marginTop }) => $marginTop}px;
`;

const MessageBox = styled.div<{$isMine: boolean}>`
    max-width: 70%;
    padding: 6px 16px;
    background-color: ${({ theme, $isMine }) =>
        $isMine ? theme.colors.main[500] : theme.colors.gray[50]};
    border-radius: ${({ $isMine }) =>
        $isMine ? "25px 10px 0px 25px" : "10px 25px 25px 0px"};
`;
