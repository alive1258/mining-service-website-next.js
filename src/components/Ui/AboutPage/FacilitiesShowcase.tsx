import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const FacilitiesShowcase = () => {
  return (
    <ImageFeature
      eyebrow="Our Facilities"
      title={
        <>
          Purpose-Built <span className="text-lime-400">Facilities</span>, Not Rented Sheds
        </>
      }
      description="Every region we operate in runs from a dedicated logistics and staging facility — parts, materials and equipment stocked ahead of schedule so a site never waits on a supply run."
      image="https://images.unsplash.com/photo-1741655262435-4890ab9918fa?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="A warehouse facility stocked with pallets of materials and equipment"
      imagePosition="right"
    />
  );
};

export default FacilitiesShowcase;
