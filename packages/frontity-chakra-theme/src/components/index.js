import { Box, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { connect, Head } from "frontity";
import React from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import { Global, css } from "frontity";
import slick from "slick-carousel/slick/slick.css";
import slickTheme from "slick-carousel/slick/slick-theme.css";
import customTheme from "./styles/style.css";
import Slider from "react-slick";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const parse = libraries.source.parse(state.router.link);
  // Check if the url is a search type
  const isSearch = Boolean(parse.query["s"]);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: {
          ...theme.fonts,
          heading: "Kelson, system-ui, Helvetica, sans-serif"
        },
        colors: { ...theme.colors, ...state.theme.colors }
      }}
    >
      <FontFace />
      <CSSReset />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        
      </Head>

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box
        as="main"
        mt={{ base: "40px", md: "0" }}
        minH="calc(100vh - 320px)"
      >
        
        {(data.isFetching && <Loading />) ||
          (isSearch && <SearchResults />) ||
          (data.isArchive && <Archive />) ||
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />)}
      </Box>

      <Footer /> 
      <Global styles={css(slick)} />
      <Global styles={css(slickTheme)} />
      <Global styles={css(customTheme)} />
    </ThemeProvider>
  );
};

export default connect(Theme);
