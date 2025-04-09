import DefaultWelcomeCard from '@/components/App/DefaultWelcomeCard';
import LinkCard from '@/components/App/LinkCard';
import React from 'react';

const Pinboard = () => {
  const data = [
    {
      iconLink:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMEonWCKdNWyW8tTji8fAJ2rOKRq2kFbkjJYtV3fBLIoD154i--dpCYmv4vziO5IDyhri1',
      linkName: 'KMUTT Official Website',
      playlists: [
        'University',
        'Academics',
        'Events',
        'Haha',
        'Hehe',
        'Hoo',
        'Hee',
      ],
      link: 'https://www.kmutt.ac.th',
      tags: ['education', 'thailand', 'university'],
      createdAt: new Date('2023-05-15T09:30:00Z'),
    },
    {
      iconLink:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMEonWCKdNWyW8tTji8fAJ2rOKRq2kFbkjJYtV3fBLIoD154i--dpCYmv4vziO5IDyhri1',
      linkName: 'Computer Science Department',
      playlists: ['CS101', 'Programming', 'Algorithms'],
      link: 'https://cs.kmutt.ac.th',
      tags: ['computer-science', 'programming', 'bangkok'],
      createdAt: new Date('2023-06-20T14:15:00Z'),
    },
    {
      iconLink:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMEonWCKdNWyW8tTji8fAJ2rOKRq2kFbkjJYtV3fBLIoD154i--dpCYmv4vziO5IDyhri1',
      linkName: 'KMUTT Library Portal',
      playlists: ['Research Papers', 'E-Books', 'Theses'],
      link: 'https://library.kmutt.ac.th',
      tags: ['library', 'research', 'resources'],
      createdAt: new Date('2023-07-10T11:00:00Z'),
    },
  ];

  if (!data || data.length === 0) {
    return (
      <DefaultWelcomeCard
        name='Pin Your Favourite Links Here!'
        description='You can Pin your favourite Links by clicking on the More Button on each Link and clicking Pin to Dashboard'
      />
    );
  }
  return (
    <>
      <h2>Pin</h2>
      {data.map((item, idx) => (
        <LinkCard data={item} />
      ))}
    </>
  );
};

export default Pinboard;
