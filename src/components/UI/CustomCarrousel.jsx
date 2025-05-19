import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./CustomCarrousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

function CustomCarrousel({ slides, slidesToShow = 3, slidesToScroll = 3 }) {
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);
  const [currentSlidesToScroll, setCurrentSlidesToScroll] =
    useState(slidesToScroll);

  useEffect(() => {
    const updateForDevice = () => {
      const isMobile = window.innerWidth <= 768;
      setCurrentSlidesToShow(isMobile ? 2 : slidesToShow);
      setCurrentSlidesToScroll(isMobile ? 2 : slidesToScroll);
    };

    updateForDevice();

    window.addEventListener("resize", updateForDevice);
    return () => window.removeEventListener("resize", updateForDevice);
  }, [slidesToShow, slidesToScroll]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: currentSlidesToScroll,
  });

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

  const slideWidth = `${Math.floor(100 / currentSlidesToShow)}%`;

  return (
    <div className={classes.embla}>
      <div className={classes.projHeader}>
        <h2>Projects</h2>
        <div className={classes.carrouselActions}>
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
      </div>

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
    </div>
  );
}

export default CustomCarrousel;
