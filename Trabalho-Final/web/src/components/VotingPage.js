import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const VotingPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; 

  useEffect(() => {
    const fetchUserByEmail = async () => {
      if (!email) {
        alert('Email not provided.');
        navigate('/login');
        return;
      }

      try {
        const { data: userData } = await axios.get(`http://localhost:5000/users/${email}`);
        if (userData.voted) {
          alert('You have already voted.');
          navigate('/login');
        } else {
          setUser(userData);
        }
      } catch (error) {
        console.error('Error when searching for userr', error);
        alert('Error when searching for user');
        navigate('/login');
      }
    };

    fetchUserByEmail();
    fetchCandidates();
  }, [email, navigate]);

  const fetchCandidates = async () => {
    const response = await axios.get('http://localhost:5000/candidates');
    setCandidates(response.data);
  };

  const handleVote = async (candidateId) => {
    if (!user) {
      alert('Usuário não identificado.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/vote', {
        userId: user.id,
        candidateId
      });
      alert('Successfully registered vote');
      navigate('/'); 
    } catch (error) {
      console.error('Error when voting', error);
      alert('Error registering vote');
    }
  };

  return (
    <div>
      <h2>Register your vote</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name}
            <button onClick={() => handleVote(candidate.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotingPage;
