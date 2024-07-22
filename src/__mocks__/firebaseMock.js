
// src/__mocks__/firebaseMock.js
const mockAuth = {
  currentUser: {
    accessToken: 'mockAccessToken',
    email: 'mock@example.com',
  },
};

const getAuth = () => mockAuth;
const signInWithEmailAndPassword = jest.fn().mockResolvedValue({
  user: mockAuth.currentUser,
});
const GoogleAuthProvider = jest.fn();

export { getAuth, signInWithEmailAndPassword, GoogleAuthProvider };
