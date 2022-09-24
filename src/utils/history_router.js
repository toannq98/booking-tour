// // "HistoryRouter" implementation
// import * as React from 'react';
// import { BrowserHistory } from 'history';
// import { Router } from 'react-router-dom';

// // export interface HistoryRouterProps {
// //     history: BrowserHistory
// //     basename?: string
// //     children?: React.ReactNode
// // }
// const history = BrowserHistory;
// export function HistoryRouter() {

//     let [state, setState] = React.useState({
//         action: history.action,
//         location: history.location,
//     })

//     React.useLayoutEffect(() => history.listen(setState), [history])

//     return (
//         <Router
//             // basename={basename}
//             children={React.ReactNode}
//             location={state.location}
//             navigationType={state.action}
//             navigator={BrowserHistory}
//         />
//     )
// }