import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const SiteEngineering = () => {
  return (
    <ImageFeature
      eyebrow="Precision From Day One"
      title={
        <>
          Every Plan Starts With A <span className="text-lime-400">Real</span> Survey
        </>
      }
      description="Before an engineering plan is signed off, our team surveys the site in person — the ground truth behind every fixed-cost estimate we give a client."
      image="https://images.unsplash.com/photo-1682663810771-89d21838530f?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="Survey equipment set up on a tripod at a construction site"
      imagePosition="right"
    />
  );
};

export default SiteEngineering;
