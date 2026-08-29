import ImageFeature from "@/src/components/Shared/ImageFeature/ImageFeature";

const JoinTeam = () => {
  return (
    <ImageFeature
      eyebrow="Careers"
      title={
        <>
          Build Your Career On <span className="text-lime-400">Real</span> Sites
        </>
      }
      description="We're always looking for engineers, operators and site supervisors who want hands-on work with a crew that takes safety and craft seriously. Reach out even if you don't see an open role listed."
      image="https://images.unsplash.com/photo-1759922378222-47ad736a174d?fm=jpg&q=80&w=1600&auto=format&fit=crop"
      alt="A crew of workers in hard hats and safety vests gathered on site"
      imagePosition="right"
      cta={{ label: "Get In Touch", href: "/contact" }}
    />
  );
};

export default JoinTeam;
