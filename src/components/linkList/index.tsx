import React from 'react';

import { TouchableOpacity, LinkTitle, IconArrowRight } from './styles';

import { tealish } from '../../assets/colors';

import { View } from 'react-native';

export const LinkList = (props) => {
  const { data } = props;

  const renderLink = (item, index) => (
    <TouchableOpacity
      key={index}
      disabled={item.disabled}
      borderBottomWidth={props.borderBottomWidth || (index === data.length - 1 && data.length > 1 ? '0' : '1')}
      onPress={item.onPress}
    >
      <LinkTitle>{item.title} </LinkTitle>
      <IconArrowRight stroke={tealish} width={12} height={12} />
    </TouchableOpacity>
  );

  return <View>{data.map((item, index) => renderLink(item, index))}</View>;
};
