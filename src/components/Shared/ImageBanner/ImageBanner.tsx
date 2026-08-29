import Image from "next/image";
import Badge from "@/src/components/Shared/Badge/Badge";

interface ImageBannerProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  alt: string;
}

/** Full-bleed image banner with bottom-anchored copy — used for immersive
 * one-off statements (environment, partnerships) between denser sections. */
const ImageBanner = ({ eyebrow, title, description, image, alt }: ImageBannerProps) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container">
        <div className="relative h-[320px] overflow-hidden rounded-[28px] sm:h-[400px] lg:h-[460px]">
          <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-12 lg:p-16">
            <Badge className="mb-5 w-fit">{eyebrow}</Badge>
            <h2 className="font-display max-w-lg text-2xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-[15px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
