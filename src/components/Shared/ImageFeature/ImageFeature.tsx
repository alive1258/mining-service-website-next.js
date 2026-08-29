import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/src/components/Shared/Badge/Badge";

interface ImageFeatureProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  alt: string;
  imagePosition?: "left" | "right";
  cta?: { label: string; href: string };
}

const ImageFeature = ({
  eyebrow,
  title,
  description,
  image,
  alt,
  imagePosition = "right",
  cta,
}: ImageFeatureProps) => {
  const textBlock = (
    <div>
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-[34px]">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-relaxed text-white/50 sm:text-[15px]">
        {description}
      </p>
      {cta && (
        <Link
          href={cta.href}
          className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-lime-950 transition hover:bg-lime-300"
        >
          {cta.label}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative h-[240px] overflow-hidden rounded-3xl sm:h-[320px] lg:h-[380px]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
};

export default ImageFeature;
