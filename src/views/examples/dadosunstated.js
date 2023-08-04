import { Container } from '@gitbook/unstated';

export class DadosUnstated extends Container<{
  nodesPadrao: Object,
  edgesPadrao: Object,
  cargaMinima: Number,
  cargaMaxima: Number,
  distanciaMaxima: Number,
  corAtual: String,
  resultados: Object,
  }> {
  state = {
    idAluno: 1,
    nomeAluno: 'Federico',
    nodesPadrao: [
      {
        id: 1,
        label: 'DCC203',
        title: 'PROGRAMAÇÃO E DESENVOLVIMENTO DE SOFTWARE I',
        details: 'Ementa',
        level: 1,
        weight: 60,
        groupId: 1,
        subGroupId: 1,
        slots: [
          4,
          7,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 2,
        label: 'MAT001',
        title: 'CALCULO DIFERENCIAL E INTEGRAL I',
        details: 'Ementa',
        level: 1,
        weight: 90,
        groupId: 1,
        subGroupId: 2,
        slots: [
          1,
          6,
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 3,
        label: 'MAT038',
        title: 'GEOMETRIA ANALITICA E ALGEBRA LINEAR',
        details: 'Ementa',
        level: 1,
        weight: 60,
        groupId: 1,
        subGroupId: 2,
        slots: [
          3,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 4,
        label: 'ELE629',
        title: 'INTRODUÇÃO A ENGENHARIA DE SISTEMAS',
        details: 'Ementa',
        level: 1,
        weight: 30,
        groupId: 2,
        subGroupId: 1,
        slots: [
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 5,
        label: 'DCC033',
        title: 'ANALISE NUMERICA',
        details: 'Ementa',
        level: 2,
        weight: 60,
        groupId: 1,
        subGroupId: 1,
        slots: [
          3,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 6,
        label: 'ELT124',
        title: 'SISTEMAS DIGITAIS',
        details: 'Ementa',
        level: 2,
        weight: 60,
        groupId: 3,
        subGroupId: 1,
        slots: [
          9,
          10,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 7,
        label: 'FIS065',
        title: 'FUNDAMENTOS DE MECANICA',
        details: 'Ementa',
        level: 2,
        weight: 60,
        groupId: 1,
        subGroupId: 3,
        slots: [
          2,
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 8,
        label: 'MAT039',
        title: 'CALCULO DIFERENCIAL E INTEGRAL II',
        details: 'Ementa',
        level: 2,
        weight: 60,
        groupId: 1,
        subGroupId: 2,
        slots: [
          1,
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 9,
        label: 'DCC204',
        title: 'PROGRAMAÇÃO E DESENVOLVIMENTO DE SOFTWARE II',
        details: 'Ementa',
        level: 2,
        weight: 60,
        groupId: 1,
        subGroupId: 1,
        slots: [
          4,
          7,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 10,
        label: 'ELE064',
        title: 'ANALISE DE CIRCUITOS ELETRICOS I',
        details: 'Ementa',
        level: 3,
        weight: 30,
        groupId: 4,
        subGroupId: 1,
        slots: [
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 11,
        label: 'FIS069',
        title: 'FUNDAMENTOS DE ELETROMAGNETISMO',
        details: 'Ementa',
        level: 3,
        weight: 60,
        groupId: 1,
        subGroupId: 3,
        slots: [
          2,
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 12,
        label: 'FIS152',
        title: 'FUNDAMENTOS DE MECÂNICA DOS FLUIDOS E TERMODINÂMICA',
        details: 'Ementa',
        level: 3,
        weight: 30,
        groupId: 1,
        subGroupId: 3,
        slots: [
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 13,
        label: 'MAT002',
        title: 'CALCULO DIFERENCIAL E INTEGRAL III',
        details: 'Ementa',
        level: 3,
        weight: 60,
        groupId: 1,
        subGroupId: 2,
        slots: [
          1,
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 14,
        label: 'MAT015',
        title: 'EQUACOES DIFERENCIAIS A',
        details: 'Ementa',
        level: 3,
        weight: 30,
        groupId: 1,
        subGroupId: 2,
        slots: [
          3,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 15,
        label: 'ELE078',
        title: 'PROGRAMACAO ORIENTADA A OBJETOS',
        details: 'Ementa',
        level: 3,
        weight: 60,
        groupId: 4,
        subGroupId: 2,
        slots: [
          7,
          10,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 16,
        label: 'DCC205',
        title: 'ESTRUTURAS DE DADOS',
        details: 'Ementa',
        level: 4,
        weight: 60,
        groupId: 1,
        subGroupId: 1,
        slots: [
          4,
          7,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 17,
        label: 'ELT029',
        title: 'LABORATORIO DE SISTEMAS DIGITAIS',
        details: 'Ementa',
        level: 4,
        weight: 30,
        groupId: 3,
        subGroupId: 1,
        slots: [
          10,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 18,
        label: 'FIS086',
        title: 'FUNDAMENTOS DE OSCILACOES,ONDAS E OPTICA',
        details: 'Ementa',
        level: 4,
        weight: 60,
        groupId: 1,
        subGroupId: 3,
        slots: [
          2,
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 19,
        label: 'ELE065',
        title: 'ANALISE DE CIRCUITOS ELETRICOS II',
        details: 'Ementa',
        level: 4,
        weight: 30,
        groupId: 4,
        subGroupId: 1,
        slots: [
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 20,
        label: 'EST031',
        title: 'ESTATISTICA E PROBABILIDADES',
        details: 'Ementa',
        level: 4,
        weight: 60,
        groupId: 1,
        subGroupId: 4,
        slots: [
          3,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 21,
        label: 'MAT016',
        title: 'EQUACOES DIFERENCIAIS B',
        details: 'Ementa',
        level: 4,
        weight: 60,
        groupId: 1,
        subGroupId: 2,
        slots: [
          1,
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 22,
        label: 'ELT123',
        title: 'ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES',
        details: 'Ementa',
        level: 5,
        weight: 60,
        groupId: 3,
        subGroupId: 2,
        slots: [
          1,
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 23,
        label: 'ELT075',
        title: 'REDES NEURAIS ARTIFICIAIS',
        details: 'Ementa',
        level: 5,
        weight: 30,
        groupId: 3,
        subGroupId: 3,
        slots: [
          10,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 24,
        label: 'ELT125',
        title: 'ANÁLISE DE SISTEMAS DINÂMICOS LINEARES',
        details: 'Ementa',
        level: 5,
        weight: 90,
        groupId: 3,
        subGroupId: 4,
        slots: [
          4,
          7,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 25,
        label: 'ELE079',
        title: 'ELETROMAGNETISMO COMPUTACIONAL',
        details: 'Ementa',
        level: 5,
        weight: 60,
        groupId: 1,
        subGroupId: 3,
        slots: [
          2,
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 26,
        label: 'ELE092',
        title: 'LABORATORIO DE PROJETO I',
        details: 'Ementa',
        level: 5,
        weight: 30,
        groupId: 2,
        subGroupId: 2,
        slots: [
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 27,
        label: 'EMA255',
        title: 'FLUIDOS E TERMODINAMICA COMPUTACIONAL',
        details: 'Ementa',
        level: 5,
        weight: 60,
        groupId: 1,
        subGroupId: 3,
        slots: [
          3,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 28,
        label: 'ELE156',
        title: 'LAB.DE CIRCUITOS ELETRICOS ELETRONICA C',
        details: 'Ementa',
        level: 6,
        weight: 30,
        groupId: 4,
        subGroupId: 1,
        slots: [
          3,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 29,
        label: 'ELE081',
        title: 'LABORATORIO DE PROJETO II',
        details: 'Ementa',
        level: 6,
        weight: 60,
        groupId: 2,
        subGroupId: 2,
        slots: [
          1,
          2,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 30,
        label: 'ELE082',
        title: 'PESQUISA OPERACIONAL',
        details: 'Ementa',
        level: 6,
        weight: 60,
        groupId: 3,
        subGroupId: 5,
        slots: [
          5,
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 31,
        label: 'ELE080',
        title: 'ENGENHARIA DE SOFTWARE',
        details: 'Ementa',
        level: 6,
        weight: 60,
        groupId: 3,
        subGroupId: 2,
        slots: [
          8,
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 32,
        label: 'ELT126',
        title: 'ENGENHARIA DE CONTROLE',
        details: 'Ementa',
        level: 6,
        weight: 90,
        groupId: 3,
        subGroupId: 4,
        slots: [
          4,
          7,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 33,
        label: 'DCC023',
        title: 'REDES DE COMPUTADORES',
        details: 'Ementa',
        level: 7,
        weight: 60,
        groupId: 3,
        subGroupId: 2,
        slots: [
          1,
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 34,
        label: 'ELE077',
        title: 'OTIMIZACAO NAO LINEAR',
        details: 'Ementa',
        level: 7,
        weight: 30,
        groupId: 3,
        subGroupId: 5,
        slots: [
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 35,
        label: 'ELE084',
        title: 'LABORATORIO DE PROJETO III',
        details: 'Ementa',
        level: 7,
        weight: 60,
        groupId: 2,
        subGroupId: 2,
        slots: [
          3,
          4,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 36,
        label: 'EEE017',
        title: 'CONFIABILIDADE DE SISTEMAS',
        details: 'Ementa',
        level: 7,
        weight: 60,
        groupId: 3,
        subGroupId: 3,
        slots: [
          7,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 37,
        label: 'ELT079',
        title: 'DISPOSIT.E CIRCUITOS ELETRONICOS BASICOS',
        details: 'Ementa',
        level: 7,
        weight: 60,
        groupId: 3,
        subGroupId: 2,
        slots: [
          2,
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 38,
        label: 'ELE075',
        title: 'SISTEMAS NEBULOSOS',
        details: 'Ementa',
        level: 8,
        weight: 30,
        groupId: 3,
        subGroupId: 3,
        slots: [
          6,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 39,
        label: 'ELE088',
        title: 'TEORIA DA DECISAO',
        details: 'Ementa',
        level: 8,
        weight: 30,
        groupId: 3,
        subGroupId: 5,
        slots: [
          9,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 40,
        label: 'ELE042',
        title: 'PROCESSAMENTOS DE SINAIS',
        details: 'Ementa',
        level: 8,
        weight: 60,
        groupId: 3,
        subGroupId: 3,
        slots: [
          1,
          2,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 41,
        label: 'ELE083',
        title: 'COMPUTACAO EVOLUCIONARIA',
        details: 'Ementa',
        level: 8,
        weight: 30,
        groupId: 3,
        subGroupId: 3,
        slots: [
          5,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 42,
        label: 'ELE086',
        title: 'LABORATORIO DE PROJETO IV',
        details: 'Ementa',
        level: 8,
        weight: 60,
        groupId: 2,
        subGroupId: 2,
        slots: [
          7,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 43,
        label: 'ELT016',
        title: 'TECNICAS DE MODELAGEM DE SIST. DINAMICOS ',
        details: 'Ementa',
        level: 8,
        weight: 30,
        groupId: 3,
        subGroupId: 4,
        slots: [
          3,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 44,
        label: 'ELT080',
        title: 'LAB.DE CIRCUITOS ELETRONICOS E PROJETOS',
        details: 'Ementa',
        level: 8,
        weight: 30,
        groupId: 3,
        subGroupId: 1,
        slots: [
          4,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 45,
        label: 'ELE087',
        title: 'PROJETO MULTIDISCIPLINAR',
        details: 'Ementa',
        level: 9,
        weight: 60,
        groupId: 5,
        subGroupId: 1,
        slots: [
          7,
          8,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 46,
        label: 'ELE094',
        title: 'LABORATORIO DE PROJETO V',
        details: 'Ementa',
        level: 9,
        weight: 60,
        groupId: 2,
        subGroupId: 2,
        slots: [
          3,
          4,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 47,
        label: 'EEE018',
        title: 'TRABALHO DE CONCLUSAO DE CURSO I',
        details: 'Ementa',
        level: 10,
        weight: 90,
        groupId: 5,
        subGroupId: 2,
        slots: [
          101,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 48,
        label: 'EEE019',
        title: 'TRABALHO DE CONCLUSAO DE CURSO II',
        details: 'Ementa',
        level: 11,
        weight: 90,
        groupId: 5,
        subGroupId: 2,
        slots: [
          102,
        ],
        status: 0,
        color: "secondary",
      },
      {
        id: 49,
        label: 'EEE020',
        title: 'ESTAG.SUPERVISIONADO EM ENG.DE SISTEMAS',
        details: 'Ementa',
        level: 12,
        weight: 165,
        groupId: 5,
        subGroupId: 3,
        slots: [
          103,
        ],
        status: 0,
        color: "secondary",
      }
    ],

    edgesPadrao:[
      {
        id: 1,
        from: 1,
        to: 5,
        label: 'DCC203 -> DCC033',
      },
      {
        id: 2,
        from: 3,
        to: 5,
        label: 'MAT038 -> DCC033',
      },
      {
        id: 3,
        from: 2,
        to: 8,
        label: 'MAT001 -> MAT039',
      },
      {
        id: 4,
        from: 3,
        to: 8,
        label: 'MAT038 -> MAT039',
      },
      {
        id: 5,
        from: 1,
        to: 9,
        label: 'DCC203 -> DCC204',
      },
      {
        id: 6,
        from: 7,
        to: 11,
        label: 'FIS065 -> FIS069',
      },
      {
        id: 7,
        from: 8,
        to: 11,
        label: 'MAT039 -> FIS069',
      },
      {
        id: 8,
        from: 7,
        to: 12,
        label: 'FIS065 -> FIS152',
      },
      {
        id: 9,
        from: 2,
        to: 12,
        label: 'MAT001 -> FIS152',
      },
      {
        id: 10,
        from: 8,
        to: 13,
        label: 'MAT039 -> MAT002',
      },
      {
        id: 11,
        from: 8,
        to: 14,
        label: 'MAT039 -> MAT015',
      },
      {
        id: 12,
        from: 9,
        to: 15,
        label: 'DCC204 -> ELE078',
      },
      {
        id: 13,
        from: 9,
        to: 16,
        label: 'DCC204 -> DCC205',
      },
      {
        id: 14,
        from: 6,
        to: 17,
        label: 'ELT124 -> ELT029',
      },
      {
        id: 15,
        from: 11,
        to: 18,
        label: 'FIS069 -> FIS086',
      },
      {
        id: 16,
        from: 10,
        to: 19,
        label: 'ELE064 -> ELE065',
      },
      {
        id: 17,
        from: 14,
        to: 19,
        label: 'MAT015 -> ELE065',
      },
      {
        id: 18,
        from: 8,
        to: 21,
        label: 'MAT039 -> MAT016',
      },
      {
        id: 19,
        from: 9,
        to: 23,
        label: 'DCC204 -> ELT075',
      },
      {
        id: 20,
        from: 14,
        to: 23,
        label: 'MAT015 -> ELT075',
      },
      {
        id: 21,
        from: 20,
        to: 23,
        label: 'EST031 -> ELT075',
      },
      {
        id: 22,
        from: 14,
        to: 24,
        label: 'MAT015 -> ELT125',
      },
      {
        id: 23,
        from: 11,
        to: 25,
        label: 'FIS069 -> ELE079',
      },
      {
        id: 24,
        from: 19,
        to: 28,
        label: 'ELE065 -> ELE156',
      },
      {
        id: 25,
        from: 26,
        to: 29,
        label: 'ELE092 -> ELE081',
      },
      {
        id: 26,
        from: 14,
        to: 30,
        label: 'MAT015 -> ELE082',
      },
      {
        id: 27,
        from: 15,
        to: 31,
        label: 'ELE078 -> ELE080',
      },
      {
        id: 28,
        from: 24,
        to: 32,
        label: 'ELT125 -> ELT126',
      },
      {
        id: 29,
        from: 9,
        to: 33,
        label: 'DCC204 -> DCC023',
      },
      {
        id: 30,
        from: 5,
        to: 34,
        label: 'DCC033 -> ELE077',
      },
      {
        id: 31,
        from: 14,
        to: 34,
        label: 'MAT015 -> ELE077',
      },
      {
        id: 32,
        from: 29,
        to: 35,
        label: 'ELE081 -> ELE084',
      },
      {
        id: 33,
        from: 20,
        to: 36,
        label: 'EST031 -> EEE017',
      },
      {
        id: 34,
        from: 14,
        to: 38,
        label: 'MAT015 -> ELE075',
      },
      {
        id: 35,
        from: 34,
        to: 39,
        label: 'ELE077 -> ELE088',
      },
      {
        id: 36,
        from: 24,
        to: 40,
        label: 'ELT125 -> ELE042',
      },
      {
        id: 37,
        from: 34,
        to: 41,
        label: 'ELE077 -> ELE083',
      },
      {
        id: 38,
        from: 35,
        to: 42,
        label: 'ELE084 -> ELE086',
      },
      {
        id: 39,
        from: 24,
        to: 43,
        label: 'ELT125 -> ELT016',
      },
      {
        id: 40,
        from: 37,
        to: 44,
        label: 'ELT079 -> ELT080',
      },
      {
        id: 41,
        from: 42,
        to: 45,
        label: 'ELE086 -> ELE087',
      },
      {
        id: 42,
        from: 47,
        to: 48,
        label: 'EEE018 -> EEE019',
      },
    ],
    cargaMinima: 0,
    cargaMaxima: 0,
    distanciaMaxima: 0,
    resultados: null,
    corAtual: "info",
  };

  setStatusUmLabel(label){

    let item = this.state.nodesPadrao.find(x => x.label === label);
    this.setStatusUm(item["id"]);
    console.log(this.state.nodesPadrao);
  }

  setStatusUm(id){
    let aux=this.state.nodesPadrao;
    aux[id-1].status=1;
    this.setState({ nodesPadrao: aux });
  }
 
  setStatusZero(id){
    let aux=this.state.nodesPadrao;
    aux[id-1].status=0;
    this.setState({ nodesPadrao: aux });
  }

  setCargaMinima(valor){
    this.setState({ cargaMinima: valor});
  }

  setCargaMaxima(valor){
    this.setState({ cargaMaxima: valor});
  }

  setDistanciaMaxima(valor){
    this.setState({ distanciaMaxima: valor});
  }

  setResultados(valor){
    this.setState({ resultados: valor});
  }

  getProximaCor(){
    console.log(this.state.corAtual);
    var aux = this.state.corAtual;
    if(this.state.corAtual==="info"){
      this.state.corAtual = "success";
    }
    else if(this.state.corAtual==="success"){
      this.state.corAtual = "warning";
    }
    else if(this.state.corAtual==="warning"){
      this.state.corAtual = "danger";
    }
    else if(this.state.corAtual==="danger"){
      this.state.corAtual = "info";
    }
    return aux;
  }

  getCor(valor){
    return this.state.nodesPadrao.find(item => item.id === valor).color;
  }

  setCor(id,cor){
    this.state.nodesPadrao.find(item => item.id === id).color=cor;
  }

  achaItemPorLabel(label){
    let item = this.state.nodesPadrao.find(x => x.label === label);
    return item;
  }

  atualizaVisual(label) {

    var vetorDeCheckboxes = document.getElementsByClassName(label);
    var itemComLabel;

    itemComLabel = this.achaItemPorLabel(label);

    if(itemComLabel.status===1){
      vetorDeCheckboxes[1].checked=true;

        console.log("vou mandar o id ",itemComLabel.id);

        //DEFINE A COR DO QUADRADO PARA OUTRA
        this.setCor(itemComLabel.id,"primary");

    }else{
        vetorDeCheckboxes[1].checked=false;

        //DEFINE A COR DO QUADRADO PARA OUTRA
        //this.setCor(itemComLabel.id,"secondary");
    }
    console.log(this.state.nodesPadrao);

    

}

  atualizaData(label, id) {

    var vetorDeCheckboxes = document.getElementsByClassName(label);

    if(vetorDeCheckboxes[1].checked){
        this.setStatusUm(id);
        //adicionarDisciplina(1,id);
        console.log("marquei o "+label);
         //problema aq

        //DEFINE A COR DO QUADRADO PARA OUTRA
        this.setCor(id,"primary");

    }else if(!vetorDeCheckboxes[1].checked){
        console.log("desmarquei o "+label);
        //removerDisciplina(1,id);
        this.setStatusZero(id);

        //DEFINE A COR DO QUADRADO PARA OUTRA
        this.setCor(id,"secondary");
    }
    console.log(this.state.nodesPadrao);

  }

}