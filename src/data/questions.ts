import type { Question } from "../types/question";

export const questions: Question[][] = [
  [
    {
      id: 1,
      question: "¿Cuál es la capital de Francia?",
      options: ["Berlín", "Madrid", "París", "Roma"],
      correctAnswer: "París",
    },
    {
      id: 2,
      question: "¿Qué planeta es conocido como el Planeta Rojo?",
      options: ["Tierra", "Marte", "Júpiter", "Saturno"],
      correctAnswer: "Marte",
    },
    {
      id: 3,
      question: "¿Cuál es el océano más grande de la Tierra?",
      options: [
        "Océano Atlántico",
        "Océano Índico",
        "Océano Ártico",
        "Océano Pacífico",
      ],
      correctAnswer: "Océano Pacífico",
    },
    {
      id: 4,
      question: "¿En qué año llegó el hombre a la Luna?",
      options: ["1965", "1969", "1972", "1975"],
      correctAnswer: "1969",
    },
    {
      id: 5,
      question: "¿Cuál es el río más largo del mundo?",
      options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      correctAnswer: "Amazonas",
    },
    {
      id: 6,
      question: "¿Quién pintó la Mona Lisa?",
      options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Donatello"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      id: 7,
      question: "¿Cuál es el elemento químico con símbolo 'Au'?",
      options: ["Plata", "Oro", "Aluminio", "Hierro"],
      correctAnswer: "Oro",
    },
    {
      id: 8,
      question: "¿En qué continente se encuentra Egipto?",
      options: ["Asia", "Europa", "África", "América"],
      correctAnswer: "África",
    },
    {
      id: 9,
      question: "¿Cuál es la montaña más alta del mundo?",
      options: ["K2", "Kilimanjaro", "Monte Everest", "Aconcagua"],
      correctAnswer: "Monte Everest",
    },
    {
      id: 10,
      question: "¿Quién escribió 'Don Quijote de la Mancha'?",
      options: [
        "Lope de Vega",
        "Miguel de Cervantes",
        "Federico García Lorca",
        "Gabriel García Márquez",
      ],
      correctAnswer: "Miguel de Cervantes",
    },
  ],

  // Grupo 2: preguntas nivel intermedio (ids 11-20)
  [
    {
      id: 11,
      question: "¿Cuál es la moneda oficial de Japón?",
      options: ["Yen", "Won", "Dólar", "Euro"],
      correctAnswer: "Yen",
    },
    {
      id: 12,
      question: "¿Qué lengua se habla principalmente en Brasil?",
      options: ["Español", "Portugués", "Inglés", "Francés"],
      correctAnswer: "Portugués",
    },
    {
      id: 13,
      question: "¿Quién desarrolló la teoría de la relatividad?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
      correctAnswer: "Albert Einstein",
    },
    {
      id: 14,
      question: "¿Cuál es el idioma con más hablantes nativos en el mundo?",
      options: ["Inglés", "Español", "Chino mandarín", "Hindi"],
      correctAnswer: "Chino mandarín",
    },
    {
      id: 15,
      question: "¿En qué país se encuentra la región de la Toscana?",
      options: ["España", "Francia", "Italia", "Grecia"],
      correctAnswer: "Italia",
    },
    {
      id: 16,
      question: "¿Qué gas es esencial para la respiración humana?",
      options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
      correctAnswer: "Oxígeno",
    },
    {
      id: 17,
      question: "¿Cuál es la capital de México?",
      options: ["Guadalajara", "Monterrey", "Ciudad de México", "Puebla"],
      correctAnswer: "Ciudad de México",
    },
    {
      id: 18,
      question: "¿Qué instrumento mide la presión atmosférica?",
      options: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"],
      correctAnswer: "Barómetro",
    },
    {
      id: 19,
      question: "¿Qué autor escribió 'Cien años de soledad'?",
      options: ["Jorge Luis Borges", "Pablo Neruda", "Gabriel García Márquez", "Mario Vargas Llosa"],
      correctAnswer: "Gabriel García Márquez",
    },
    {
      id: 20,
      question: "¿Cuál es el símbolo químico del sodio?",
      options: ["S", "Na", "K", "Si"],
      correctAnswer: "Na",
    },
  ],

  // Grupo 3: preguntas nivel avanzado/difícil (ids 21-30)
  [
    {
      id: 21,
      question: "¿Quién compuso la 'Novena Sinfonía' conocida por el 'Himno a la Alegría'?",
      options: ["Mozart", "Beethoven", "Brahms", "Tchaikovsky"],
      correctAnswer: "Beethoven",
    },
    {
      id: 22,
      question: "¿Cuál es la capital de Mongolia?",
      options: ["Ulan Bator", "Astana", "Bishkek", "Tiflis"],
      correctAnswer: "Ulan Bator",
    },
    {
      id: 23,
      question: "¿Qué matemático es conocido por el teorema que relaciona catetos e hipotenusa en un triángulo rectángulo?",
      options: ["Euclides", "Pitágoras", "Arquímedes", "Fermat"],
      correctAnswer: "Pitágoras",
    },
    {
      id: 24,
      question: "¿En qué año comenzó la Primera Guerra Mundial?",
      options: ["1912", "1914", "1918", "1920"],
      correctAnswer: "1914",
    },
    {
      id: 25,
      question: "¿Cuál es la principal moneda utilizada en el Reino Unido?",
      options: ["Euro", "Libra esterlina", "Dólar", "Franco"],
      correctAnswer: "Libra esterlina",
    },
    {
      id: 26,
      question: "¿Qué órgano del cuerpo humano produce la insulina?",
      options: ["Hígado", "Páncreas", "Riñón", "Bazo"],
      correctAnswer: "Páncreas",
    },
    {
      id: 27,
      question: "¿Cuál es la distancia aproximada entre la Tierra y el Sol (una unidad astronómica)?",
      options: ["150,000 km", "1,500,000 km", "150,000,000 km", "1,500,000,000 km"],
      correctAnswer: "150,000,000 km",
    },
    {
      id: 28,
      question: "¿Quién escribió la obra 'La casa de Bernarda Alba'?",
      options: ["Federico García Lorca", "Lope de Vega", "Benito Pérez Galdós", "Antonio Machado"],
      correctAnswer: "Federico García Lorca",
    },
    {
      id: 29,
      question: "¿Qué elemento de la tabla periódica tiene el número atómico 1?",
      options: ["Helio", "Hidrógeno", "Oxígeno", "Carbono"],
      correctAnswer: "Hidrógeno",
    },
    {
      id: 30,
      question: "¿Qué tratado puso fin formalmente a la Primera Guerra Mundial?",
      options: ["Tratado de Versalles", "Tratado de Tordesillas", "Tratado de Utrecht", "Tratado de París"],
      correctAnswer: "Tratado de Versalles",
    },
  ],
];
