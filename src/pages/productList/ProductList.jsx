import "./productList.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { productRows } from "../../dummyData";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)

  const { products } = product;

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
      deleteProducts(id, dispatch);
    }

const columns = [
  { field: '_id', headerName: 'ID', width: 220 },
  {
    field: 'product',
    headerName: 'Product',
    width: 220,
    renderCell: (params)=>{
        return (
            <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.title}
            </div>
        )
    }
  },
  {
    field: 'inStock',
    headerName: 'inStock',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
    editable: true,
  },
  {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params)=> {
          return (
              <>
              <Link to={"/product/" + params.row._id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)}/>
              </>
          )
      }
  }
];

    return(
        <div className="productList">
        <DataGrid
            rows={products}
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
    )
}