import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./CustomCarrousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

function CustomCarrousel({ slides, slidesToScroll = 1 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const slideWidth = `${100 / slidesToScroll}%`;

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {slides.map((text, index) => (
            <div
              className={classes.embla__slide}
              key={index}
              style={{ flex: `0 0 ${slideWidth}` }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <button
        className={classes.embla__prev}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <FontAwesomeIcon icon={faLeftLong} />
      </button>
      <button
        className={classes.embla__next}
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <FontAwesomeIcon icon={faRightLong} />
      </button>
    </div>
  );
}

export default CustomCarrousel;
