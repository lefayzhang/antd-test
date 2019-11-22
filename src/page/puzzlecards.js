// import React, { Component } from 'react';
// import { Card, /* Button */ } from 'antd';
// import { connect } from 'dva';

// const namespace = 'puzzlecards';

// const mapStateToProps = (state) => {
//   const cardList = state[namespace].data;
//   return {
//     cardList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDidMount: () => {
//       dispatch({
//         type: `${namespace}/queryInitCards`,
//       });
//     },
//   };
// };

// @connect(mapStateToProps, mapDispatchToProps)
// export default class PuzzleCardsPage extends Component {
//   componentDidMount() {
//     this.props.onDidMount();
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.props.cardList.map(card => {
//             return (
//               <Card key={card.id}>
//                 <div>Q: {card.setup}</div>
//                 <div>
//                   <strong>A: {card.punchline}</strong>
//                 </div>
//               </Card>
//             );
//           })
//         }
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Card } from "antd";

export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: "Did you hear about the two silk worms in a race?",
          punchline: "It ended in a tie"
        },
        {
          id: 2,
          setup: "What happens to a frog's car when it breaks down?",
          punchline: "It gets toad away"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}
