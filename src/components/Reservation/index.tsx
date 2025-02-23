import React from "react";
import { Table } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";

import * as Styled from "./styles";
import { IReservation } from "../../shared/types";

const mockData: IReservation[] = [
  { id: 1, destination: "Paris", date: "2025-03-10" },
  { id: 2, destination: "Nova York", date: "2025-04-15" },
];

const schema = yup.object().shape({
  destination: yup.string().required("Destino é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
});

const ReservationList: React.FC = () => {
  const [reservations, setReservations] =
    React.useState<IReservation[]>(mockData);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [editingReservation, setEditingReservation] =
    React.useState<IReservation | null>(null);

  const [excludeItem, setExcludeItem] = React.useState<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReservation>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IReservation) => {
    if (editingReservation) {
      setReservations(
        reservations.map((res) =>
          res.id === editingReservation.id ? { ...res, ...data } : res
        )
      );
    } else {
      setReservations([...reservations, { id: Date.now(), ...data }]);
    }
    closeModal();
  };

  const openModal = (reservation: IReservation | null = null) => {
    setEditingReservation(reservation);
    reset(reservation || { destination: "", date: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingReservation(null);
  };

  const deleteReservation = (id: number) => {
    setReservations(reservations.filter((res) => res.id !== id));
    setExcludeItem(0);
  };

  const columns = [
    { title: "Destino", dataIndex: "destination", key: "destination" },
    { title: "Data", dataIndex: "date", key: "date" },
    {
      title: "Ações",
      key: "actions",
      render: (_: any, record: IReservation) => (
        <Styled.BoxButtons>
          <Button onClick={() => openModal(record)}>Editar</Button>
          <Button
            onClick={() => setExcludeItem(Number(record.id))}
            color="error"
          >
            Excluir
          </Button>
        </Styled.BoxButtons>
      ),
    },
  ];

  return (
    <Styled.ContainerPage maxWidth="xl">
      <Button variant="contained" color="primary" onClick={() => openModal()}>
        Nova Reserva
      </Button>
      {reservations.length > 0 ? (
        <Table
          dataSource={reservations}
          columns={columns}
          rowKey="id"
          style={{ marginTop: 20 }}
        />
      ) : (
        <Styled.BoxMargin>
          <Alert severity="info">Nenhuma reserva encontrada</Alert>
        </Styled.BoxMargin>
      )}

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>
          {editingReservation ? "Editar Reserva" : "Nova Reserva"}
        </DialogTitle>
        <DialogContent>
          <form id="reservation-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Destino"
              fullWidth
              margin="normal"
              {...register("destination")}
              error={!!errors.destination}
              helperText={errors.destination?.message}
            />
            <TextField
              label="Data"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              {...register("date")}
              error={!!errors.date}
              helperText={errors.date?.message}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button
            type="submit"
            form="reservation-form"
            variant="contained"
            color="primary"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={excludeItem > 0} onClose={() => setExcludeItem(0)}>
        <DialogTitle>Tem certeza que deseja excluir o destino?</DialogTitle>

        <Styled.DialogExclude>
          <Button onClick={() => setExcludeItem(0)}>Cancelar</Button>
          <Button onClick={() => deleteReservation(excludeItem)} color="error">
            Excluir
          </Button>
        </Styled.DialogExclude>
      </Dialog>
    </Styled.ContainerPage>
  );
};

export { ReservationList };
