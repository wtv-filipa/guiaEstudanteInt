import React from "react";

const AcVisto = () => {
  return (
    <>
      <div className="accordion" id="accordionExample_vistos">
        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vistos_heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vistos_collapse1"
              aria-expanded="true"
              aria-controls="vistos_collapse1"
            >
              1. Necessito de um visto para entrar em Portugal?
            </button>
          </h2>
          <div
            id="vistos_collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="vistos_heading1"
            data-bs-parent="#accordionExample_vistos"
          >
            <div className="accordion-body">
              <div className="p_accordion">
                <ul>
                  <li className="p_accordion">
                    <p className="p_next">
                      Se vives <b>fora de um país da União Europeia</b> (chamado
                      país terceiro), e no caso de vires estudar para Portugal
                      por um período superior a um ano, deverás solicitar um
                      visto de residência, o qual deve ser efetuado{" "}
                      <b>antes da tua viagem</b>. No caso do período em causa
                      for de um ano ou inferior, deverás requerer um visto de
                      estada temporária. Deverás solicitar o visto na{" "}
                      <b>Embaixada ou Consulado Português mais próximo</b>. Para
                      inscrição na Universidade de Aveiro deverás
                      obrigatoriamente apresentar o referido visto para fins de
                      estudo. De realçar que um visto de 'turismo' não poderá
                      ser aceite.{" "}
                      <a
                        href="https://www.vistos.mne.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto#estada-temporária-permanência-inferior-a-1-ano"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        Mais informações aqui.
                      </a>
                    </p>
                  </li>
                  <li className="p_accordion">
                    <p className="p_next">
                      <b>Nota:</b> é importante salientar que os estudantes
                      estrangeiros que entrem em Portugal por uma fronteira não
                      sujeita a controlo (cujo passaporte não é carimbado à
                      entrada) deverão <b>contactar o SEF</b> - Serviço de
                      Estrangeiros e Fronteiras, no prazo de três dias a contar
                      da data de chegada ao país, para declarar a sua entrada.
                      Após este prazo, terão de pagar uma multa (
                      <a
                        href="https://www.sef.pt/pt/Documents/DeclardeEntrada_PT.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        https://www.sef.pt/pt/Documents/DeclardeEntrada_PT.pdf
                      </a>
                      )
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vistos_heading2">
            <button
              className="accordion-button collapsed text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vistos_collapse2"
              aria-expanded="false"
              aria-controls="vistos_collapse2"
            >
              2. Qual é o tempo necessário para a aquisição do visto para
              obtenção de autorização de residência?
            </button>
          </h2>
          <div
            id="vistos_collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="vistos_heading2"
            data-bs-parent="#accordionExample_vistos"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                No mínimo <b>6 semanas</b>, mas poderá levar mais tempo uma vez
                que os candidatos têm que{" "}
                <b>agendar uma entrevista no consulado Português</b>. Por favor
                obtém{" "}
                <a
                  href="https://www.vistos.mne.pt/pt/vistos-nacionais/informacao-geral/onde-deve-solicitar-visto"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  mais detalhes
                </a>{" "}
                junto do consulado português no seu país.
              </p>
            </div>
          </div>
        </div>
        {/* 3*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vistos_heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vistos_collapse3"
              aria-expanded="false"
              aria-controls="vistos_collapse3"
            >
              3. Posso entrar em Portugal como turista e obter o visto de
              residência já em Portugal?
            </button>
          </h2>
          <div
            id="vistos_collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="vistos_heading3"
            data-bs-parent="#accordionExample_vistos"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Após a chegada, e no caso de <b>estadias superiores a um ano</b>
                , estes estudantes deverão solicitar uma{" "}
                <b>autorização/título de residência junto do SEF</b>. Os
                documentos usualmente solicitados para obtenção deste título de
                residência são:
              </p>
              <ul>
                <li>
                  <p className="p_next">Fotocópia do Passaporte e original;</p>
                </li>
                <li>
                  <p className="p_next">
                    Declaração da Universidade de Aveiro comprovativa do motivo
                    da sua estadia em Portugal;{" "}
                  </p>
                </li>
                <li>
                  <p className="p_next">
                    Comprovativo de meios de subsistência;{" "}
                  </p>
                </li>
                <li>
                  <p className="p_next">
                    Comprovativo das condições de alojamento;{" "}
                  </p>
                </li>
                <li>
                  <p className="p_next">Seguro de saúde; </p>
                </li>
                <li>
                  <p className="p_next">
                    Cópia do Número de Contribuinte (NIF);{" "}
                  </p>
                </li>
                <li>
                  <p className="p_next">2 fotografias;</p>
                </li>
              </ul>
              <p className="p_next">
                No entanto, esta{" "}
                <a
                  href="https://imigrante.sef.pt/solicitar/estudar/art91/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  informação deverá ser confirmada diretamente junto do SEF.
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vistos_heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vistos_collapse4"
              aria-expanded="false"
              aria-controls="vistos_collapse4"
            >
              4. A UA disponibiliza ajuda para a concessão de visto?
            </button>
          </h2>
          <div
            id="vistos_collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="vistos_heading4"
            data-bs-parent="#accordionExample_vistos"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                <b>Não</b>. Os vistos de residência para estudantes têm de ser
                obtidos junto das{" "}
                <b>representações diplomáticas portuguesas no estrangeiro</b>.
              </p>
            </div>
          </div>
        </div>
        {/* 5*/}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vistos_heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vistos_collapse5"
              aria-expanded="false"
              aria-controls="vistos_collapse5"
            >
              5. O que devo fazer se o meu pedido de visto de residência não
              sair em tempo útil?
            </button>
          </h2>
          <div
            id="vistos_collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="vistos_heading5"
            data-bs-parent="#accordionExample_vistos"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                A UA pode ajudar ao enviar uma “declaração de matrícula”
                confirmando que é estudante da UA e informando sobre o valor das
                taxas de matrícula a pagar, sobre o seguro de acidentes pessoais
                bem como informações sobre a forma como será auxiliado na sua
                procura de alojamento.
              </p>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="vistos_heading6">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vistos_collapse6"
              aria-expanded="false"
              aria-controls="vistos_collapse6"
            >
              6. O que devo fazer se o meu pedido de visto de residência não
              sair em tempo útil?
            </button>
          </h2>
          <div
            id="vistos_collapse6"
            className="accordion-collapse collapse"
            aria-labelledby="vistos_heading6"
            data-bs-parent="#accordionExample_vistos"
          >
            <div className="accordion-body">
              <p className="p_accordion">
                Caso o teu pedido de Visto de Residência não seja concedido em
                tempo útil, <b>a tempo de iniciar o primeiro semestre</b>{" "}
                (meados de setembro), tens a possibilidade de te matricular como
                estudante a tempo parcial, e{" "}
                <b>iniciar as tuas aulas no 2º semestre</b> (a partir de
                fevereiro do ano seguinte).
              </p>
              <p className="p_accordion">
                As instruções para matrícula são fornecidas no{" "}
                <b>formulário de matrículas online</b>. Se for este o caso,
                terás apenas que pagar as taxas correspondentes a meio tempo do
                teu primeiro ano académico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcVisto;
