const agenda = {
  name: "Agenda",
  backgroundColor: "#000000",
  textColor: "#fff",
  title: "Agenda",
  resource: "app.organism.agenda.title",
  href: "agenda",
  isInternalLink: true,
  showHeader: true,
  endpoint: "/calendar?channel=57&recordsPerPage=4",
  data: {
    listEvents: [
      {
        title: "Lean Practitioner Program Certification",
        local: "UNAVE",
        url:
          "https://www.unave.pt/?formacao=lean-practitioner-program-certification",
        startDate: "2019-10-21T09:00:00",
        endDate: "2020-02-07T18:00:00",
        apiEvent: null,
        category: "Ensino  e Formação",
        language: "pt",
        internalLink: false
      },
      {
        title: "Desenvolvimento de Competências Pessoais e Interpessoais",
        local: "UNAVE",
        url:
          "https://www.unave.pt/?formacao=desenvolvimento-de-competencias-pessoais-e-interpessoais",
        startDate: "2020-01-24T09:00:00",
        endDate: "2020-02-22T22:00:00",
        apiEvent: null,
        category: "Ensino  e Formação",
        language: "pt",
        internalLink: false
      },
      {
        title: "“António de Cértima: O perfil do Homem e do Escritor”",
        local: "Biblioteca da ESTGA",
        url: "https://www.ua.pt/pt/noticias/1/61662",
        startDate: "2019-11-20T09:00:00",
        endDate: "2020-02-28T20:00:00",
        apiEvent: null,
        category: "Cultura e Desporto",
        language: "pt",
        internalLink: false
      },
      {
        title: 'Exposição "Viagem ao mundo das aranhas"',
        local: "Fábrica Centro Ciência Viva de Aveiro",
        url: "http://www.ua.pt/fabrica/",
        startDate: "2019-03-02T10:00:00",
        endDate: "2020-03-01T17:30:00",
        apiEvent: null,
        category: "Campus",
        language: "pt",
        internalLink: false
      }
    ],
    listEventsHighlight: [
      {
        title: "Exposição Entre Linhas: a matemática através Patchwork",
        local: "UA. Sala Hélène de Beauvoir da Biblioteca",
        url: "https://www.ua.pt/pt/noticias/1/62249",
        startDate: "2020-01-13T09:00:00",
        endDate: "2020-02-05T23:00:00",
        apiEvent: null,
        category: "Cultura e Desporto",
        language: "pt",
        internalLink: false
      }
    ]
  }
};
 
export default agenda;