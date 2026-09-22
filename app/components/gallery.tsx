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

  return (
    <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight uppercase text-black dark:text-zinc-50">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-1" id={id}>
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
