// Styles
import Style from "./Wrapper.module.css";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className={Style.wrapper}>{children}</div>;
}
