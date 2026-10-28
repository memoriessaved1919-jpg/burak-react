import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

/** Vaqtinchalik ma'lumot (maydon nomlari bazadagi products kolleksiyasi bilan bir xil) **/
const products = [
  {
    productName: "Korean Spicy Soup",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-2.jpeg"],
  },
  {
    productName: "Vegetarian Soup",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-1.webp"],
  },
  {
    productName: "Salmon Pasta",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-3.jpeg"],
  },
  {
    productName: "Kebuli Rice",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-4.webp"],
  },
  {
    productName: "Korean Spicy Soup",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-5.webp"],
  },
  {
    productName: "Vegetarian Soup",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-6.webp"],
  },
  {
    productName: "Salmon Pasta",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-1.webp"],
  },
  {
    productName: "Kebuli Rice",
    productPrice: 15,
    productSize: "LARGE",
    productViews: 100,
    productImages: ["/img/product-7.jpeg"],
  },
];

const categories = ["DISH", "SALAD", "DRINK", "DESERT", "OTHER"];
const filters = ["NEW", "PRICE", "VIEWS"];
const familyBrands = [
  { brandName: "Gurme", imagePath: "/img/gurme.webp" },
  { brandName: "Seafood", imagePath: "/img/seafood.webp" },
  { brandName: "Sweets", imagePath: "/img/sweets.webp" },
  { brandName: "Doner", imagePath: "/img/doner.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack className={"products-main"}>
          {/* SUBJECT: sarlavha + qidiruv */}
          <Stack className={"avatar-big-box"}>
            <Box className={"top-title"}>Burak Restaurant</Box>
            <Box className={"single-search"}>
              <input
                type={"search"}
                className={"single-search-input"}
                placeholder={"Type here"}
              />
              <Button
                className={"single-button-search"}
                endIcon={<SearchIcon />}
              >
                SEARCH
              </Button>
            </Box>
          </Stack>

          {/* FILTER: NEW / PRICE / VIEWS */}
          <Stack className={"dishes-filter-section"}>
            {filters.map((filter, index) => (
              <Button
                key={filter}
                variant={"contained"}
                color={index === 0 ? "primary" : "secondary"}
                className={"filter-btn"}
              >
                {filter}
              </Button>
            ))}
          </Stack>

          {/* CATEGORY + PRODUCTS */}
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={"contained"}
                  color={index === 0 ? "primary" : "secondary"}
                  className={"category-btn"}
                >
                  {category}
                </Button>
              ))}
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => (
                  <Stack key={index} className={"product-card"}>
                    <Stack
                      className={"product-img"}
                      sx={{
                        backgroundImage: `url(${product.productImages[0]})`,
                      }}
                    >
                      <div className={"product-sale"}>
                        {product.productSize} size
                      </div>
                      <Button className={"shop-btn"}>
                        <img src={"/icons/shopping-cart.svg"} alt={"cart"} />
                      </Button>
                      <Button className={"view-btn"}>
                        <Badge
                          badgeContent={product.productViews}
                          color={"secondary"}
                        >
                          <RemoveRedEyeIcon sx={{ color: "#ffffff" }} />
                        </Badge>
                      </Button>
                    </Stack>
                    <Box className={"product-desc"}>
                      <span className={"product-title"}>
                        {product.productName}
                      </span>
                      <div className={"product-price"}>
                        <img src={"/img/coin.jpeg"} alt={"coin"} />
                        {product.productPrice}
                      </div>
                    </Box>
                  </Stack>
                ))
              ) : (
                <Box className={"no-data"}>Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          {/* PAGINATION */}
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      {/* OUR FAMILY BRANDS */}
      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            {familyBrands.map((brand, index) => (
              <Box key={index} className={"review-box"}>
                <img src={brand.imagePath} alt={brand.brandName} />
              </Box>
            ))}
          </Stack>
        </Container>
      </div>

      {/* OUR ADDRESS */}
      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              className={"address-map"}
              title={"Burak location"}
              src={
                "https://maps.google.com/maps?q=Gimhae%2C%20South%20Korea&z=13&output=embed"
              }
              loading={"lazy"}
              referrerPolicy={"no-referrer-when-downgrade"}
            />
          </Stack>
        </Container>
      </div>
    </div>
  );
}
