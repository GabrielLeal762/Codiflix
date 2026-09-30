import type { LogoTamanho } from "../types";

function Logo(props: LogoTamanho) {
  const { width, height } = props;
  return (
    <img src="netflix-logo.png" style={{ width: width, height: height }} />
  );
}

export default Logo;
