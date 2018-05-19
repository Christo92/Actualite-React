export const reactionEmojis = {
  'likes': '☺️',
  'hearts': '😍',
  'sad': '😭',
};

export const actualites = [
  {
    id: '47ld',
    message: 'Bonjour tout le monde !',
    datePublication: Date.now() - 100,
    auteur: {
      nom: 'Arnaud',
      avatar: 'http://placehold.it/400x400',
    },
    reactions: {
      likes: 4,
      hearts: 5,
      sad: 0,
    },
    commentaires: [
      {
        message: 'Salut à toi !',
        datePublication: Date.now() - 30000,
        auteur: {
          nom: 'Nick',
          avatar: 'http://placehold.it/400x400',
        },
        actualiteId: '47ld',
      },
      {
        message: 'Salut',
        datePublication: Date.now() - 10000,
        auteur: {
          nom: 'Damien',
          avatar: 'http://placehold.it/400x400',
        },
        actualiteId: '47ld',
      },
    ],
  },
  {
    id: 'i9pz',
    message: 'Je ne sais plus quoi faire...',
    datePublication: Date.now() - 100000,
    auteur: {
      nom: 'Nick',
      avatar: 'http://placehold.it/400x400',
    },
    reactions: {
      likes: 1,
      hearts: 0,
      sad: 3,
    },
    commentaires: [],
  },
];
