import LiveLayout from "../components/Live-components/LiveLayout";
import Player from "../components/Live-components/Player";
import TopBar from "../components/Live-components/Top-Bar";
import Chat from "../components/Live-components/Chat";
import NextSection from "../components/Live-components/NextSection";

export default function Watch() {
  return (
    <>
      <TopBar />
      <LiveLayout>
        <Player />
        <Chat />
        <NextSection />
      </LiveLayout>
    </>
  );
}