let initialState = {
  players: [],
  selectedPlayer: {},
  selectedIdx: null
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "POST":
      return { ...state, players: [...state.players, payload] };

    case "GET":
      return { ...state, players: payload };

    case "PUT":
      const oldState = { ...state };
      const newState = oldState.players.map((element, idx) => {
        if (idx === payload.id) {
          element = payload.record;
        }
        return element;
      });
      return { ...state, players: newState, selectedPlayer: {} };

    case "DELETE":
      const nState = state.players.filter((record, idx) => idx !== payload);
      return { ...state, players: nState };
    case "PATCH":
      return {
        ...state,
        selectedPlayer: state.players[payload],
        selectedIdx: payload
      };

    default:
      return state;
  }
};
