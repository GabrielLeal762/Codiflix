import { Grid } from "@mui/material";
import type { Banners } from "../types";
import Header from "./Header";
function Banner(props: Banners) {
  const { banner, titulo, paragrafo } = props;
  return (
    <Grid container>
      <Grid size={12}>
        <Grid
          sx={{
            position: "relative",

            width: "100%",
            minHeight: {
              xs: "520px",
              sm: "560px",
              md: "600px",
              lg: "650px",
            },

            display: "flex",
            alignItems: "center",
            flexDirection: "column",

            backgroundImage: `
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.98) 0%,
            rgba(0, 0, 0, 0.75) 30%,
            rgba(0, 0, 0, 0.25) 65%,
            rgba(0, 0, 0, 0) 100%
          ),
          url(${banner})
        `,

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header
            img={{ width: 160, height: 60 }}
            avatar={{ width: 100, height: 100 }}
          />
          {/* CONTEÚDO */}
          <Grid
            sx={{
              width: "100%",
              maxWidth: "1200px",

              margin: "0 auto",
              marginTop: 15,

              padding: {
                xs: "0 20px",
                sm: "0 30px",
                md: "0 40px",
                lg: "0 50px",
              },

              boxSizing: "border-box",

              display: "flex",
              flexDirection: "column",

              alignItems: {
                xs: "center",
                md: "flex-start",
              },

              textAlign: {
                xs: "center",
                md: "left",
              },

              transform: {
                xs: "translateY(40px)",
                sm: "translateY(30px)",
                md: "translateY(20px)",
                lg: "translateY(10px)",
              },
            }}
          >
            {/* TÍTULO */}
            <h1
              className="h1"
              style={{
                margin: 0,
                width: "100%",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              {titulo}
            </h1>

            {/* BOTÕES */}
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                gap: 1.5,
                flexWrap: "nowrap",
                width: "fit-content",
                maxWidth: "100%",
              }}
            >
              <button className="button2">Assistir</button>

              <button className="button2">Minha Lista</button>
            </Grid>

            {/* DESCRIÇÃO */}
            <Grid
              sx={{
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: "650px",
                  lg: "650px",
                },

                maxWidth: "100%",

                marginTop: "20px",
              }}
            >
              <p
                className="p"
                style={{
                  margin: 0,
                  lineHeight: 1.6,
                  fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                }}
              >
                {paragrafo}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;
