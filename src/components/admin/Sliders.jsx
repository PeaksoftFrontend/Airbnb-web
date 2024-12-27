import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { styled } from "@mui/material";

const image = [
  "https://s3-alpha-sig.figma.com/img/d191/5c46/b81941212a948a76824c21edd9c509af?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGqtCqJZLSufP6vEHRMOnrmmMntYUC2tNKTf~crxCdZArRa3raiwPfdb8jOhmUk9JFvC-i1yTUWbGCNyNsASD4IeVlZKelhTO6dhaKjDzDYUd2yC7FY1B0X4PqMgYDh4gMdWk6Ogo3m8XOOrchfObSGriN~Vf9YEymyYdinXv2oiM1IztvTLYyH6i8gAastbsopTZsnRJYPVtbNJ6r6dkXvFhx9PSictabDi3If4yT1idza-9SdOuYopwOc0NiPlNai7ruU0KkJ99evCebJf7VkpFn96J~uYRlj9PfZxJEIU~c2Wj~mI-AaILWwzkW82da4VQG1VUOiD--rP6ArvQg__",

  "https://s3-alpha-sig.figma.com/img/f3fb/d735/f97c76cf6d37044fead6fcdd7924e622?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1-upQquM-q~OUCZhk-4AonO5b9ubUkTfD9q6DVq9Pj29e06xG8nSUzdupz6AfOdENJHVy9oofg7p6QXBfnXxBfyXnX6LmJ6jre5tNeLGpJ6knc-wzfqn4PfvVMwqajLffpDbY6n8NY~3jaZMq7y0VhPzSC~0ovtBslYVToYs-sY-GNpTLNwCGypHHxEudtj7PoDECAX7rr74jotlxGuGa9pGQKYD240zgp8geJgZtUwxQF9Wz9wJzQAGqlPLGNUsvGxbZrQ90lhcuFb4KA5bPovMDhlPtgPpb1s~UlgD~XyXkimdnutUCCJdcL1p2vcd-5D7KMgyjiR2TamSK-eqQ__",

  "https://s3-alpha-sig.figma.com/img/f0fd/1fb4/9b072855c55e71e699ad7bc3bbbe7462?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHBAaHk39kY85Sm2jpcr3UixbWM5Rc6bqfuceyDIR3b1LhC360aQcjSIrhJLnpCibpDbZ4~CbhiZzQ~pKW3iqlrfp3obs2JY4LeWPjwCa9S2dpRlvqFns1La0K12UeSQO8ebmh5WUbQ9eoYmft6sh8bO832R9tQ5cHGaRvXv8R2raAYWRyA3P16JeiFGIsVwJ-9G4ShQwhCei7opZDyOmVzW2pIMy2CaWv81FP1LWWX4hnWYrUaAFxUhnIkRvKeJt7wPuVIHrNXBjsAPFLc5l5Z-W54hkCTdz3XZ9Mg4ioX43bjjsl8BCcEDQR~DaYdtmPgQ6CZJgdM7XbbGw1LkwQ__",

  "https://s3-alpha-sig.figma.com/img/b24a/1f9f/05941e018a384cc6e08778c6317dc348?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-NAkLR1ivgSJy1p-DYx9p6lNhv0Uv63IG3pQmt7aVFKAW721PS1Mm6Db6WN382NjgzaaqAzDELBIahIV81ZpCSPGesChTTzQRZBhGtmVh4MOyTv1FNbDpWg9NsBXi7dl0Naup1-xIY6jZ12r4g~u5ahOvNQlfdamVtqZ~fpg6P82wBDOCUrUh2vLfVQ5KPy4~d3JyJp0OvKDcojnXf3Ro-oIIuO7G~uNjnON59zenudbZqS0mvHMkKpfDNBVTwQX53KdKJXihVyNnHAkxFAyEEcYzCVo95eOHPsefnuKbh91epjyzV~2eOFbgoMQgVOz~e5OzaM9F4L0vD3Uq65tw__",
];
const images = [
  "https://s3-alpha-sig.figma.com/img/f3fb/d735/f97c76cf6d37044fead6fcdd7924e622?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1-upQquM-q~OUCZhk-4AonO5b9ubUkTfD9q6DVq9Pj29e06xG8nSUzdupz6AfOdENJHVy9oofg7p6QXBfnXxBfyXnX6LmJ6jre5tNeLGpJ6knc-wzfqn4PfvVMwqajLffpDbY6n8NY~3jaZMq7y0VhPzSC~0ovtBslYVToYs-sY-GNpTLNwCGypHHxEudtj7PoDECAX7rr74jotlxGuGa9pGQKYD240zgp8geJgZtUwxQF9Wz9wJzQAGqlPLGNUsvGxbZrQ90lhcuFb4KA5bPovMDhlPtgPpb1s~UlgD~XyXkimdnutUCCJdcL1p2vcd-5D7KMgyjiR2TamSK-eqQ__",

  "https://s3-alpha-sig.figma.com/img/f0fd/1fb4/9b072855c55e71e699ad7bc3bbbe7462?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHBAaHk39kY85Sm2jpcr3UixbWM5Rc6bqfuceyDIR3b1LhC360aQcjSIrhJLnpCibpDbZ4~CbhiZzQ~pKW3iqlrfp3obs2JY4LeWPjwCa9S2dpRlvqFns1La0K12UeSQO8ebmh5WUbQ9eoYmft6sh8bO832R9tQ5cHGaRvXv8R2raAYWRyA3P16JeiFGIsVwJ-9G4ShQwhCei7opZDyOmVzW2pIMy2CaWv81FP1LWWX4hnWYrUaAFxUhnIkRvKeJt7wPuVIHrNXBjsAPFLc5l5Z-W54hkCTdz3XZ9Mg4ioX43bjjsl8BCcEDQR~DaYdtmPgQ6CZJgdM7XbbGw1LkwQ__",

  "https://s3-alpha-sig.figma.com/img/b24a/1f9f/05941e018a384cc6e08778c6317dc348?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-NAkLR1ivgSJy1p-DYx9p6lNhv0Uv63IG3pQmt7aVFKAW721PS1Mm6Db6WN382NjgzaaqAzDELBIahIV81ZpCSPGesChTTzQRZBhGtmVh4MOyTv1FNbDpWg9NsBXi7dl0Naup1-xIY6jZ12r4g~u5ahOvNQlfdamVtqZ~fpg6P82wBDOCUrUh2vLfVQ5KPy4~d3JyJp0OvKDcojnXf3Ro-oIIuO7G~uNjnON59zenudbZqS0mvHMkKpfDNBVTwQX53KdKJXihVyNnHAkxFAyEEcYzCVo95eOHPsefnuKbh91epjyzV~2eOFbgoMQgVOz~e5OzaM9F4L0vD3Uq65tw__",
];

export const Sliders = () => {
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    swiperRef.current?.swiper?.slideTo(index, 0, false);
  };

  return (
    <>
      <StyledSwiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
      >
        {image.map((image, index) => (
          <SwiperSlide key={index}>
            <StyledImg src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <StyledDiv>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleButtonClick(index)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <Styledimage src={image} alt={`Button ${index}`} />
          </button>
        ))}
      </StyledDiv>
    </>
  );
};

const StyledSwiper = styled(Swiper)({
  width: "630px ",
  height: "507px",
  margin: "0 auto",
});
const StyledImg = styled("img")({
  width: "630px",
  height: "507px",
  margin: "0 aauto",
});

const StyledDiv = styled("div")({
  display: "flex",
  marginLeft: "40px",
  marginTop: "20px",
  gap: "17px",
});

const Styledimage = styled("img")({
  width: "196px",
  height: "137px",
});
