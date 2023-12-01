import { useRef } from "react";

export default function useRenderCount() {
  const renderRef = useRef(0);
  renderRef.current++;
  return renderRef.current;
}
