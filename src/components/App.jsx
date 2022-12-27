import AppRoutes from 'Routes/Routes';
// import ModalAddsPet from './User/ModalAddsPet';
import PetsData from './User/PetsData';
import PetsList from './User/PetsList';

export default function App() {
  return (
    <>
      <AppRoutes />
      <h1>Start Project Petly</h1>
      {/* <ModalAddsPet /> */}
      <PetsData />
      <PetsList />
    </>
  );
}
