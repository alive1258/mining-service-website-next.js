import ImageBanner from "@/src/components/Shared/ImageBanner/ImageBanner";

const TrustedByBanner = () => {
  return (
    <ImageBanner
      eyebrow="Track Record"
      title={
        <>
          Trusted By Operators <span className="text-lime-400">Worldwide</span>
        </>
      }
      description="From single-site retrofits to multi-year programs, operators bring us back because the plan we quote is the plan we deliver."
      image="https://images.unsplash.com/photo-1517089472343-85fc51aeb327?fm=jpg&q=80&w=1920&auto=format&fit=crop"
      alt="Aerial view of heavy equipment operating on an active mining site"
    />
  );
};

export default TrustedByBanner;
