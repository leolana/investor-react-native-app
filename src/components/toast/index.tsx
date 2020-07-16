import React, { useState, useEffect } from "react";

import { Container, Text, SafeArea } from "./styles";

import { useSelector } from "react-redux";
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import store from "../../store";

import { showToast, destroyToast } from "../../store/actions";

import { IconClose, IconCheckAll, IconNoItem } from "../../assets/icons";

import { toastError, toastSuccess, toastInfo } from "../../assets/colors";

const { width } = Dimensions.get("screen");

export const ToastView = (props) => {
  // States

  const [isVisible, setIsVisible] = useState(false);

  const [opacity] = useState(new Animated.Value(0));

  // vars

  const toastParams = useSelector(({ toastParams }) => toastParams);

  const style = {
    transform: [
      {
        translateX: opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [width, 0],
        }),
      },
    ],
  };

  // methods

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const destroy = async () => {
    if (!isVisible) return;

    store.dispatch(destroyToast());

    setIsVisible(false);
  };

  opacity.addListener(({ value }) => {
    if (value !== 0) return setIsVisible(true);

    destroy();
  });

  const getParamsByType = (type) => {
    const params = {
      success: {
        icon: <IconCheckAll width={16} height={16} stroke={toastSuccess} />,
        color: toastSuccess,
      },
      error: {
        icon: <IconNoItem width={24} height={24} stroke={toastError} />,
        color: toastError,
      },
      info: {
        icon: <IconClose width={16} height={16} stroke={toastInfo} />,
        color: toastInfo,
      },
    };

    return params[type];
  };

  const baseToast = () => {
    if (toastParams === undefined || toastParams === null) return;

    const { type, text } = toastParams;

    const { color, icon } = getParamsByType(type);

    return (
      <TouchableWithoutFeedback onPress={() => destroy()}>
        <Container background={color}>
          {icon}
          <Text>{text}</Text>
        </Container>
      </TouchableWithoutFeedback>
    );
  };

  const baseAnimation = (toValue, duration, delay) => {
    return Animated.timing(opacity, {
      toValue,
      duration,
      delay,
      ease: Easing.ease,
    });
  };

  useEffect(() => {
    if (toastParams === undefined || toastParams === null) return;

    if (isVisible) return;

    const duration = toastParams.duration || 550;

    const show = baseAnimation(1, duration);
    const hide = baseAnimation(0, duration, 2000);

    Animated.sequence([show, hide]).start();
  }, [isVisible, toastParams]);

  // render

  return isVisible ? <SafeArea style={style}>{baseToast()}</SafeArea> : null;
};

export const Toast = {
  showSuccess: (text) => store.dispatch(showToast({ type: "success", text })),
  showError: (text) => store.dispatch(showToast({ type: "error", text })),
};
