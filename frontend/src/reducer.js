const initialState = {
  currentCard: {
    value: null,
    id: null
  },
  firstCard: {
    value: null,
    id: null
  },
  secondCard: {
    value: null,
    id: null
  },
  cards: [
    {
      id: 0,
      hide: true,
      flip: false
    },
    {
      id: 1,
      hide: true,
      flip: false
    },
    {
      id: 2,
      hide: true,
      flip: false
    },
    {
      id: 3,
      hide: true,
      flip: false
    },
    {
      id: 4,
      hide: true,
      flip: false
    },
    {
      id: 5,
      hide: true,
      flip: false
    },
    {
      id: 6,
      hide: true,
      flip: false
    },
    {
      id: 7,
      hide: true,
      flip: false
    },
    {
      id: 8,
      hide: true,
      flip: false
    },
    {
      id: 9,
      hide: true,
      flip: false
    },
    {
      id: 10,
      hide: true,
      flip: false
    },
    {
      id: 11,
      hide: true,
      flip: false
    },
    {
      id: 12,
      hide: true,
      flip: false
    },
    {
      id: 13,
      hide: true,
      flip: false
    },
    {
      id: 14,
      hide: true,
      flip: false
    },
    {
      id: 15,
      hide: true,
      flip: false
    },
    {
      id: 16,
      hide: true,
      flip: false
    },
    {
      id: 17,
      hide: true,
      flip: false
    },
    {
      id: 18,
      hide: true,
      flip: false
    },
    {
      id: 19,
      hide: true,
      flip: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  //const currentCardInitial = initialState.currentCard;
  const firstCardInitial = initialState.firstCard;
  const secondCardInitial = initialState.secondCard;
  const cards = state.cards;

  switch (action.type) {
    case "UPDATE_CURENT_CARD":
      if (state.firstCard.value === null) {
        console.log("firstCard ", action.currentCard);
        return { ...state, firstCard: action.currentCard };
      } else if (state.secondCard.value === null) {
        console.log("secondCard ", action.currentCard);
        return { ...state, secondCard: action.currentCard };
      }
      return state;
    case "RESET_CARDS":
      cards[action.ids[0]].flip = false;
      cards[action.ids[1]].flip = false;
      return {
        ...state,
        firstCard: firstCardInitial,
        secondCard: secondCardInitial,
        cards
      };
    case "TOGGLE_FLIP":
      cards[action.id].flip = true;
      return {
        ...state,
        cards
      };
    case "PAIR_RESET":
      return {
        ...state,
        firstCard: firstCardInitial,
        secondCard: secondCardInitial
      };
    default:
      return state;
  }
};

export default reducer;
