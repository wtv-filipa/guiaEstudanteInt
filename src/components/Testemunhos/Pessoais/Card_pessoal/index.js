import React from "react";
import { useDispatch } from "react-redux";
import { deleteTestemunho1 } from "../../../../store/testemunhos/actions"
import "../../../../styles/testemunhos.css";
import { Link } from 'react-router-dom';
import { PrimaryBTN } from "../../../PrimaryBTN";
import aspa from "../../../../imgs/Icons/aspa.svg"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


const CardPessoal = ({ id, frase, tipo, timestamp }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTestemunho1(id));
  };

  return (
    <div className="col-sm-12 col-md-6 col-xl-4 cardP-margins" key={id}>
      <div className="card Tpessoal">
        <div className="text-end">
          {tipo === "texto" ? (
            <Link to={`/edittestemunhotexto/${id}`} title="Ir para a página editar testemunho em texto">
              <i class="far fa-pen iconStyle"></i>

            </Link>) : tipo === "audio" ? (
              <Link to="/edittestemunhoaudio" title="Ir para a página editar testemunho em audio">
                <i class="far fa-pen iconStyle"></i>
              </Link>
            ) : (
                <Link to="/edittestemunhovideo" title="Ir para a página editar testemunho em video">
                  <i class="far fa-pen iconStyle"></i>
                </Link>
              )}
          <button onClick={handleClickOpen}>
            <i className="far fa-trash iconStyle"></i>
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <h4 id="alert-dialog-description">
                Tens a certeza que pretendes apagar o teu testemunho?
              </h4>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} className="CloseBtnStyle">
                Cancelar
              </Button>
              <Button onClick={onDelete} className="CloseBtnStyle">
                Apagar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <img src={aspa} alt="Aspa" className="aspaT"></img>
            <div className="quadrado-vazio"></div>
            {frase}
          </h4>
          <div className="userInfoP-cards">
            <p className="card-text">
              {new Date(timestamp).toLocaleDateString()}
            </p>
            <PrimaryBTN
              link={`/testemunhoInd/${id}#start`}
              title="Ir para o testemunho individual"
              texto="Ver mais"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPessoal;
