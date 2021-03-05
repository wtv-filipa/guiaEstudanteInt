const getCursos = departamento => {
    // Simulate async call
    return new Promise((resolve, reject) => {
      switch (departamento) {
        case "Departamento de Ambiente e Ordenamento":
          resolve([
            { value: "Mestrado Integrado em Engenharia do Ambiente", label: "Mestrado Integrado em Engenharia do Ambiente" },
            { value: "Mestrado Sistemas Energéticos Sustentáveis", label: "Mestrado Sistemas Energéticos Sustentáveis" },
            { value: "Programa Doutural em Ciências e Engenharia do Ambiente", label: "Programa Doutural em Ciências e Engenharia do Ambiente" }
          ]);
          break;
        case "Departamento de Biologia":
          resolve([
            { value: "Licenciatura em Biologia", label: "Licenciatura em Biologia" },
            { value: "Mestrado em Microbiologia", label: "Mestrado em Microbiologia" },
            { value: "Mestrado em Biologia Molecular Celular", label: "Mestrado em Biologia Molecular Celular" },
            { value: "Mestrado em Biologia Aplicada", label: "Mestrado em Biologia Aplicada" },
            { value: "Mestrado em Ecologia APlicada", label: "Mestrado em Ecologia APlicada" },
            { value: "Mestrado em Eco-Toxicologia e Análise de Risco", label: "Mestrado em Eco-Toxicologia e Análise de Risco" },
            { value: "Mestrado em Biologia Marinha Aplicada", label: "Mestrado em Biologia Marinha Aplicada" },
          ]);
          break;
        case "Departamento de Ciências Médicas":
          resolve([
            { value: "Licenciatura em Ciências Biomédicas", label: "Licenciatura em Ciências Biomédicas" },
            { value: "Mestrado Biomedicina Molecular", label: "Mestrado Biomedicina Molecular" },
            { value: "Mestrado em Tecnologias da Imagem Médica", label: "Mestrado em Tecnologias da Imagem Médica" },
            { value: "Programa Doutural em Biomedicina", label: "Programa Doutural em Biomedicina" },
          ]);
          break;
        case "Departamento de Ciências Sociais, Políticas e do Território":
          resolve([
            { value: "Licenciatura em Administração Pública", label: "Licenciatura em Administração Pública" },
            { value: "Mestrado em Administração e Gestão Pública", label: "Mestrado em Administração e Gestão Pública" },
            { value: "Mestrado em Ciência Política", label: "Mestrado em Ciência Política" },
            { value: "Mestrado em Planeamento Regional e Urbano", label: "Mestrado em Planeamento Regional e Urbano" },
            { value: "Mestrado em Estudos Chineses", label: "Mestrado em Estudos Chineses" },
            { value: "Mestrado em Ciências de Dados para Ciências Sociais", label: "Mestrado em Ciências de Dados para Ciências Sociais" },
            { value: "Programa Doutural em E-Planeamento", label: "Programa Doutural em E-Planeamento" },
            { value: "Programa Doutural em Políticas Públicas", label: "Programa Doutural em Políticas Públicas" },
            { value: "Programa Doutural em Ciência Política", label: "Programa Doutural em Ciência Política" },

          ]);
          break;
        case "Departamento de Comunicação e Arte":
          resolve([
              { value: "Licenciatura em Música", label: "Licenciatura em Música" },
              { value: "Licenciatura em Novas Tecnologias da Comunicação", label: "Licenciatura em Novas Tecnologias da Comunicação" },
              { value: "Licenciatura em Design", label: "Licenciatura em Design" },
              { value: "Mestrado em Comunicação Multimédia", label: "Mestrado em Comunicação Multimédia" },
              { value: "Mestrado em Criação Artística Contemporânea", label: "Mestrado em Criação Artística Contemporânea" },
              { value: "Mestrado em Design", label: "Mestrado em Design" },
              { value: "Mestrado em Música", label: "Mestrado em Música" },
              { value: "Mestrado em Ensino de Música", label: "Mestrado em Ensino de Música" },
              { value: "Programa Doutural em Informação e Comunicação em Plataformas Digitais", label: "Programa Doutural em Informação e Comunicação em Plataformas Digitais" },
              { value: "Programa Doutural em Música", label: "Programa Doutural em Música" },
  
          ]);
          break;
        case "Departamento de Economia, Gestão, Engenharia Industrial e Turismo":
          resolve([
            { value: "Licenciatura em Economia", label: "Licenciatura em Economia" },
            { value: "Licenciatura em Gestão", label: "Licenciatura em Gestão" },
            { value: "Licenciatura em Gestão e Planeamento em Turismo", label: "Licenciatura em Gestão e Planeamento em Turismo" },
            { value: "Mestrado em Engenharia e Gestão Industrial", label: "Mestrado em Engenharia e Gestão Industrial" },
            { value: "Mestrado em Economia", label: "Mestrado em Economia" },
            { value: "Mestrado em Gestão", label: "Mestrado em Gestão" },
            { value: "Mestrado em Gestão e Planeamento em Turismo", label: "Mestrado em Gestão e Planeamento em Turismo" },
            { value: "Mestrado em Sistemas Energéticos Sustentáveis", label: "Mestrado em Sistemas Energéticos Sustentáveis" },
            { value: "Programa Doutural em Marketing e Estratégia", label: "Programa Doutural em Marketing e Estratégia" },
            { value: "Programa Doutural em Engenharia e Gestão Industrial", label: "Programa Doutural em Engenharia e Gestão Industrial" },
            { value: "Programa Doutural em Sistemas Energéticos e Alterações Climáticas", label: "Programa Doutural em Sistemas Energéticos e Alterações Climáticas" },
            { value: "Programa Doutural em Turismo", label: "Programa Doutural em Turismo" },
            { value: "Programa Doutural em Contabilidade", label: "Programa Doutural em Contabilidade" },
            { value: "Programa Doutural em Ciências Económicas e Empresariais", label: "Programa Doutural em Ciências Económicas e Empresariais" },
            
            ]);
            break;
        case "Departamento de Educação e Psicologia":
          resolve([
            { value: "Licenciatura em Psicologia", label: "Licenciatura em Psicologia" },
            { value: "Licenciatura em Educação Básica", label: "Licenciatura em Educação Básica" },
            { value: "Mestrado em Ensino de Biologia e Geologia no 3º Ciclo do Ensino Básico e no Ensino Secundário", label: "Mestrado em Ensino de Biologia e Geologia no 3º Ciclo do Ensino Básico e no Ensino Secundário" },
            { value: "Mestrado em Ensino de Matemática no 3º Ciclo do Ensino Básico e no Secundário", label: "Mestrado em Ensino de Matemática no 3º Ciclo do Ensino Básico e no Secundário" },
            { value: "Mestrado em Psicologia da Saúde e Reabilitação Neuropsicológica", label: "Mestrado em Psicologia da Saúde e Reabilitação Neuropsicológica" },
            { value: "Mestrado em Educação e Formação", label: "Mestrado em Educação e Formação" },
            { value: "Mestrado em Ensino do 1º Ciclo do Ensino Básico e de Português e História e Geografia de Portugal no 2º Ciclo do Ensino Básico", label: "Mestrado em Ensino do 1º Ciclo do Ensino Básico e de Português e História e Geografia de Portugal no 2º Ciclo do Ensino Básico" },
            { value: "Mestrado em Ensino de Inglês e de Língua Estrangeira no 3º Ciclo do Ensino Básico e no Ensino Secundário, na especialidade de Alemão ou Francês ou Espanhol", label: "Mestrado em Ensino de Inglês e de Língua Estrangeira no 3º Ciclo do Ensino Básico e no Ensino Secundário, na especialidade de Alemão ou Francês ou Espanhol" },
            { value: "Mestrado em Ensino do 1º Ciclo do Ensino Básico e de Matemática e Ciências Naturais no 2º Ciclo do Ensino Básico", label: "Mestrado em Ensino do 1º Ciclo do Ensino Básico e de Matemática e Ciências Naturais no 2º Ciclo do Ensino Básico" },
            { value: "Mestrado em Educação Pré-Escolar e Ensino do 1º Ciclo do Ensino Básico", label: "Mestrado em Educação Pré-Escolar e Ensino do 1º Ciclo do Ensino Básico" },
            { value: "Mestrado em Ensino de Ingês no 1º Ciclo do Ensino Básico", label: "Mestrado em Ensino de Ingês no 1º Ciclo do Ensino Básico" },
            { value: "Mestrado em Gerontologia Aplicada", label: "Mestrado em Gerontologia Aplicada" },
            { value: "Programa Doutural em Multimédia em Educação", label: "Programa Doutural em Multimédia em Educação" },
            { value: "Programa Doutural em Educação", label: "Programa Doutural em Educação" },
            { value: "Programa Doutural em Gerontologia e Geriatria", label: "Programa Doutural em Gerontologia e Geriatria" },
            ]);
            break;
        case "Departamento de Eletrónica, Telecomunicações e Informática":
          resolve([
            { value: "Licenciatura em Engenharia Informática", label: "Licenciatura em Engenharia Informática" },
            { value: "Mestrado Integrado em Engenharia de Computadores e Telemática", label: "Mestrado Integrado em Engenharia de Computadores e Telemática" },
            { value: "Mestrado Integrado em Engenharia Electrónica e Telecomunicações", label: "Mestrado Integrado em Engenharia Electrónica e Telecomunicações" },
            { value: "Mestrado em Engenharia Informática", label: "Mestrado em Engenharia Informática" },
            { value: "Mestrado em Cibersegurança", label: "Mestrado em Cibersegurança" },
            { value: "Programa Doutural em Engenharia Informática", label: "Programa Doutural em Engenharia Informática" },
            { value: "Programa Doutural em Engenharia Electrotécnica", label: "Programa Doutural em Engenharia e Gestão Industrial" },
          ]);
          break;
        case "Departamento de Engenharia Civil":
          resolve([
            { value: "Licenciatura em Reabilitação do Património", label: "Licenciatura em Reabilitação do Património" },
            { value: "Mestrado Integrado em Engenharia Civil", label: "Mestrado Integrado em Engenharia Civil" },
            { value: "Mestrado em Reabilitação do Património", label: "Mestrado em Reabilitação do Património" },
            { value: "Programa Doutural em Engenharia Civil", label: "Programa Doutural em Engenharia Civil" },
          ]);
          break;
        case "Departamento de Engenharia Materiais e Cerâmica":
          resolve([
            { value: "Mestrado Integrado em Engenharia de Materiais", label: "Mestrado Integrado em Engenharia de Materiais" },
            { value: "Mestrado em Materiais e Dispositivos Biomédicos", label: "Mestrado em Materiais e Dispositivos Biomédicos" },
            { value: "Mestrado em Manufatura Aditiva", label: "Mestrado em Manufatura Aditiva" },
            { value: "Programa Doutural em Ciência e Engenharia de Materiais", label: "Programa Doutural em Ciência e Engenharia de Materiais" },
            { value: "Programa Doutural em Materiais e Processamento Avançados", label: "Programa Doutural em Materiais e Processamento Avançados" },
          ]);
          break;
        case "Departamento de Engenharia Mecânica":
          resolve([
            { value: "Mestrado Integrado em Engenharia Mecânica", label: "Mestrado Integrado em Engenharia Mecânica" },
            { value: "Mestrado em Engenharia de Automação Industrial", label: "Mestrado em Engenharia de Automação Industrial" },
            { value: "Mestrado em Sistemas Energéticos Sustentáveis", label: "Mestrado em Sistemas Energéticos Sustentáveis" },
            { value: "Mestrado em Engenharia e Design de Produto", label: "Mestrado em Engenharia e Design de Produto" },
            { value: "Mestrado em Manufatura Aditiva", label: "Mestrado em Manufatura Aditiva" },
            { value: "Programa Doutural em Engenharia Mecânica", label: "Programa Doutural em Engenharia Mecânica" },
          ]);
          break;
        case "Departamento de Física":
          resolve([
            { value: "Licenciatura em Meteorologia, Oceanografia e Geofísica", label: "Licenciatura em Meteorologia, Oceanografia e Geofísica" },
            { value: "Licenciatura em Física", label: "Licenciatura em Física" },
            { value: "Licenciatura em Ciência do Mar", label: "Licenciatura em Ciência do Mar" },
            { value: "Mestrado Integrado em Engenharia Física", label: "Mestrado Integrado em Engenharia Física" },
            { value: "Mestrado Integrado em Engenharia Biomédica", label: "Mestrado Integrado em Engenharia Biomédica" },
            { value: "Mestrado Integrado em Engenharia Computacional", label: "Mestrado Integrado em Engenharia Computacional" },
            { value: "Mestrado em Física", label: "Mestrado em Física" },
            { value: "Mestrado em Ciências do Mar e da Atmosfera", label: "Mestrado em Ciências do Mar e da Atmosfera" },
            { value: "Programa Doutural em Física", label: "Programa Doutural em Física" },
            { value: "Programa Doutural em Engenharia Física", label: "Programa Doutural em Engenharia Física" },
          ]);
          break;
        case "Departamento de Geociências":
          resolve([
            { value: "Licenciatura em Biologia e Geologia", label: "Licenciatura em Biologia e Geologia" },
            { value: "Licenciatura em Geologia", label: "Licenciatura em Geologia" },
            { value: "Mestrado em Engenharia Geológica", label: "Mestrado em Engenharia Geológica" },
            { value: "Programa Doutural em Geociências", label: "Programa Doutural em Geociências" },
          ]);
          break;
        case "Departamento de Línguas e Culturas":
          resolve([
            { value: "Licenciatura em Línguas e Relações Empresariais", label: "Licenciatura em Línguas e Relações Empresariais" },
            { value: "Licenciatura em Línguas e Estudos Editorais", label: "Licenciatura em Línguas e Estudos Editorais" },
            { value: "Licenciatura em Línguas, Literatura e Culturas", label: "Licenciatura em Línguas, Literatura e Culturas" },
            { value: "Licenciatura em Tradução", label: "Licenciatura em Tradução" },
            { value: "Mestrado em Estudos Editoriais", label: "Mestrado em Estudos Editoriais" },
            { value: "Mestrado em Línguas e Relações Empresariais", label: "Mestrado em Línguas e Relações Empresariais" },
            { value: "Mestrado em Português Língua Estrangeira/Língua segunda", label: "Mestrado em Português Língua Estrangeira/Língua segunda" },
            { value: "Mestrado em Tradução Especializada", label: "Mestrado em Tradução Especializada" },
            { value: "Programa Doutural em Tradução e Terminologia", label: "Programa Doutural em Tradução e Terminologia" },
          ]);
          break;
        case "Departamento de Matemática":
          resolve([
            { value: "Licenciatura em Matemática", label: "Licenciatura em Matemática" },
            { value: "Mestrado em Matemática e Aplicações", label: "Mestrado em Matemática e Aplicações" },
            { value: "Mestrado em Estatística Médica", label: "Mestrado em Estatística Médica" },
          ]);
          break;
        case "Departamento de Química":
          resolve([
            { value: "Licenciatura em Química", label: "Licenciatura em Química" },
            { value: "Licenciatura em Bioquímica", label: "Licenciatura em Bioquímica" },
            { value: "Licenciatura em Biotecnologia", label: "Licenciatura em Biotecnologia" },
            { value: "Mestrado Integrado em Engenharia Química", label: "Mestrado Integrado em Engenharia Química" },
            { value: "Mestrado em Bioquímica", label: "Mestrado em Bioquímica" },
            { value: "Mestrado em Química", label: "Mestrado em Química" },
            { value: "Mestrado em Bioquímica", label: "Mestrado em Bioquímica" },
            { value: "Programa Doutural em Ciência e Tecnologia Alimentar e Nutrição", label: "Programa Doutural em Ciência e Tecnologia Alimentar e Nutrição" },
          ]);
          break;
        case "Escola Superior de Design, Gestão e Tecnologias da Produção":
          resolve([
            { value: "Licenciatura em Design de Produto e Tecnologia", label: "Licenciatura em Design de Produto e Tecnologia" },
          ]);
          break;
        case "Escola Superior de Saúde":
          resolve([
            { value: "Licenciatura em Fisioterapia", label: "Licenciatura em Fisioterapia" },
            { value: "Licenciatura em Terapia da Fala", label: "Licenciatura em Terapia da Fala" },
            { value: "Licenciatura em Enfermagem", label: "Licenciatura em Enfermagem" },
            { value: "Licenciatura em Imagem Médica e Radiografia", label: "Licenciatura em Imagem Médica e Radiografia" },
            { value: "Mestrado em Enfermagem de Saúde Familiar", label: "Mestrado em Enfermagem de Saúde Familiar" },
            { value: "Mestrado em Fisioterapia", label: "Mestrado em Fisioterapia" },
          ]);
          break;
        case "Escola Superior de Tecnologia e Gestão de Águeda":
          resolve([
            { value: "Técnico Superior Profissional em Redes e Sistemas Informáticos", label: "Técnico Superior Profissional em Redes e Sistemas Informáticos" },
            { value: "Técnico Superior Profissional em Programação de Sistemas de Informação", label: "Técnico Superior Profissional em Programação de Sistemas de Informação" },
            { value: "Técnico Superior Profissional em Comércio Internacional", label: "Técnico Superior Profissional em Comércio Internacional" },
            { value: "Técnico Superior Profissional em Manutenção Industrial", label: "Técnico Superior Profissional em Manutenção Industrial" },
            { value: "Técnico Superior Profissional em Gestão de Pme", label: "Técnico Superior Profissional em Gestão de Pme" },
            { value: "Técnico Superior Profissional em Instalações Elétricas e Automação", label: "Técnico Superior Profissional em Instalações Elétricas e Automação" },
            { value: "Técnico Superior Profissional em Tecnologia Mecânica", label: "Técnico Superior Profissional em Tecnologia Mecânica" },
            { value: "Licenciatura em Tecnologias da Informação", label: "Licenciatura em Tecnologias da Informação" },
            { value: "Licenciatura em Gestão Pública e Autárquica", label: "Licenciatura em Gestão Pública e Autárquica" },
            { value: "Licenciatura em Gestão Comercial", label: "Licenciatura em Gestão Comercial" },
            { value: "Licenciatura em Engenharia Eletrónica", label: "Licenciatura em Engenharia Eletrónica" },
            { value: "Licenciatura em Gestão da Qualidade", label: "Licenciatura em Gestão da Qualidade" },
            { value: "Licenciatura em Setrariado e Comunicação Empresarial", label: "Licenciatura em Setrariado e Comunicação Empresarial" },
            { value: "Mestrado em Geoinformática", label: "Mestrado em Geoinformática" },
            { value: "Mestrado em Geoinformática", label: "Mestrado em Geoinformática" },
            { value: "Mestrado em Gestão Comercial", label: "Mestrado em Gestão Comercial" },
            ]);
            break;
        case "Instituto Superior de Contabilidade e Administração da Universidade de Aveiro":
          resolve([
            { value: "Técnico Superior Profissional Gestão de Vendas e Marketing", label: "Técnico Superior Profissional Gestão de Vendas e Marketing" },
            { value: "Técnico Superior Profissional Gestão Aplicada ao Desenvolvimento de Produto Turísticos", label: "Técnico Superior Profissional Gestão Aplicada ao Desenvolvimento de Produto Turísticos" },
            { value: "Contabilidade e Fiscalidade", label: "Contabilidade e Fiscalidade" },
            { value: "Contabilidade e Auditoria", label: "Contabilidade e Auditoria" },
            { value: "Licenciatura em Marketing (Pós-Laboral)", label: "Licenciatura em Marketing (Pós-Laboral)" },
            { value: "Licenciatura em Contabilidade", label: "Licenciatura em Contabilidade" },
            { value: "Licenciatura em Contabilidade (Pós-Laboral)", label: "Licenciatura em Contabilidade (Pós-Laboral)" },
            { value: "Licenciatura em Finanças", label: "Licenciatura em Finanças" },
            { value: "Licenciatura em Marketing", label: "Licenciatura em Marketing" },
            { value: "Licenciatura em Finanças (Pós-Laboral)", label: "Licenciatura em Finanças (Pós-Laboral)" },
            { value: "Licenciatura em Contabilidade (Ensino à Distância)", label: "Licenciatura em Contabilidade (Ensino à Distância)" },
            { value: "Contabilidade", label: "Contabilidade" },
            { value: "Marketing", label: "Marketing" },
            { value: "Finanças", label: "Finanças" },
          ]);
          break;      
        default:
          resolve([]);
      }
    });
  };

  export default getCursos;