import ImageBanner from "@/src/components/Shared/ImageBanner/ImageBanner";

const SustainabilityBanner = () => {
  return (
    <ImageBanner
      eyebrow="Land & Environment"
      title={
        <>
          Rehabilitating The Ground We <span className="text-lime-400">Work</span>
        </>
      }
      description="Every closure plan includes land rehabilitation from day one — we don't treat restoration as an afterthought once a site stops producing."
      image="https://images.unsplash.com/photo-1628487749130-2d41acb1802a?fm=jpg&q=80&w=1920&auto=format&fit=crop"
      alt="An open-pit mine site viewed across the surrounding landscape"
    />
  );
};

export default SustainabilityBanner;
