import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const FleetShowcase = () => {
  return (
    <ImageFeature
      eyebrow="Our Fleet"
      title={
        <>
          Heavy Equipment, <span className="text-lime-400">Site-Ready</span> On Day One
        </>
      }
      description="From primary crushers to haul trucks, our fleet is maintained to manufacturer spec and staged for rapid mobilization — so a signed plan turns into boots on the ground within weeks, not months."
      image="https://images.unsplash.com/photo-1760568787655-247d67618f37?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="A dump truck unloading rock at an active quarry site"
      imagePosition="right"
    />
  );
};

export default FleetShowcase;
