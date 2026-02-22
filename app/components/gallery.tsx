import { items } from "../../public/Items.json";
import Image from "next/image";

export default function Gallery() {
    const images = items;
    return (
        <div className="grid grid-cols-3 gap-1">
            {images.map((img) => (
                <div key={img.id} className="">
                    <Image
                        src={img.imageUrl!!}
                        alt={img.alt}
                        width={2000}
                        height={2000}
                    />
                </div>
            ))}
        </div>
    );
}