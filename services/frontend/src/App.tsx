import GameCard from "./Components/GameCard/GameCard";

export default function App() {
  return (
    <div>
      <GameCard
        gameData={{
          name: "test",
          imageURL:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2Foffer%2F3428aaab2c674c98b3acb789dcfaa548%2FEGS_FalloutNewVegasUltimateEdition_ObsidianEntertainment_Editions_S2_1200x1600-45b1c7c6093bfc78539a8faeead2c929&f=1&nofb=1&ipt=1d22289684cf5f4bf84c477fa38c8f1980b85efbea8ffb32c3805f197ef0b236&ipo=images",
          status: "playing",
        }}
      />
    </div>
  );
}
