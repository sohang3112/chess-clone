class Piece {
  constructor(color, name) {
    this.color = color;
    this.name = name;
    this.value = piece_values[name];
    this.icon = `<i class="fas fa-chess-${name} ${color}-piece"></i>`;
  }
}

const piece_values = {
  pawn: 1,
  knight: 3,
  bishop: 3,
  rook: 5,
  queen: 10,
  king: 100
}
const piece_short_forms = {
  pawn: 'p',
  knight: 'kn',
  bishop: 'b',
  rook: 'r',
  queen: 'q',
  king: 'k'
};
const color_short_forms = {
  black: 'B',
  white: 'W'
};

// defining global functions as short cuts for creating chess pieces
// first letter (capitalized) --> color (B -> black, W -> white)
// rest denotes piece name
// @example: Br() /* black rook */, Wkn() /* white knight */
for (let color in color_short_forms) {
  for (let piece in piece_short_forms) {
    window[color_short_forms[color] + piece_short_forms[piece]] = () => new Piece(color, piece);
  }
}

const _ = undefined;            // empty square

// initially empty
const board = [
  [Br(), Bkn(), Bb(), Bq(), Bk(), Bb(), Bkn(), Br()],
  [Bp(), Bp(),  Bp(), Bp(), Bp(), Bp(), Bp(),  Bp()],
  [_,    _,     _,    _,    _,    _,    _,     _   ],
  [_,    _,     _,    _,    _,    _,    _,     _   ],
  [_,    _,     _,    _,    _,    _,    _,     _   ],
  [_,    _,     _,    _,    _,    _,    _,     _   ],
  [Wp(), Wp(),  Wp(), Wp(), Wp(), Wp(), Wp(),  Wp()],
  [Wr(), Wkn(), Wb(), Wq(), Wk(), Wb(), Wkn(), Wr()]
];

function boardHtml(board) {
  const html = '<table>';
  for (let row of board) {
    html += '<tr>';
    for (let piece of row) {
      html += `<td>${piece === _ ? '' : piece.icon}</td>`;
    }
    html += '</tr>';
  }
  hmtl += '</table>';
  return html;
}
