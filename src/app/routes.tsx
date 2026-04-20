import { createHashRouter } from "react-router";
import { ControlPanel } from "./ControlPanel";
import { StartingSoon } from "./components/StartingSoon";
import { BeRightBack } from "./components/BeRightBack";
import { StreamEnding } from "./components/StreamEnding";
import { MediaLayout } from "./components/MediaLayout";
import { JustChatting } from "./components/JustChatting";
import { CleanMediaLayout } from "./components/CleanMediaLayout";
import { Layers } from "./components/Layers";
import { OBSLayer } from "./components/OBSLayer";

export const router = createHashRouter([
  { path: "/", Component: ControlPanel },
  
  // Full Scenes wrapped in OBSLayer to ensure they hit the 2704x1520 requested size exactly
  { path: "/starting", Component: () => <OBSLayer><StartingSoon /></OBSLayer> },
  { path: "/brb", Component: () => <OBSLayer><BeRightBack /></OBSLayer> },
  { path: "/ending", Component: () => <OBSLayer><StreamEnding /></OBSLayer> },
  { path: "/media", Component: () => <OBSLayer><MediaLayout /></OBSLayer> },
  { path: "/chat", Component: () => <OBSLayer><JustChatting /></OBSLayer> },
  { path: "/clean-media", Component: () => <OBSLayer><CleanMediaLayout /></OBSLayer> },

  // Individual Background Layers
  { path: "/layer/background", Component: Layers.Background },
  { path: "/layer/background-clean", Component: Layers.BackgroundClean },

  // Starting Soon Layers
  { path: "/starting/content", Component: Layers.StartingContent },
  { path: "/starting/ribbon", Component: Layers.StartingRibbon },

  // BRB Layers
  { path: "/brb/content", Component: Layers.BRBContent },
  { path: "/brb/logo", Component: Layers.BRBLogo },

  // Ending Layers
  { path: "/ending/content", Component: Layers.EndingContent },

  // Partner Media (Clean Media) Layers
  { path: "/partner-media/videoframe", Component: Layers.PartnerMediaFrame },
  { path: "/partner-media/banner", Component: Layers.PartnerMediaBanner },
  { path: "/partner-media/logo", Component: Layers.PartnerMediaLogo },

  // Standard Media Layout Layers
  { path: "/media/videoframe", Component: Layers.MediaFrame },
  { path: "/media/chat", Component: Layers.MediaChat },
  { path: "/media/header", Component: Layers.MediaHeader },

  // Chat Layout Layers
  { path: "/chat/content", Component: Layers.ChatContent },
]);
