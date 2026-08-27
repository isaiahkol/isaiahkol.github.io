import { useEffect, useState } from "react";

export type ExperienceMediaItem = {
  type: "image" | "video" | "placeholder";
  src: string;
  alt: string;
  caption?: string;
};

export default function ExperienceGallery({ items, label }: { items: ExperienceMediaItem[]; label: string }) {
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

  const renderItem = (media: ExperienceMediaItem, index: number, enlarged = false) => {
    if (media.type === "placeholder") return <div className="experience-gallery-placeholder"><span>public{media.src}</span></div>;
    if (media.type === "video") return <video src={media.src} controls preload="metadata"><a href={media.src}>Download video</a></video>;
    return <button className={enlarged ? "lightbox-image-button" : "experience-image-button"} onClick={() => setLightbox(index)} aria-label={`Open full-size image: ${media.alt}`}><img src={media.src} alt={media.alt} /></button>;
  };

  return <section className="experience-gallery" aria-label={`${label} media gallery`}>
    <div className="experience-gallery-top"><strong>Experience media</strong><span>{active + 1} / {items.length}</span></div>
    <div className="experience-gallery-main">{renderItem(item, active)}{item.type === "image" && <span className="experience-zoom-hint">Enlarge</span>}</div>
    <div className="experience-gallery-meta"><p>{item.caption || item.alt}</p><div><button onClick={previous}>Previous</button><button onClick={next}>Next</button></div></div>
    {items.length > 1 && <div className="experience-gallery-thumbs" role="list" aria-label={`Choose ${label} media`}>
      {items.map((media, index) => <button className={index === active ? "active" : ""} onClick={() => setActive(index)} key={`${media.src}-${index}`} aria-label={`Show item ${index + 1}: ${media.alt}`} role="listitem">
        {media.type === "image" ? <img src={media.src} alt="" /> : <span><b>{media.type === "video" ? "Video" : "Photo"}</b><small>{index + 1}</small></span>}
      </button>)}
    </div>}
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Full-size ${label} image`} onMouseDown={event => { if (event.target === event.currentTarget) setLightbox(null); }}>
      <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close full-size image">×</button>
      <button className="lightbox-prev" onClick={() => setLightbox(index => index === null ? null : (index - 1 + items.length) % items.length)} aria-label="Previous item">Prev</button>
      <div className="lightbox-content">{renderItem(items[lightbox], lightbox, true)}<p>{items[lightbox].caption || items[lightbox].alt}</p></div>
      <button className="lightbox-next" onClick={() => setLightbox(index => index === null ? null : (index + 1) % items.length)} aria-label="Next item">Next</button>
    </div>}
  </section>;
}
