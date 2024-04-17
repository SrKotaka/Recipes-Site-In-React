import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Pudim from './components/resource/pudim';
import Musse from './components/resource/musse'
import Arroz from './components/resource/arroz'
import BakedOats from './components/resource/bakedOats'
import BifeAcebolado from './components/resource/bifeAcebolado'
import BifeAMilanesa from './components/resource/bifeAMilanesa'
import BoloDeCenoura from './components/resource/boloDeCenoura'
import BoloDeChocolate from './components/resource/boloDeChocolate'
import BoloDeMorango from './components/resource/boloDeMorango'
import BombomDeBanana from './components/resource/bombomDeBanana'
import BombomDeMorango from './components/resource/bombomDeMorango'
import BrigadeiroDePote from './components/resource/brigadeiroDePote'
import Brownie from './components/resource/brownie'
import Cinnamon from './components/resource/cinnamon'
import Cookies from './components/resource/cookies'
import Costela from './components/resource/costela'
import Coxinha from './components/resource/coxinha'
import Cupcake from './components/resource/cupcake'
import Donuts from './components/resource/donuts'
import EmpadaDePalmito from './components/resource/empadaDePalmito'
import Lasanha from './components/resource/lasanha'
import Macarons from './components/resource/macarons'
import Macarrao from './components/resource/macarrao'
import PaoDeMel from './components/resource/paoDeMel'
import PaveDeNinho from './components/resource/paveDeNinho'
import PetitBrownie from './components/resource/petitBrownie'
import Pizza from './components/resource/pizza'
import Strogonoff from './components/resource/strogonoff'
import TortaDeFrango from './components/resource/tortaDeFrango'
import TortaDeMorango from './components/resource/tortaDeMorango'
export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/pudim" element={<Pudim />} />
      <Route path="/musse" element={<Musse />} />
      <Route path="/arroz" element={<Arroz />} />
      <Route path="/bakedOats" element={<BakedOats />} />
      <Route path="/bifeAcebolado" element={<BifeAcebolado />} />
      <Route path="/bifeAMilanesa" element={<BifeAMilanesa />} />
      <Route path="/boloDeCenoura" element={<BoloDeCenoura />} />
      <Route path="/boloDeChocolate" element={<BoloDeChocolate />} />
      <Route path="/boloDeMorango" element={<BoloDeMorango />} />
      <Route path="/bombomDeBanana" element={<BombomDeBanana />} />
      <Route path="/bombomDeMorango" element={<BombomDeMorango />} />
      <Route path="/brigadeiroDePote" element={<BrigadeiroDePote />} />
      <Route path="/brownie" element={<Brownie />} />
      <Route path="/cinnamon" element={<Cinnamon />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/costela" element={<Costela />} />
      <Route path="/coxinha" element={<Coxinha />} />
      <Route path="/cupcake" element={<Cupcake />} />
      <Route path="/donuts" element={<Donuts />} />
      <Route path="/empadaDePalmito" element={<EmpadaDePalmito />} />
      <Route path="/lasanha" element={<Lasanha />} />
      <Route path="/macarons" element={<Macarons />} />
      <Route path="/macarrao" element={<Macarrao />} />
      <Route path="/paoDeMel" element={<PaoDeMel />} />
      <Route path="/paveDeNinho" element={<PaveDeNinho />} />
      <Route path="/petitBrownie" element={<PetitBrownie />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/strogonoff" element={<Strogonoff />} />
      <Route path="/tortaDeFrango" element={<TortaDeFrango />} />
      <Route path="/tortaDeMorango" element={<TortaDeMorango />} />
    </Routes>
  );
}
