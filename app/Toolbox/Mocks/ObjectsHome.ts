interface IMockObjects {
   label: string;
   check: boolean;
}


interface IFilters {
   name: string;
   mocks: IMockObjects[];
}

interface MocksFilterHome {
   filter: IFilters;
}

export const MockFilterHome: MocksFilterHome[] = [
   {
      filter: {
         name: 'Tamaño',
         mocks: [
            {
               label: '1200 gr',
               check: true,
            },
            {
               label: '600 gr',
               check: false,
            },
            {
               label: '300 gr',
               check: false,
            },
         ],
      },
   },
   {
      filter: {
         name: 'Sabor',
         mocks: [
            {
               label: 'Chocolate',
               check: true,
            },
            {
               label: 'Vainilla',
               check: false,
            },
            {
               label: 'Cacao',
               check: false,
            },
         ],
      },
   },
   {
      filter: {
         name: 'Objetivos',
         mocks: [
            {
               label: 'Construye Músculo',
               check: true,
            },
            {
               label: 'Definicion Muscular',
               check: false,
            },
            {
               label: 'Pierde Peso y Tonifica',
               check: false,
            },
            {
               label: 'Salud y Bienestar',
               check: false,
            },
            {
               label: 'Orgánico y Naturales',
               check: false,
            },
         ],
      },
   },
];
