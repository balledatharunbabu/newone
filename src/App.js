
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Flow from './Components/Flow'  
// import Headerbar from './Components/Header'
// import Header from './MenuBar/Header'
// import Menu from './Components/Menu';
import ExceptionDetails from './Components/exception'
// import ViewFilter from './Components/viewFilter'
import Auditres from './Components/audits'
import Filter from './Components/auditFilter'
import ExceptionFilter from './Components/exceptionFilter'
import ViewReplay from './Components/replay'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './Components/View/ViewFlow/View';


function App() {
  return (
    <div >
      {/* <Flow /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Flow />} />
          {/* <Route path="/viewFilter" element={<ViewFilter></ViewFilter>}></Route> */}
          <Route path="/viewDetails" element={<View></View>}></Route>
          <Route path="/auditFilter" element={<Filter></Filter>}></Route>
          <Route path="/auditDetails" element={<Auditres></Auditres>}></Route>
          <Route path="/exceptionFilter" element={<ExceptionFilter></ExceptionFilter>}></Route>
          <Route path="/exceptionDetails" element={<ExceptionDetails></ExceptionDetails>}></Route>
          <Route path="/replayDetails" element={<ViewReplay></ViewReplay>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
