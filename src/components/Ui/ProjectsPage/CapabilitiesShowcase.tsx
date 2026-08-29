import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const CapabilitiesShowcase = () => {
  return (
    <ImageFeature
      eyebrow="Capabilities"
      title={
        <>
          In-House Equipment, <span className="text-lime-400">In-House</span> Crews
        </>
      }
      description="Crushing, screening, conveyor fabrication and civil works all run through our own workshops and crews — no third-party subcontracting to manage or wait on."
      image="https://images.unsplash.com/photo-1755456030361-17b91f6f582a?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="An industrial workshop with machinery and tools staged for a project"
      imagePosition="right"
    />
  );
};

export default CapabilitiesShowcase;
