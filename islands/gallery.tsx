import {
  useEffect,
  useRef,
  useState,
} from "https://esm.sh/v116/preact@10.13.1/hooks";

export interface IGalleryImage {
  src: string;
  alt?: string;
}

export interface IGallerySectionProps {
  imageList: IGalleryImage[];
}

export default function GallerySection(props: IGallerySectionProps) {
  const [showScrollbarPadding, setShowScrollbarPadding] =
    useState<boolean>(false);
  const imageListRef = useRef<HTMLDivElement>(null);

  function bindFancybox() {
    // @ts-ignore: Fancybox library
    Fancybox.bind('[data-fancybox="gallery"]', {
      // @ts-ignore: Fancybox library caption
      caption: (fancybox, slide) => {
        const caption = slide.caption || "";

        return `${slide.index + 1} / ${
          fancybox.carousel?.slides.length
        } <br /> ${caption}`;
      },
    });
  }

  function resizePageSubscribe() {
    if (imageListRef.current) {
      imageListRef.current.addEventListener("scroll", () => {
        imageListRef.current &&
          setShowScrollbarPadding(
            window.innerWidth <= imageListRef.current.scrollWidth
          );
      });
    }
  }

  useEffect(() => {
    bindFancybox();
    resizePageSubscribe();
  }, []);

  return (
    <section class="gallery">
      <div className="container">
        <div
          ref={imageListRef}
          className={`imageList ${showScrollbarPadding && "show"}`}
        >
          {props.imageList.map((image) => (
            <a data-src={image.src} data-fancybox="gallery">
              <img src={image.src} loading="lazy" alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
