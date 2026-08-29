import ImageBanner from "@/src/components/Shared/ImageBanner/ImageBanner";

const PartnershipsBanner = () => {
  return (
    <ImageBanner
      eyebrow="Governance & Partnerships"
      title={
        <>
          Built On <span className="text-lime-400">Trust</span>, Not Just Contracts
        </>
      }
      description="We work as an extension of a client's own team — transparent reporting, shared safety data, and site reviews the client is always welcome to sit in on."
      image="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?fm=jpg&q=80&w=1920&auto=format&fit=crop"
      alt="Business people gathered around a table in a partnership meeting"
    />
  );
};

export default PartnershipsBanner;
