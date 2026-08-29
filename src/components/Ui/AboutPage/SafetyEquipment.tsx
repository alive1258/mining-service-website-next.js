import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const SafetyEquipment = () => {
  return (
    <ImageFeature
      eyebrow="Equipped For Every Site"
      title={
        <>
          Safety Gear Issued, Not <span className="text-lime-400">Rationed</span>
        </>
      }
      description="Every crew member is issued site-rated PPE on day one — no shared or aging gear. Equipment is inspected and rotated on a fixed schedule, tracked the same way we track the machinery."
      image="https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="A rack of yellow safety hard hats ready for site crews"
      imagePosition="left"
    />
  );
};

export default SafetyEquipment;
