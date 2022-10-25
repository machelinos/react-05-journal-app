import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStatus } from '../hooks';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { startLoadingNotes } from '../store/journal';
import { CheckingAuthentication } from '../ui';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { status } = useAuthStatus();


  if(status==='checking'){
    return(
      <CheckingAuthentication />
    )
  }

  dispatch(startLoadingNotes());

  return (
    <Routes>
      {
        status==='authenticated' ? <Route path='/*' element={<JournalRoutes />} /> : <Route path='/auth/*' element={<AuthRoutes />} />
      }
      
      <Route path='/*' element={<Navigate to='/auth/login' />} />
      

    </Routes>
  )
}
