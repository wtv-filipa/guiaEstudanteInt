import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "../../styles/modalBV.css";

const WelcomeModal = ({ open, onDismiss }) => {
  const styles = (theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onDismiss}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
    );
  });

  return (
    <Dialog
      aria-labelledby="modalBV"
      maxWidth="md"
      fullWidth="fullWidth"
      open={open}
    >
      <DialogTitle className="MuiDialogTitle-root" children="Bem-vindo!"></DialogTitle>

      <DialogContent className="padd_modal">
        <p className="p_next">
          Obrigada por terem escolhido a Universidade de Aveiro.
        </p>
        <p className="p_next">
          Obrigado por confiarem em nos para algo tão importante como preparar o vosso futuro.
          A pandemia causada pelo novo vírus COVID-19, e a rapidez com que se disseminou pelo planeta, e um reflexo do mundo interligado em que vivemos. A nível local, regional ou global, todos estamos ligados a tudo, para o melhor e para o pior. A globalização que facilmente introduz espécies invasoras, propaga doenças ou conduz a pandemias também nos permite uma enorme facilidade no acesso ao conhecimento. E o conhecimento é o ativo mais precioso do nosso tempo, a matéria-prima mais valiosa da nossa economia, a forma mais segura de nos prepararmos para o futuro.
        </p>
        <p className="p_next">
          Estamos prontos para ajudar a valorizar o vosso talento e a expandir os horizontes do vosso conhecimento. Queremos ajudar‐vos a construir um futuro profissional sólido e a crescer enquanto cidadãos, neste mundo interligado, fascinante e diverso.
        </p>
        <p className="p_next">
          Encontrarão na Universidade de Aveiro um ambiente académico inspirador, estimulante e acolhedor; uma instituição que valoriza a liberdade de pensamento, estimula a curiosidade e a criatividade; uma academia multicultural, onde se vive em comunidade, onde se valoriza a diversidade e se respeita a diferença.
        </p>
        <p className="p_next">
          A internacionalização ocupa lugar de destaque na visão e nas prioridades da Universidade de Aveiro desde a sua fundação. Assumimo‐nos como uma universidade do mundo, que está no mundo, com ambição e vocação internacional, e que sabe acolher e integrar bem todos aqueles que nos escolhem para estudar e para trabalhar. Em apenas 46 anos, passamos de uma semente de universidade com meia centena de alunos para uma comunidade de 15 mil estudantes, colaboradores, investigadores e docentes, provenientes de 90 nacionalidades.
        </p>
        <p className="p_next">
          Sabemos que a chegada a um novo País, a uma nova cidade, a uma nova cultura não é sempre fácil. Por isso, assumimos a responsabilidade de criar as condições ideais para que se sintam na Universidade de Aveiro como se sentem em vossa casa. Aqui vão poder viver a vida académica na sua plenitude e daqui levarão as competências necessárias para criar o vosso próprio futuro e para renovar e transformar a nossa sociedade.
        </p>
        <p className="p_next">
          Contem connosco para vos acompanhar no vosso percurso, que com certeza será marcado
          pelo sucesso.
        </p>
        <p className="p_next">
          As maiores felicidades.
        </p>
        <p className="p_next">
          Paulo Jorge Ferreira, Reitor da Universidade de Aveiro
        </p>
      </DialogContent>

      <DialogActions>
        <Button className="CloseBtnStyle" onClick={onDismiss}>
          Entendi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeModal;
