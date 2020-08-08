import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// CUSTOM IMPORTS
import { colors } from '../../styles';

export const Container = styled(RectButton)`
  padding: 0 16px;
  height: 56px;
  border-radius: 16px;
  background: ${colors.accent};

  align-items: center;
  justify-content: center;
  `;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
