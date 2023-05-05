import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcademyCreate from './views/AcademyCreate/AcademyCreate';
import AcademyDetails from './views/AcademyDetails/AcademyDetails';
import AcademyEdit from './views/AcademyEdit/AcademyEdit';
import AcademyPanel from './views/AcademiesPanel/AcademyPanel';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import Inicio from './components/Inicio/Inicio';
import InfoFutbol from './components/Info/futbol/InfoFutbol';
import InfoTenis from './components/Info/tenis/InfoTenis';
import InfoNatacion from './components/Info/natacion/InfoNatacion';
import InfoBasquetball from './components/Info/basquetball/InfoBasquetball';
import InfoAtletismo from './components/Info/atletismo/InfoAtletismo';
import InfoTeatro from './components/Info/teatro/InfoTeatro';
import InfoMusica from './components/Info/música/InfoMusica';
import InfoAstronomia from './components/Info/astronomía/InfoAstronomia';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/academias/new' element={<AcademyCreate />}/>
          <Route path='/academias' element={<AcademyPanel />} />
          <Route path='/academias/:id' element={<AcademyDetails />} />
          <Route path='/academias/:id/edit' element={<AcademyEdit />} />
          <Route path='/futbol' element={<InfoFutbol />} />
          <Route path='/tenis' element={<InfoTenis />} />
          <Route path='/natacion' element={<InfoNatacion />} />
          <Route path='/basquetball' element={<InfoBasquetball />} />
          <Route path='/atletismo' element={<InfoAtletismo />} />
          <Route path='/teatro' element={<InfoTeatro />} />
          <Route path='/musica' element={<InfoMusica />} />
          <Route path='/astronomia' element={<InfoAstronomia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
