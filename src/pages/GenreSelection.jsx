import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Sidebar from '../components/ProfileSideBar';

const GenreSelection = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/genres');

      if (response.data) {
        setGenres(response.data);
      } else {
        console.error('장르를 가져오는 데 실패했습니다');
      }
    } catch (error) {
      console.error('장르를 가져오는 데 실패했습니다', error);
    }
  };

  const handleGenreUpdate = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3100/api/update-genre',
        { genre: selectedGenre }
      );

      if (response.status === 200) {
        console.log('수정되었습니다');
        // 추가적인 처리 로직을 구현하거나 메시지를 표시할 수 있습니다.
      } else {
        console.error('장르 수정 실패');
      }
    } catch (error) {
      console.error('장르 수정 실패:', error);
    }
  };

  return (
    <GenreWrap>
      <Sidebar />
      <GenreTitle>선호하는 장르</GenreTitle>
      <GenreList>
        {genres.map((genre) => (
          <GenreItem
            key={genre}
            selected={selectedGenre === genre}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </GenreItem>
        ))}
      </GenreList>
      <UpdateButton onClick={handleGenreUpdate}>장르 수정</UpdateButton>
    </GenreWrap>
  );
};

const GenreWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #232323;
`;

const GenreTitle = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 50px;
  margin-left: 250px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

const GenreList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const GenreItem = styled.li`
  cursor: pointer;
  color: ${(props) => (props.selected ? 'red' : 'inherit')};
`;

const UpdateButton = styled.button`
  margin-top: 20px;
`;

export default GenreSelection;