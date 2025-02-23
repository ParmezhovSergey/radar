import { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { getProducts } from "./../api/api.js";
import style from "./Products.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const columns = [
  { field: "name", headerName: "Название", width: 200, align: "left" },
  { field: "price", headerName: "Цена", width: 130, align: "left" },
  { field: "stock", headerName: "Кол-во товара", width: 130, align: "left" },
  {
    field: "brand",
    headerName: "Бренд товара",
    type: "number",
    width: 120,
    align: "left",
  },
  {
    field: "rating",
    headerName: "Средняя оценка продукта",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    align: "left",
  },
  {
    field: "reviews_count",
    headerName: "Кол-во отзывов",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    align: "left",
  },
  {
    field: "barcode",
    headerName: "Штрихкод товара",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    align: "left",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

const getCookies = (name) => {
  for (const entryStr of document.cookie.split("; ")) {
    const [entryName, entryValue] = entryStr.split("=");

    if (decodeURIComponent(entryName) === name) {
      return entryValue;
    }
  }
};

const ProductsList = () => {
  const [product] = useState(JSON.parse(localStorage.getItem("data")));

  useEffect(() => {
    getProducts(1);
  }, []);

  return (
    <div className={style.list}>
      <div className={style.header}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          <button className={style.btn}>Выход</button>
        </NavLink>
      </div>
      <Paper
        sx={{
          height: 315,
          width: "100%",
          backgroundColor: "rgb(205, 203, 203)",
        }}
      >
        <DataGrid
          rows={product}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          // pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          hideFooter={true}
          disableColumnSelector={true}
          disableColumnMenu={true}
        />
      </Paper>
      <div className={style.footer}>
        <div>
          <Stack spacing={2}>
            <Pagination count={10} color="primary" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
