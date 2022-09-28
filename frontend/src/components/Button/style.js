import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  
  border: 1px solid ${colors.secondary.blue100};
  
  transition: all .3s ease;

  &.primary {
    padding: 1.2rem 1.6rem;
    background-color: ${colors.secondary.blue100};
    color: ${colors.primary.white100};
    &:hover {
      background-color: ${colors.secondary.blue80};
      border: 1px solid ${colors.secondary.blue80};
      cursor: pointer;
    }
  }
  
  &.secondary {
    max-width: 13.3rem;
    padding: 1.2rem 4.75rem;
    background-color: ${colors.primary.white100};
    color: ${colors.secondary.blue100};
    &:hover {
      background-color: ${colors.secondary.blue20};
      cursor: pointer;
    }
  }
  
  @media screen and (min-width: 767px) {

    &.secondary {
      max-width: 16.6rem;
      padding: 1.2rem 6.4rem;
    }
  }

  @media screen and (min-width: 900px) {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.878rem;
    
    &.secondary {
      max-width: 18.2rem;
    }

    &.primary {
      padding: 1.6rem;
    }
  }
`;