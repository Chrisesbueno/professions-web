import React, { useEffect, useState } from "react";
import * as queries from "@/graphql/custom/queries";
import { Auth, API } from "aws-amplify";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button, Stack, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { esES } from "@mui/material/locale";
import { cards } from "@/constants/cards";
import ModalBusinessbyUser from "./ModalBusinessbyUser";
import { isNumber } from "@mui/x-data-grid/internals";

const TableUser = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState(1);
  const [businessbyUser, setBusinessbyUser] = useState("");
  const [open, setOpen] = useState(false);

  const formattedRows = (datos) => {
    let nuevosDatos = [];
    datos.map((item) => {
      const fechaActual = new Date(item.createdAt);
      const opciones = {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "America/Caracas",
      };
      const fechaFormateada = fechaActual.toLocaleDateString("es-VE", opciones);
      return nuevosDatos.push({
        ...item,
        date: fechaFormateada,
      });
    });
    setTable(nuevosDatos);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 300,
    },
    {
      field: "date",
      headerName: "Fecha de registro",
      width: 200,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Negocio(s)",
      width: 250,
      disableExport: true,
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => {
                setBusinessbyUser(params.row.id);
                setOpen(true);
              }}
              style={{
                padding: 7,
                outline: "none",
                backgroundColor: "green",
                border: "none",
                borderRadius: 4,
                color: "#fff",
                marginLeft: 5,
                fontSize: 12,
              }}
            >
              Negocios
            </button>
          </div>
        );
      },
    },
  ];
  const fetchData = async () => {
    try {
      const fetchAll = async (nextToken, result = []) => {
        const response = await API.graphql({
          query: queries.listUsers,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          variables: {
            nextToken,
          },
        });
        console.log(response);
        const items = response.data.listUsers.items;
        result.push(...items);

        if (response.data.listUsers.nextToken) {
          return fetchAll(response.data.listUsers.nextToken, result);
        }

        return result;
      };

      const list = await fetchAll();
      let meses = [
        {
          mes: "enero",
          valor: 1,
          registros: 0,
        },
        {
          mes: "febrero",
          valor: 2,
          registros: 0,
        },
        {
          mes: "marzo",
          valor: 3,
          registros: 0,
        },
        {
          mes: "abril",
          valor: 4,
          registros: 0,
        },
        {
          mes: "mayo",
          valor: 5,
          registros: 0,
        },
        {
          mes: "junio",
          valor: 6,
          registros: 0,
        },
        {
          mes: "julio",
          valor: 7,
          registros: 0,
        },
        {
          mes: "agosto",
          valor: 8,
          registros: 0,
        },
        {
          mes: "septiembre",
          valor: 9,
          registros: 0,
        },
        {
          mes: "octubre",
          valor: 10,
          registros: 0,
        },
        {
          mes: "noviembre",
          valor: 11,
          registros: 0,
        },
        {
          mes: "diciembre",
          valor: 12,
          registros: 0,
        },
      ];
      list.forEach((objeto) => {
        const fechaActual = new Date(objeto.createdAt);
        const opciones = {
          month: "numeric",
          timeZone: "America/Caracas",
        };
        const mes = fechaActual.toLocaleDateString("es-VE", opciones);
        const mesEnArray = meses.find((m) => m.valor === Number(mes));
        if (mesEnArray) {
          mesEnArray.registros += 1;
        }
      });

      setData(meses);

      /* Orden por fecha */
      const datosOrdenados = list.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTable(datosOrdenados);
      formattedRows(datosOrdenados);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          marginBottom: 5,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: 12,
            padding: 2,
            backgroundColor: selectedInfo === 1 ? "#1f1f1f" : "#ffb703",
            "&:hover": {
              backgroundColor: "#1f1f1f",
            },
            fontFamily: "Montserrat",
          }}
          onClick={() => setSelectedInfo(1)}
        >
          Grafico
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: 12,
            padding: 2,
            backgroundColor: selectedInfo === 2 ? "#1f1f1f" : "#ffb703",
            "&:hover": {
              backgroundColor: "#1f1f1f",
            },
          }}
          onClick={() => setSelectedInfo(2)}
        >
          Tabla
        </Button>
      </Stack>

      {selectedInfo === 1 ? (
        <LineChart width={850} height={350} data={data}>
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="mes" fontSize={12} fontWeight={600} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="registros"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      ) : (
        <Box sx={{ height: 380, width: 950 }}>
          <DataGrid
            rows={table}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            density="compact"
            sx={{
              fontFamily: "Montserrat",
            }}
            showColumnVerticalBorder
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      )}
      {open && (
        <ModalBusinessbyUser
          open={open}
          close={() => setOpen(false)}
          data={businessbyUser}
        />
      )}
    </div>
  );
};

export default TableUser;
