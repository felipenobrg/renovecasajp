import { Spinner } from "./styles";

export function LoadingSpinner() {
  return (
    <Spinner>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </Spinner>
  );
}
