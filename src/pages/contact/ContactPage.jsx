import React from 'react'
import { CardsContact } from '../../components/contact/CardsContact';
import { MapsAndForm } from '../../components/contact/MapsAndForm';
import { NavBarSecundary } from '../../components/contact/NavBarSecundary';
import { PromoContact } from '../../components/contact/PromoContact';

export const ContactPage = () => {
  return (
    <>
      <PromoContact />
      <NavBarSecundary />
      <MapsAndForm />
      <CardsContact />
    </>
  )
};

