import Image from "next/image";

type GalleryItem = {
  id: number;
  imageUrl: string;
  alt: string;
};

type Props = {
  title: string;
  items: GalleryItem[];
};

export default function Gallery({ title, items }: Props) {
  const id = `${title.toLowerCase()}-gallery`;
  // Duplicated so the track can scroll a full pass (translateX(-50%)) and
  // loop back to an identical starting point without a visible seam.
  const carouselItems = [...items, ...items];

  return (
    <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight uppercase text-black dark:text-zinc-50">
        {title}
      </h2>

      <div className="w-full overflow-hidden sm:hidden" id={id}>
        <div className="animate-carousel-scroll flex w-max gap-1">
          {carouselItems.map((img, index) => (
            <div key={`${img.id}-${index}`} className="w-40 shrink-0">
              <Image
                src={img.imageUrl}
                alt={img.alt}
                width={2000}
                height={2000}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden grid-cols-3 gap-1 sm:grid" id={`${id}-grid`}>
        {items.map((img) => (
          <div key={img.id}>
            <Image
              src={img.imageUrl}
              alt={img.alt}
              width={2000}
              height={2000}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
