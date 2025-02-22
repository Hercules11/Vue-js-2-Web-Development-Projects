// Some usefull letiables
let maxHealth = 10
let maxFood = 10
let handSize = 5
let cardUid = 0
let currentPlayingCard = null

// The consolidated state of our app
var state = {
  // UI
  activeOverlay: null,
  // World
  worldRatio: getWorldRatio(),
  // Game
  turn: 1,
  players: [
    {
      name: 'Anne of Cleves',
      food: 10,
      health: 10,
      skipTurn: false,
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
    {
      name: 'William the Bald',
      food: 10,
      health: 10,
      skipTurn: false,
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
  ],
  currentPlayerIndex: Math.round(Math.random()),
  get currentPlayer () {
    return state.players[state.currentPlayerIndex]
  },
  get currentOpponentId () {
    return state.currentPlayerIndex === 0 ? 1 : 0
  },
  get currentOpponent () {
    return state.players[state.currentOpponentId]
  },
  get currentHand () {
    return state.currentPlayer.hand
  },
  drawPile: pile,
  discardPile: {},
  canPlay: false,
}
