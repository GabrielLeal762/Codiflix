import type { Props } from "../types";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function StyledCard(props: Props) {
  return (
    <>
      <Grid container>
        <Grid>
          {props.props.map((categorias, index) => (
            <section key={index}>
              <h2 className="h2">{categorias.titulos}</h2>

              <Swiper
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
                spaceBetween={1}
                slidesPerView={5}
              >
                {categorias.photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <img className="img" src={photo} alt={categorias.titulos} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default StyledCard;
