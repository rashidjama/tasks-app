import React from 'react';
import PageConent from './PageContent';
import NotesList from './NotesList';
import NoteProvider from './contexts/NoteContext';



export default function Notebook() {
    return (
      <PageConent>
        <div className='container mt-5'>
          <NoteProvider>
            <NotesList/>
          </NoteProvider>
        </div>
      </PageConent>
    )
  }

