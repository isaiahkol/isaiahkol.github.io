import { useEffect, useState } from "react";

export type MediaItem = { type: "image" | "video" | "youtube" | "placeholder"; src: string; alt: string; caption?: string };

type MediaGalleryProps = {
  items: MediaItem[];
  compact?: boolean;
  heading?: string;
  label?: string;
};

export default function MediaGallery({ items, compact = false, heading = "Project media", label = "Project" }: MediaGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const item = items[active];
  const previous = () => setActive(index => (index - 1 + items.length) % items.length);
  const next = () => setActive(index => (index + 1) % items.length);

  useEffect(() => {
    if (lightbox === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") setLightbox(index => index === null ? null : (index - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") setLightbox(index => index === null ? null : (index + 1) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", handleKey); };
  }, [lightbox, items.length]);

  const renderMain = (media: MediaItem, index: number, enlarged = false) => {
    if (media.type === "placeholder") return <div className="media-placeholder"><strong>Photo placeholder</strong><span>public{media.src}</span></div>;
    if (media.type === "image") return <button className={enlarged ? "lightbox-image-button" : "main-image-button"} onClick={() => setLightbox(index)} aria-label={`Open full-size image: ${media.alt}`}><img src={media.src} alt={media.alt} /></button>;
    if (media.type === "youtube") return <iframe src={media.src} title={media.alt} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
    return <video src={media.src} controls preload="metadata"><a href={media.src}>Download video</a></video>;
  };

  return <section className={`media-section${compact ? " compact" : ""}`} aria-label={`${label} media gallery`}>
    <div className="media-heading"><div><h2>{heading}</h2></div><span>{active + 1} / {items.length}</span></div>
    <div className="carousel-main">{renderMain(item, active)}{item.type === "image" && <span className="zoom-hint">Click to enlarge</span>}</div>
    {(item.caption || compact) && <p className="media-caption">{item.caption || item.alt}</p>}
    <div className="carousel-controls"><button onClick={previous} aria-label="Previous media">Previous</button><button onClick={next} aria-label="Next media">Next</button></div>
    <div className="media-thumbnails" role="list" aria-label={`Choose ${label.toLowerCase()} media`}>
      {items.map((media, index) => <button className={index === active ? "active" : ""} onClick={() => setActive(index)} key={`${media.src}-${index}`} aria-label={`Show item ${index + 1}: ${media.alt}`} role="listitem">
        {media.type === "image" ? <img src={media.src} alt="" /> : <span className="video-thumb"><b>{media.type === "youtube" ? "YouTube" : media.type === "video" ? "Video" : "Photo"}</b><small>{index + 1}</small></span>}
      </button>)}
    </div>
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Full-size ${label.toLowerCase()} image`} onMouseDown={event => { if (event.target === event.currentTarget) setLightbox(null); }}>
      <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close full-size image">×</button>
      <button className="lightbox-prev" onClick={() => setLightbox(index => index === null ? null : (index - 1 + items.length) % items.length)} aria-label="Previous item">Prev</button>
      <div className="lightbox-content">{renderMain(items[lightbox], lightbox, true)}<p>{items[lightbox].caption || items[lightbox].alt}</p></div>
      <button className="lightbox-next" onClick={() => setLightbox(index => index === null ? null : (index + 1) % items.length)} aria-label="Next item">Next</button>
    </div>}
  </section>;
}
