import { useEffect } from "react";
function usePagetitle(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  });
}
export default usePagetitle;
