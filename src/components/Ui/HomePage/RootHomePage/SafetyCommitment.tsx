import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const SafetyCommitment = () => {
  return (
    <ImageFeature
      eyebrow="Safety First"
      title={
        <>
          Every Worker Goes Home <span className="text-lime-400">Safe</span>, Every Shift
        </>
      }
      description="Safety isn't a checklist bolted onto the schedule — it's built into how we plan, brief and run every shift. Our lost-time injury rate sits well below industry average across every active site."
      image="https://images.unsplash.com/photo-1705579611249-9861db5469ea?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="A site worker in a hard hat and safety vest operating machinery"
      imagePosition="left"
    />
  );
};

export default SafetyCommitment;
