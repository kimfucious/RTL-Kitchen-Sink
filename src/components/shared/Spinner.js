import React from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import BeatLoader from "react-spinners/BeatLoader";
import CircleLoader from "react-spinners/CircleLoader";
import RingLoader from "react-spinners/RingLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import MoonLoader from "react-spinners/MoonLoader";

const colors = {
  danger: "#d9534f",
  info: "#5bc0de",
  light: "#f8f9fa",
  muted: "#6c757d",
  primary: "#f76304",
  secondary: "#5bc0de",
  success: "#5cb85c"
};
const override = css`
  display: flex;
  margin: 0 auto;
  &hover: {
    color: ${colors.light};
  }
`;
export const Spinner = ({ size, color, type = "puff" }) => {
  if (type === "beat") {
    return (
      <BeatLoader
        css={override}
        size={size}
        color={color ? colors[color] : colors.light}
      />
    );
  }
  if (type === "circle") {
    return (
      <CircleLoader
        css={override}
        size={size}
        color={color ? colors[color] : colors.light}
      />
    );
  }
  if (type === "moon") {
    return (
      <MoonLoader
        css={override}
        size={size}
        color={color ? colors[color] : colors.primary}
      />
    );
  }
  if (type === "propagate") {
    return (
      <PropagateLoader
        css={override}
        size={size}
        color={color ? colors[color] : colors.primary}
      />
    );
  }
  if (type === "puff") {
    return (
      <PuffLoader
        css={override}
        size={size}
        color={color ? colors[color] : colors.primary}
      />
    );
  }
  if (type === "ring") {
    return (
      <RingLoader
        css={override}
        size={size}
        color={color ? colors[color] : colors.primary}
      />
    );
  }
  return (
    <BounceLoader
      css={override}
      size={size}
      color={color ? colors[color] : colors.light}
    />
  );
};
