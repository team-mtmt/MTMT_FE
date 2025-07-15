import styled from "styled-components"
import { Text } from "../../components/Text";
import NoChattingImg from "../../assets/imgs/noChatting.svg";
export const NoChatting = () => {
    return (
      <Wrapper>
        <Image src={NoChattingImg} alt="" />
        <TextWrapper>
          <Text variant="Button" color="gray.700">
            아직 대화를 나눈 사람이 없어요..
          </Text>
          <Text variant="Button" color="gray.700  ">
            매칭하기에서 멘토를 찾아보세요!
          </Text>
        </TextWrapper>
      </Wrapper>
    );
}

const Image = styled.img`
  width: 215px;
  height: 248px;
`

const Wrapper = styled.div`
height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`