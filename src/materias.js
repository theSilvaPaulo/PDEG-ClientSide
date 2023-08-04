import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Calcular from "views/examples/Calcular.js";

var materias = [

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
      }
    ];
    export default materias;


  