import { createBrowserRouter } from "react-router";
import { ControlPanel } from "./ControlPanel";
import { StartingSoon } from "./components/StartingSoon";
import { BeRightBack } from "./components/BeRightBack";
import { StreamEnding } from "./components/StreamEnding";
import { MediaLayout } from "./components/MediaLayout";
import { JustChatting } from "./components/JustChatting";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ControlPanel,
  },
  {
    path: "/starting",
    Component: StartingSoon,
  },
  {
    path: "/brb",
    Component: BeRightBack,
  },
  {
    path: "/ending",
    Component: StreamEnding,
  },
  {
    path: "/media",
    Component: MediaLayout,
  },
  {
    path: "/chat",
    Component: JustChatting,
  },
]);
